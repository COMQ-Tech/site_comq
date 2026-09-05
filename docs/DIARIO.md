# Diário do Projeto — COMQ Digital

> Este arquivo é um log vivo. Toda decisão relevante, ideia nova, problema encontrado ou resultado obtido deve ser registrado aqui com data. É a memória do projeto.

---

## Como usar este diário

- Registre **toda entrada com a data** no formato `## YYYY-MM-DD`
- Seja direto: o que foi feito, o que funcionou, o que não funcionou
- Inclua links, números e evidências sempre que possível
- Qualquer pessoa da equipe pode (e deve) escrever aqui

---

## 2026-04-26 — Kickoff do planejamento anual

**O que aconteceu:**

- Análise completa do repositório `site_comq` realizada
- Identificados os 3 principais eixos de melhoria para 2026-2027
- Criada estrutura de documentação em `/docs`
- Definidas 3 features principais com prazo até Abril 2027
- Feature 1 (SEO + Analytics + Performance) com prazo crítico: **Janeiro 2027**

**Diagnóstico inicial do site:**

- Site estático puro (HTML/CSS/JS Vanilla) hospedado no GitHub Pages
- Domínio: comq.site (funcionando via CNAME)
- Sem nenhuma meta tag de SEO → invisível para o Google
- Sem analytics → zero dados sobre visitantes
- 33 imagens, algumas ainda em formato `.png` pesado
- Formulário de newsletter existe no HTML mas não funciona
- 6 parceiros listados, sem modelo de patrocínio estruturado

**Decisões tomadas:**

- Usar **Plausible Analytics** (sem cookies, LGPD-friendly, sem impacto na performance)
- Manter o site estático — não migrar para framework por ora
- Criar modelo de patrocínio em tiers para gerar retorno financeiro
- Documentar tudo para que o modelo seja replicável por outras ONGs

**Próximos passos imediatos:**

1. Implementar meta tags SEO no `index.html`
2. Criar `sitemap.xml` e `robots.txt`
3. Configurar Plausible ou Google Analytics 4
4. Auditar imagens e converter para `.webp`

---

## 2026-05-04 — Expansão do planejamento (3 projetos integrados, perfis e API)

**O que aconteceu:**

- Lidos os PDFs entregues pela direção: "Mudanças Site Segundo Trimestre" (11 ajustes visuais/funcionais) e "Guia do Voluntário COMQ" (Abril/2026)
- Identificado o padrão atual do Trello "Site COMQ": kanban completo (Backlog → To do → In Progress → Code Review/Testing → Feedback → Deploying → Ready for Release → Done), descrições de card no formato User Story BDD, labels "Front-end" e "Documento"
- Boards "Api COMQ" e "Newsletter COMQ" já existem mas estão zerados (kanban simples A fazer / Em andamento / Concluído, sem labels)
- **Stack da API confirmada**: NestJS + TypeScript + TypeORM (estava na descrição do board)
- Membros visíveis nos boards: Eduardo Faller, Larissa Oliveira, Lunna Alves, comq.projeto

**Decisões tomadas:**

1. **Premissa absoluta**: COMQ não cobra dos beneficiários. Reescrevi `F3-monetizacao-replicabilidade.md` e `ideias/retorno-financeiro.md` com essa diretriz; modelos antigos que sugeriam cursos pagos para empreendedoras foram removidos. Receita vem de empresas, patrocínios, editais e B2B.
2. **Front burro, API rica**: o site_comq passa a ser apenas estrutura visual; conteúdo dinâmico (textos, parceiros, eventos, notícias, mídia, configs de cor/fonte) vem da API. Modelado em `docs/api/visao-geral.md`.
3. **Newsletter em repositório separado**: recomendação documentada em `docs/newsletter/visao-geral.md` — `newsletter_comq` como painel admin React, dados via API. Subdomínio sugerido: `admin.comq.site` ou `newsletter.comq.site`.
4. **Autenticação**: magic link por email (sem senha) para a equipe, atendendo a sugestão de "deixar a API conectável via email".
5. **Logs de auditoria**: tabela `audit_logs` registra toda ação (create/update/delete/publish/login) em todas as entidades, com diff JSON, IP e userAgent.

**Documentos novos criados:**

- `docs/perfis-clientes.md` — bateria de perguntas para Jovens, Empreendedoras, Voluntários e Parceiros (vira esquema dos formulários da API, substituindo Google Forms quando o backend estiver no ar)
- `docs/api/visao-geral.md` — modelagem completa: entidades, endpoints públicos e admin, autenticação, performance, sprints
- `docs/newsletter/visao-geral.md` — visão visitante x admin, fluxos double opt-in e disparo, decisão de repositório separado
- `docs/voluntarios.md` — resumo do Guia do Voluntário e processo de incorporar novos voluntários ao Trello/repos
- `docs/mudancas-2026-Q2.md` — backlog estruturado dos 11 ajustes do PDF da direção, com prioridade e mapeamento por feature

