# Newsletter COMQ — Visão Geral

> Captura de inscritos, painel admin para criar/editar/deletar postagens, disparo de email para a lista. Integrada à API COMQ.

---

## Objetivo

Permitir que a direção do COMQ:
- Publique novidades (eventos, marcos, histórias) sem precisar de dev
- Capture emails de interessados
- Dispare comunicações periódicas para a base
- Acompanhe métricas básicas (entregue, aberto, clicado)

E que o visitante:
- Veja as últimas novidades em uma seção pública do site (feed leve)
- Se inscreva pra receber por email

---

## Decisão de repositório — recomendação

**Recomendo: repositório separado `newsletter_comq` para o painel admin web** + módulo dentro da `api_comq` para os dados.

### Por quê

| Critério | Repo separado (recomendado) | Ramificação no site_comq |
|----------|----------------------------|--------------------------|
| Site público continua estático e rápido | Sim | Não, vira parcialmente dinâmico |
| Painel admin pode usar framework (React/Vue) sem afetar o site | Sim | Não, força framework no site |
| Permissões / login do admin separadas do site público | Sim | Tem que misturar |
| Trello dedicado já existe | Sim, faz sentido | Trello só pra ramificação fica estranho |
| Deploy independente | Sim | Acoplado |
| Custo de manutenção | Médio (1 repo a mais) | Médio (mas mistura contextos) |

**Estrutura proposta**:
- `api_comq` — backend (todos os dados da newsletter ficam aqui, nas tabelas `newsletter_*` já modeladas em `docs/api/visao-geral.md`)
- `newsletter_comq` — front admin web em React/Vue, deployado em subdomínio `admin.comq.site` ou `newsletter.comq.site`. Login por magic link na API.
- `site_comq` — apenas consome `GET /v1/noticias` da API para mostrar o feed público das últimas postagens

### Alternativa "lite" (se quiser começar simples)

Subir um painel **Strapi** ou **Directus** apontando para o mesmo banco da API. Vantagem: zero código de admin. Desvantagem: menos controle visual e fica mais "padrão" (não COMQ-style). Só recomendo se a equipe não tiver dev frontend disponível.

---

## Visões (UX)

### Visão "Visitante" (no site público, em `comq.site`)

Seção `#novidades` no site:
- Lista das últimas 6 postagens (do endpoint `GET /v1/noticias?limit=6`)
- Cards com imagem, título, data, snippet
- Card "Veja todas" linka para `/novidades`
- Página `/novidades` com listagem completa paginada
- Página `/novidades/:slug` com a postagem aberta
- Bloco de inscrição na newsletter no final da página (`POST /v1/newsletter/inscrever`)
- Acessível, sem JS pesado

### Visão "Admin" (em `admin.comq.site` ou `newsletter.comq.site`)

Painel logado por magic link:

**Tela 1 — Dashboard**
- Quantos inscritos ativos
- Última edição enviada (data, taxa de abertura)
- Próxima edição agendada
- Últimas 5 ações (audit log)

**Tela 2 — Postagens (CRUD)**
- Lista paginada com filtros (categoria, status, autor)
- Botão "Nova postagem"
- Editor com título, slug (auto), imagem de capa (upload), corpo (markdown ou WYSIWYG simples), categoria, status (rascunho / publicado), data de publicação
- Toda alteração logada (quem, quando, diff)

**Tela 3 — Newsletter (edições)**
- Lista das edições (rascunho / agendada / enviada)
- "Nova edição" — editor com título, corpo HTML (com template padrão COMQ), preview, segmento (todos / só jovens / só empreendedoras / só parceiros — quando tivermos tags)
- Botões "Salvar rascunho", "Enviar teste pra mim", "Agendar", "Enviar agora"
- Confirmação de duplo clique pra envios massivos

**Tela 4 — Inscritos**
- Lista paginada de emails
- Filtros (ativo / descadastrado, data de inscrição, origem)
- Exportar CSV
- Importar CSV (com double opt-in: importação só vira "ativo" depois que o inscrito confirma)

**Tela 5 — Métricas**
- Por edição: enviados, entregues, abertos, cliques, descadastros
- Gráfico de crescimento da lista

