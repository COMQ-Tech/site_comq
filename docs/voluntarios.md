# Voluntários COMQ — Resumo Operacional

> Resumo do **Guia do Voluntário COMQ** (atualização Abril/2026) e processo de incorporação ao Trello e aos repositórios.

---

## Quem é o COMQ (do guia)

- **Fundação**: Agosto/2024
- **Fundador**: Marco Antônio (com grupo de voluntários)
- **Bairro de atuação**: Mário Quintana (Porto Alegre/RS) e região
- **Impacto até Abr/2026**: ~50 jovens empregados, 70 empreendedoras ativas, parcerias institucionais (SENAC, etc.)

---

## Missão / Visão / Valores (oficiais)

**Missão**: Criar e divulgar oportunidades de capacitação profissional, empregabilidade e empreendedorismo para os moradores do Mário Quintana, promovendo o desenvolvimento da comunidade.

**Visão**: Ser referência em impacto social, ajudando cada vez mais jovens e empreendedores da periferia a crescerem profissionalmente.

**Valores**: Inclusão, Compromisso, Colaboração, Inovação, Transparência.

---

## Voluntariado Legal

- Atividade não remunerada (Lei 9.608/1998)
- Não gera vínculo empregatício
- Menores de 18 precisam de Termo de Adesão e Plano de Trabalho assinado pelos pais/responsáveis

---

## Grupos de Trabalho (GTs)

Cada GT tem um **Líder** e um **Vice-líder**.

| GT | Foco |
|----|------|
| Tecnologia & Desenvolvimento | Site, API, ferramentas digitais |
| Marketing & Design | Identidade visual, redes sociais, artes, comunicação |
| Eventos & Ações | Encontros mensais, capacitações, feiras |

**Reuniões**:
- Quinzenais por GT
- Geral todo primeiro sábado do mês

**Cadência operacional do GT Tecnologia (definida em 2026-05-09)**:
- **Sábados às 15h** — slot fixo padrão da semana
- **Terça ou quinta da semana** — slots alternativos quando o sábado não for possível
- Pauta da reunião: revisar cards do Trello, decisões em grupo (stack/framework/etc.), divisão de tarefas, alinhamento com a direção

---

## Regras de Conduta (resumo)

- Compromisso e pontualidade
- Respeito e empatia
- Uso responsável da marca COMQ
- Comunicação clara
- Proatividade
- **Proibido**: discriminação, desrespeito, falta de comprometimento

---

## Benefícios

- Desenvolvimento pessoal e profissional
- Networking
- Impacto social
- Certificado de voluntariado (após validação da direção)

---

## Processo — Entrada

1. **Inscrição**: formulário com dados e disponibilidade
2. **Onboarding**: conversa com a equipe sobre motivações
3. **Alocação no GT**: conforme habilidades e interesses

## Processo — Saída

1. **Aviso**: comunicar a equipe
2. **Feedback**: compartilhar experiência
3. **Transição**: repassar tarefas fixas a substituto

---

## Contatos

| Canal | Endereço |
|-------|----------|
| E-mail | comq.projeto@gmail.com |
| Instagram | @comq.projeto |
| WhatsApp | (51) 98438-6201 (Marco Antônio) |

---

## Incorporação de novo voluntário ao projeto digital

Quando você (Eduardo) mencionar "estamos colocando outro voluntário", o processo é:

### 1. Adicionar no Trello
Adicionar o voluntário como membro nos boards relevantes:
- **Site COMQ** se for atuar no front
- **Api COMQ** se for atuar no backend
- **Newsletter COMQ** se for atuar no painel admin

(O Cowork tem permissão para adicionar membros via `add_board_member` da MCP do Trello.)

### 2. Criar conta de admin (quando aplicável)
Se o voluntário precisar de acesso ao painel da newsletter / dashboard da API, criar registro em `users` com role apropriado (`editor` para quem só publica postagem, `admin` só para direção).

### 3. Acesso ao GitHub
Convidar para a organização `COMQ-Tech` (ou repositório individual) com permissão alinhada ao GT (ex: GT Tecnologia → write em `site_comq` e `api_comq`).

### 4. Onboarding técnico (1ª semana)
- Ler este `docs/voluntarios.md`
- Ler `docs/ROADMAP.md` e a feature ativa do momento
- Acompanhar próxima reunião do GT (quinzenal)

### 5. Termo de voluntariado
Assinar Termo de Adesão (formal, do COMQ — não confundir com cadastro técnico).

---

## Necessidade futura

- Documentar **quem** ocupa Líder/Vice-líder de cada GT (atualmente não consta)
- Centralizar lista de voluntários ativos no painel admin (perfil `voluntario` no banco — ver `docs/perfis-clientes.md`)
- Emitir certificado digital automaticamente pelo painel (futuro)
