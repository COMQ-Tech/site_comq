# API COMQ — Visão Geral e Modelagem

> Backend da plataforma COMQ. Fonte única de verdade do conteúdo dinâmico do site e da newsletter.

**Stack** (já registrada na descrição do board Trello "Api COMQ"):
- **NestJS** (Node.js + TypeScript)
- **TypeORM**
- **PostgreSQL** (sugestão: Neon ou Supabase no plano free como início)
- **Hospedagem da API**: Render ou Railway (planos free para começar)
- **Hospedagem de mídia**: Cloudflare R2 ou Cloudinary (planos free)

---

## Princípio arquitetural

> **Front burro, API rica.**
> O `site_comq` (frontend) é apenas a "casca" — HTML/CSS estruturais. **Tudo que é conteúdo** (textos do hero, descrições de seção, lista de parceiros, eventos, notícias, imagens, cores e fontes configuráveis) vem da API. Isso permite que a direção do COMQ atualize o site sem código.

Pilares:
- Cache agressivo (HTTP `Cache-Control` + ETag) — API rápida mesmo no plano free
- Logs de auditoria em tudo que muda conteúdo (quem, quando, o que)
- Autenticação por **magic link via email** (sem senha, fácil para a equipe)
- Separação clara entre rotas **públicas** (visitante consome) e **admin** (direção edita)

---

## Modelo de Dados (entidades principais)

### Núcleo (conteúdo do site)

#### `users` (admin / direção / voluntários com acesso)
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| email | string | único |
| nome | string | |
| role | enum | `admin`, `editor`, `voluntario`, `viewer` |
| ativo | boolean | |
| ultimoLogin | timestamp | |
| createdAt / updatedAt | timestamp | |

Auth = magic link no email. Sem senha.

#### `site_config`
Configurações editáveis do site (cores primárias, fonte, textos do hero, links de redes).
Tipo "key-value" estruturada — permite mudar paleta de cor sem deploy.

#### `media`
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | |
| url | string | URL pública (R2/Cloudinary) |
| alt | string | acessibilidade |
| largura, altura | int | |
| formato | string | webp, png, jpg |
| tags | string[] | "hero", "parceiro", "evento", etc. |
| uploadedBy | UUID | FK users |
| createdAt | timestamp | |

#### `parceiros`
| Campo | Tipo |
|-------|------|
| id | UUID |
| nome | string |
| logoMediaId | UUID FK media |
| descricao | text |
| linkSite | string |
| tier | enum (`ouro`, `prata`, `bronze`, `apoiador`, `gratuito`) |
| pagante | boolean |
| valorMensal | decimal (nullable) |
| ativo | boolean |
| ordem | int |
| createdAt / updatedAt | timestamp |

#### `eventos`
| Campo | Tipo |
|-------|------|
| id | UUID |
| titulo | string |
| descricao | text |
| coverMediaId | UUID FK media |
| dataEvento | timestamp |
| local | string (nullable, eventos online) |
| linkInscricao | string |
| publicado | boolean |
| createdAt / updatedAt | timestamp |

#### `noticias` / `posts`
Mesma ideia de eventos, mas para a aba de notícias do site (item 8 do PDF de mudanças).
Campo `categoria` (Notícia / História de Impacto / Novidade do COMQ).

#### `historia_timeline`
Marcos da linha do tempo do site (Lançamento Ago/24, SENAC, Expofavela, etc.).
Editável pela direção; aparece automaticamente no front.

---

### Cadastros (formulários do site → ver `docs/perfis-clientes.md`)

#### `cadastro_jovem`
Espelha os 7 blocos de perguntas do perfil de Jovem. Campos opcionais quando indicado no `perfis-clientes.md`. Inclui:
- `id`, `createdAt`
- `nome`, `dataNasc`, `telefone`, `email`, `bairro`, `cep`, `cidade`
- `pessoasNaCasa`, `eProvedor`, `recebeBeneficio`, `rendaFaixa`
- `nivelEstudo`, `estaEstudando`, `instituicao`, `dificuldades[]`
- `jaTrabalhouRegistrado`, `buscaTipo`, `tempoBusca`, `areasInteresse[]`, `temCurriculo`
- `temSmartphone`, `temInternet`, `habilidadesDigitais[]`, `interesseTI`
- `aceitaContato`, `aceitaAnonimizacao`, `aceitouTermo`, `idTermoMenor` (FK opcional)
- `linkGrupoEnviado` (boolean) — controla se já recebeu o link do WhatsApp
- `status` (enum: `pendente_validacao`, `aprovado`, `recusado`)