**Tela 6 — Logs de auditoria**
- Tudo que mudou: quem, quando, o quê, IP

---

## Fluxo de inscrição (double opt-in)

1. Visitante preenche email no site → `POST /v1/newsletter/inscrever`
2. API cria registro com `confirmadoEm: null`, `ativo: false`
3. API envia email "Confirme sua inscrição" com link `/v1/newsletter/confirmar?token=XYZ`
4. Visitante clica → API marca `confirmadoEm` e `ativo: true`
5. API envia email de boas-vindas (template padrão COMQ)

Por que double opt-in: LGPD, evita spam, mantém lista limpa.

---

## Fluxo de envio de edição

1. Admin cria edição em rascunho
2. Admin clica "Enviar teste pra mim" → email vai só pro próprio admin pra revisar
3. Admin clica "Agendar pra X data" ou "Enviar agora"
4. Backend agenda job (cron interno do NestJS — `@Cron`)
5. No horário, API busca todos os inscritos ativos e dispara em lote (Resend bulk ou loop com rate limiting)
6. Cada envio gera registro em `newsletter_envios`
7. Webhooks do provedor de email (Resend) atualizam status (entregue/aberto/clicado/bounce)
8. Bounces consecutivos marcam o inscrito como inativo automaticamente

---

## Conexão por email para a equipe (sua sugestão)

Você mencionou "se possível deixar [a API] ser conectável via email". Duas leituras possíveis:

### Leitura A — login por email (já contemplado)
A autenticação por **magic link no email** já resolve isso: a equipe não precisa lembrar senha, só clica no link recebido.

### Leitura B — publicar postagem por email
Idéia: a direção manda um email para `postar@comq.site` com título + corpo + foto anexa, e a API cria automaticamente um rascunho de postagem.

Implementação possível com **Resend Inbound** ou serviço similar (Cloudflare Email Workers). Fluxo:
1. Email chega no endereço dedicado
2. Worker valida remetente (deve ser um email autorizado da equipe)
3. Worker envia payload pra `POST /v1/admin/postagens-via-email`
4. API cria postagem em rascunho com tudo já preenchido
5. Admin abre o painel e só clica "Publicar" depois de revisar

**Recomendação**: implementar como evolução, depois que o painel admin estiver no ar e validado. Adiciona valor mas tem complexidade extra (verificação de remetente, processamento de anexos).

### Leitura C — recebimento de "Notícias por trimestre" (item 8 do PDF de mudanças)
A pessoa do COMQ que cuida de comunicação envia 3 matérias por trimestre via email para uma voluntária, que cadastra no painel.

Esse fluxo **não precisa de email automatizado**: é manual. O painel admin já cobre isso. A pessoa só copia/cola.

---

## Cron jobs e automações

- **Diário, 9h**: relatório por email para a direção (1 inscrito novo? quantos? alguém respondeu o formulário?)
- **Semanal, segunda 8h**: resumo da semana
- **Disparo agendado**: cron a cada 5 min checa se tem edição agendada pra rodar
- **Limpeza**: bounces / inativos por 12 meses → marca como `arquivado`

---

## Métricas a acompanhar

| Métrica | Como medir | Meta Mar/27 |
|---------|------------|-------------|
| Inscritos ativos | count `ativo=true` | 300+ |
| Crescimento mensal | diff últimos 30 dias | +30/mês |
| Taxa de abertura | abertos/enviados por edição | > 35% |
| Taxa de clique | clicados/enviados | > 8% |
| Taxa de descadastro | descadastros/enviados | < 1% |
| Tempo entre criar e enviar | média | < 7 dias |

---

## Próximos passos para a Newsletter

1. Validar a recomendação de **repo separado** com você
2. Decidir framework do painel: React (mais devs disponíveis), Vue (mais leve) ou Svelte (mais moderno)? Sugestão: **React + Vite + TanStack Query** — barato e familiar
3. Definir nome do subdomínio: `admin.comq.site` ou `newsletter.comq.site`?
4. Criar repositório `newsletter_comq`
5. Criar cards no Trello da Newsletter alinhados aos sprints da API (4 e 5)