**Documentos atualizados:**

- `docs/ROADMAP.md` — baseline real (50 jovens / 70 empreendedoras), fundador (Marco Antônio), GTs do COMQ, separação dos 3 projetos (site / api / newsletter), princípios revisados
- `docs/features/F3-monetizacao-replicabilidade.md` — premissa absoluta de não-monetização sobre beneficiários, modelos descartados explicitados
- `docs/ideias/retorno-financeiro.md` — todas as ideias passam pelo filtro "quem paga não é beneficiário"

**Pendências para a próxima sessão:**

1. Validar com Eduardo: stack escolhida (NestJS) + banco (Neon recomendado) + email (Resend recomendado) + mídia (R2 recomendado)
2. Confirmar nome do subdomínio do painel admin
3. Confirmar nome do repositório novo (`api_comq`, `newsletter_comq`)
4. Decidir framework do painel admin newsletter (React + Vite + TanStack Query é a recomendação)
5. **Só depois disso**: criar cards no Trello dos 3 boards alinhados aos sprints
6. Adicionar novo voluntário ao Trello quando Eduardo informar quem é

**Próximos passos imediatos:**

- Eduardo revisa a documentação nova
- Após aprovação, fazer commit/push (`git add docs/ && git commit -m "docs: expansão para 3 projetos (site/api/newsletter), perfis e mudanças Q2" && git push`)
- Iniciar criação dos cards no Trello

---

## 2026-05-09 — Reunião de Voluntários COMQ (apresentação do Sprint 0)

**O que aconteceu:**

- Eduardo apresentou o Sprint 0 dos 3 boards do Trello (Site, API, Newsletter) pra parte do time disponível
- Participaram (do que foi possível identificar): Eduardo, Karol, Lucas, mais alguns
- Marco Antônio (direção) não estava presente — validação dos perfis (`docs/perfis-clientes.md`) ainda pendente
- Discussão de fluxo de **verificação/aprovação manual** dos cadastros antes de liberar link do grupo de WhatsApp (importante: reforçar essa etapa no fluxo da API)
- Discussão sobre framework do painel admin e stack NestJS — em andamento, sem decisão final
- Mencionado subdomínio do painel admin — sem fechamento

**Status da pauta original do card de reunião:**

| Item | Status |
|------|--------|
| Apresentar Sprint 0 (Site / API / Newsletter) | Feito |
| Cada um pega cards conforme GT (definirão por tempo disponível) | Feito |
| Confirmar nome/username Trello/GT do novo voluntário | Confirmado (faltam dados pra adicionar via MCP) |
| Convidar voluntário para os boards apropriados | Pendente — Eduardo vai reforçar no WhatsApp |
| Definir cadência semanal das reuniões do GT Tecnologia | Não tratado |
| Decidir stack final (Neon/Render/Resend/R2) e framework do painel | Em andamento |

**Decisões tomadas:**

- Cards do Trello servirão como fonte única de tarefas — voluntários se atribuem conforme tempo
- Stack NestJS confirmada como base; ferramentas auxiliares (banco/host/email/mídia) ainda em discussão
- Reforço no grupo de WhatsApp pra voluntários entrarem nos boards Trello

**Problemas encontrados:**

- Marco Antônio não pôde participar — bloqueia o card "Validar perfis" (top da Newsletter)
- Decisões em grupo (stack, framework, subdomínio) ficaram para próxima reunião
- Transcrição automática (Otter.ai) com qualidade ruim — perdeu boa parte do conteúdo em português

**Próximos passos:**

1. Eduardo passa nome + email/username Trello + GT do novo voluntário (Karol? Lucas?) pra Cowork adicionar via `add_board_member`
2. Reuniao com Marco Antônio pra fechar perfis (15-30 min) — pode ser separada da reunião geral
3. Próxima reunião do GT Tecnologia: fechar stack + framework + subdomínio
4. Tasks que **não dependem de decisão do grupo** podem começar imediatamente: SEO meta tags, sitemap+robots, Plausible, lazy loading

---

<!--
MODELO DE ENTRADA:

## YYYY-MM-DD — Título da entrada

**O que aconteceu:**
-

**Resultados / Números:**
-

**Problemas encontrados:**
-

**Decisões tomadas:**
-

**Próximos passos:**
-
-->