#### `cadastro_empreendedora`
Espelha o perfil de empreendedora (mesmo padrão).

#### `cadastro_voluntario`
Espelha o perfil de voluntário, incluindo GT de interesse e disponibilidade.

#### `cadastro_parceiro_interesse`
Empresa interessada em virar parceiro pagante. Status: `interesse` → `proposta_enviada` → `negociando` → `convertido` → `recusado`.

---

### Newsletter (também ver `docs/newsletter/visao-geral.md`)

#### `newsletter_inscritos`
| Campo | Tipo |
|-------|------|
| id | UUID |
| email | string único |
| nome | string (opcional) |
| origem | string (qual seção do site capturou) |
| ativo | boolean |
| confirmadoEm | timestamp (double opt-in) |
| descadastradoEm | timestamp |
| createdAt | timestamp |

#### `newsletter_edicoes`
| Campo | Tipo |
|-------|------|
| id | UUID |
| titulo | string |
| corpoHtml | text |
| corpoTexto | text |
| autor | UUID FK users |
| status | enum (`rascunho`, `agendado`, `enviado`) |
| agendadoPara | timestamp |
| enviadoEm | timestamp |
| totalEnviados | int |
| createdAt / updatedAt | timestamp |

#### `newsletter_envios` (logs de entrega)
Por inscrito + edição: status (entregue, aberto, clicado, bounce).

---

### Auditoria e Logs (sua exigência)

#### `audit_logs`
Toda alteração em qualquer entidade gera entrada aqui.

| Campo | Tipo |
|-------|------|
| id | UUID |
| userId | UUID (quem fez) |
| acao | enum (`create`, `update`, `delete`, `publish`, `unpublish`, `login`, `send`) |
| entidade | string (`evento`, `parceiro`, `newsletter_edicao`, etc.) |
| entidadeId | UUID |
| diff | JSON (antes/depois) |
| ip | string |
| userAgent | string |
| createdAt | timestamp |

Implementação: interceptor global do NestJS + decorator `@Audited()` nas rotas que mudam dado.

#### `request_logs` (opcional, leve)
Apenas erros 4xx/5xx para investigar problemas. Logs de info vão para console/serviço externo (Logtail, Better Stack free).

---

## Endpoints (estrutura)

### Públicos (visitante)
```
GET  /v1/site-config                  → cores, fontes, textos editáveis
GET  /v1/parceiros                    → lista pública de parceiros
GET  /v1/eventos?publicados=true      → próximos eventos
GET  /v1/noticias?limit=6             → últimas notícias
GET  /v1/historia-timeline            → marcos
GET  /v1/forms/:perfil                → schema do formulário (jovem, empreendedora, voluntario, parceiro)
POST /v1/cadastros/:perfil            → submete formulário
POST /v1/newsletter/inscrever         → inscreve email (double opt-in)
GET  /v1/newsletter/confirmar?token=  → confirma email
GET  /v1/newsletter/descadastrar?t=   → opt-out
```

### Admin (direção / editores)
```
POST /v1/auth/magic-link              → envia magic link no email
GET  /v1/auth/callback?token=         → loga e cria sessão (cookie httpOnly)
POST /v1/auth/logout

# CRUD completo (todos com auditoria)
GET|POST|PATCH|DELETE /v1/admin/parceiros
GET|POST|PATCH|DELETE /v1/admin/eventos
GET|POST|PATCH|DELETE /v1/admin/noticias
GET|POST|PATCH|DELETE /v1/admin/historia-timeline
GET|POST|PATCH|DELETE /v1/admin/site-config
GET|POST|PATCH|DELETE /v1/admin/media         → upload de imagens
GET|POST|PATCH|DELETE /v1/admin/forms         → editar perguntas dos formulários
GET|PATCH             /v1/admin/cadastros/:perfil  → ver e validar cadastros
POST                  /v1/admin/cadastros/:perfil/:id/aprovar
POST                  /v1/admin/cadastros/:perfil/:id/recusar

# Newsletter admin
GET|POST|PATCH|DELETE /v1/admin/newsletter/edicoes
POST                  /v1/admin/newsletter/edicoes/:id/enviar
POST                  /v1/admin/newsletter/edicoes/:id/agendar
GET                   /v1/admin/newsletter/inscritos
GET                   /v1/admin/newsletter/inscritos/export.csv
GET                   /v1/admin/newsletter/edicoes/:id/metricas

# Auditoria
GET                   /v1/admin/audit-logs?entidade=...&user=...
GET                   /v1/admin/audit-logs/export.csv
```

---

## Autenticação por email (magic link)

Por que magic link e não senha:
- Equipe pequena, evita fluxo de "esqueci a senha"
- Mais seguro contra senhas fracas
- Direção logam pelo email (que já usam todo dia)

Fluxo:
1. `POST /auth/magic-link { email }` → API gera token único de 15 min, salva hash no banco, manda email com link `https://comq.site/admin/login?token=XYZ`
2. Usuário clica → front faz `GET /auth/callback?token=XYZ` → API valida, cria sessão (cookie httpOnly), redireciona pro painel
3. Sessão dura 7 dias (configurável). Logout invalida.

Suporta também 2FA por email para ações sensíveis (ex: deletar parceiro, enviar newsletter para todos).

---

## Performance

- **Cache HTTP** em rotas públicas (`Cache-Control: public, max-age=300, stale-while-revalidate=86400`)
- **ETag** em listas e itens individuais
- **Resposta JSON pequena** — filtrar campos opcionais
- **CDN para mídia** (Cloudflare R2 já é CDN nativo)
- **Imagens em .webp** servidas pelo R2/Cloudinary com URLs versionadas
- **Compressão gzip/brotli** habilitada no NestJS
- **Plano free** suporta tranquilamente até 10k req/dia neste padrão

---

## Decisões abertas (pra você validar)

1. **Banco**: Neon (PostgreSQL serverless, free) ou Supabase (free tier mais generoso, mas mais "lock-in")? Recomendo **Neon** pela neutralidade.
2. **Hospedagem da API**: Render (mais simples, free com cold start) ou Railway (sem cold start mas tem limite de horas/mês)?
3. **Email**: Resend (3k emails/mês free, ótima DX) ou Brevo SMTP (300/dia free)? Recomendo **Resend** se ficarmos abaixo de 3k/mês.
4. **Mídia**: Cloudflare R2 (10GB free, pay-as-you-go depois) ou Cloudinary (25 créditos free, mais funcionalidades de transformação)? Para começar simples, **R2**.
5. **Repositório da API**: novo repo `api_comq` (recomendado) ou monorepo com o `site_comq`? Recomendo **repo novo** — esse front é estático puro e a API é Node, ciclos de vida diferentes.

---

## Roadmap de implementação da API

### Sprint 1 (Maio/26) — Setup
- Repo `api_comq` criado
- Scaffold NestJS + TypeScript + TypeORM
- Conexão com Neon
- Módulo `users` + auth magic link
- Deploy inicial no Render
- CORS liberando `comq.site`

### Sprint 2 (Junho/26) — Conteúdo
- Módulos `parceiros`, `eventos`, `noticias`, `site_config`, `media`
- Endpoints públicos + admin
- Auditoria via interceptor

### Sprint 3 (Julho/26) — Cadastros
- Módulos `cadastro_jovem`, `empreendedora`, `voluntario`, `parceiro_interesse`
- Schemas dinâmicos (admin edita perguntas)
- Disparo de email/WhatsApp pós-aprovação (link do grupo)

### Sprint 4 (Agosto/26) — Newsletter
- Módulos `newsletter_inscritos`, `newsletter_edicoes`, `newsletter_envios`
- Integração Resend
- Painel admin de envio
- Decisão de repo separado vs ramificação (ver doc da newsletter)

### Sprint 5 (Setembro/26) — Front consumindo API
- Site começa a chamar a API em vez de hardcoded
- Migração de imagens para R2/Cloudinary

### Sprint 6 (Outubro/26) — Polimento
- Métricas detalhadas
- Exportações CSV
- Documentação OpenAPI/Swagger pública
