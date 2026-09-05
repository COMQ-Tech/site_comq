# Mudanças do Site — 2º Trimestre 2026

> Backlog estruturado a partir do PDF "Mudanças Site Segundo Trimestre" enviado pela direção do COMQ. Cada item tem prioridade, classificação por feature do roadmap e indicação de origem (front-puro vs front+API).

---

## Resumo

O documento da direção lista 11 ajustes para tornar o site mais profissional e atrativo para parceiros institucionais e patrocinadores, sem perder o foco na comunidade. A maioria dos itens é **front-puro** (executável já no Q2, antes da API). Alguns dependem de mídia nova (logos limpos, imagens hero) e da página de Transparência / Apoie.

| Prioridade | Itens |
|------------|-------|
| Alta (Q2 imediato) | 1, 2, 3, 5, 6, 7, 11 |
| Média (Q2/Q3) | 4, 9, 10 |
| Opcional (Q3+) | 8 |

---

## Backlog

### #1 — Botão "APOIE" no header
- **Prioridade**: Alta
- **Tipo**: Front-puro
- **Feature**: F3 (monetização) — porta de entrada para a página de Apoie
- **Detalhes**: botão laranja arredondado no canto superior direito do header. Linka para `/apoie.html`
- **Aceite**: visível no desktop e mobile (em mobile pode entrar dentro do menu hamburger se ficar apertado)

### #2 — Hero novo (visual mais social)
- **Prioridade**: Alta
- **Tipo**: Front-puro + mídia
- **Feature**: F2 (engajamento)
- **Detalhes**:
  - Trocar imagem de fundo pela versão sugerida (link no PDF)
  - **Remover o selo com coração escrito "Centro de Oportunidades do MQ"** — visual artificial
  - Manter título "Transformando vidas através de oportunidades"
- **Aceite**: hero sem selo; imagem nova carregada em `.webp`

### #3 — Logo horizontal + nome completo
- **Prioridade**: Alta
- **Tipo**: Front-puro + mídia
- **Detalhes**:
  - Trocar logo atual pela versão horizontal (lâmpada + título embaixo) — link no PDF
  - Nome exibido: "COMQ – Centro de Oportunidades do MQ"
- **Aceite**: novo logo no header, no footer e no favicon

### #4 — "Seja um Parceiro" reformulado
- **Prioridade**: Média
- **Tipo**: Front-puro
- **Feature**: F3
- **Detalhes**:
  - Layout de 2 colunas conforme imagem do PDF
  - Coluna direita: card escuro "Por que ser parceiro?" com bullets:
    - Impacto social direto na comunidade
    - Visibilidade da sua marca
    - Responsabilidade social empresarial
    - Conexão com talentos locais
    - Participação em eventos exclusivos
  - Botão "QUERO SER PARCEIRO" leva ao formulário de cadastro de parceiro (perfil 4 — `docs/perfis-clientes.md`)

### #5 — Parceiros (Quem caminha com o COMQ)
- **Prioridade**: Alta
- **Tipo**: Front-puro + mídia
- **Detalhes**:
  - Remover botão "ver mais" sobre cada logo (e o modal correspondente)
  - Exibir somente logos
  - Padronizar tamanho dos cards
  - Logos sem fundo branco/colorido (passar pelo Remove BG)
  - **Estado padrão: cinza/dessaturado**. Hover: cor original. Transição suave.
  - Botão "QUERO SER PARCEIRO" no final
- **Aceite**: 6 logos atuais limpas, em cinza, com hover colorido funcionando

### #6 — Card "Seja um Voluntário"
- **Prioridade**: Alta
- **Tipo**: Front-puro
- **Detalhes**:
  - Trocar layout para o sugerido no PDF (foto à esquerda, card escuro à direita com texto + CTA "QUERO SER VOLUNTÁRIO")
  - Substituir link atual pelo Forms novo: https://forms.gle/sgCAbVU9Biwkn1iL6
- **Nota**: depois que a API estiver pronta (Q3), substituir o Google Forms pelo formulário próprio do site → API

### #7 — "Entre na nossa comunidade" mais acolhedor
- **Prioridade**: Alta
- **Tipo**: Front-puro
- **Detalhes**:
  - Layout 2 cards (Jovens + Empreendedoras) conforme PDF
  - **Remover temporariamente a seção História** (questão de imagem, será reativada)
  - Card Jovens — botão "MATRÍCULA – GRUPO DE JOVENS" linka para https://forms.gle/UM5xxJsHh5L2gmez5
  - Card Empreendedoras — botão "MATRÍCULA – GRUPO DE EMPREENDEDORAS" linka para https://forms.gle/J87rSwAd1KMbTeuY7
  - Bloco inferior "Como funciona a matrícula?" em 3 passos (Clique → Preencha → Aguarde validação por email)
- **Nota**: mesmo destino futuro — formulário próprio via API libera o link do grupo após validação

### #8 — Aba de Notícias (opcional, mas estratégica)
- **Prioridade**: Opcional → vai virar Alta quando a API estiver pronta
- **Tipo**: Front + API
- **Feature**: F2
- **Detalhes**:
  - 3 cards de notícia com foto, data, título, snippet, "LER MAIS"
  - Conteúdo enviado pela direção a cada 3 meses (3 matérias por trimestre) por email para uma voluntária do GT Marketing/Tecnologia
  - **Solução manual no Q2**: voluntária edita HTML
  - **Solução automatizada no Q3+**: postagens vêm da API (`GET /v1/noticias?limit=3`); admin cadastra pelo painel da newsletter
  - Página `/novidades` lista todas as notícias

### #9 — Footer com link "Transparência"
- **Prioridade**: Média
- **Tipo**: Front-puro (página estática)
- **Detalhes**:
  - Link no footer
  - Página `/transparencia.html` com layout do PDF:
    - 3 cards: Estatuto Social, Relatório de Atividades 2026, Prestação de Contas — todos com selo "EM BREVE"
    - Bloco inferior: "Nosso compromisso com a comunidade" + lista "Princípios de Governança" (gestão participativa, prestação de contas periódica, relatórios públicos, canal aberto, ética)
- **Pendência**: aguardar arquivos PDF reais da direção (Estatuto, Ata de Fundação, Prestação 2026)

### #10 — Página /apoie em construção
- **Prioridade**: Média
- **Tipo**: Front-puro
- **Detalhes**:
  - Página simples com mensagem "Página ainda em construção"
  - Subtítulo: "Em breve disponibilizaremos os dados bancários para apoio direto. Por enquanto, conheça nossas oportunidades de parceria."
  - CTA secundário: "Quero ser parceiro" (linka pra seção de parceiros)
- **Pendência**: aguardar CNPJ formalizado e conta bancária do COMQ para preencher de verdade

### #11 — Footer com logo (substituir "COMQ" texto)
- **Prioridade**: Alta
- **Tipo**: Front-puro + mídia
- **Detalhes**: trocar o texto "COMQ" do canto do footer pela imagem horizontal do logo (mesma do item #3, em versão clara para combinar com fundo escuro do footer)

---

## Mapeamento por feature do roadmap

### F1 — SEO + Analytics + Performance
Embora as mudanças do PDF sejam principalmente visuais, são oportunidade ideal para:
- Aplicar `loading="lazy"` em todas as novas imagens
- Salvar todas as imagens novas em `.webp`
- Adicionar `alt` descritivo em cada uma (acessibilidade + SEO)
- Atualizar `sitemap.xml` com `/transparencia.html` e `/apoie.html`

### F2 — Engajamento
- Item #7 (matrícula com validação) → ponte natural para o cadastro próprio via API (Q3)
- Item #8 (notícias) → primeira seção que vai consumir API

### F3 — Monetização
- Item #1 (botão APOIE), Item #4 (Seja um Parceiro reformulado), Item #10 (página Apoie) sustentam a captação de recursos sem mexer com beneficiários

---

## Dependências externas (precisa pedir à direção)

- [ ] Logo horizontal em alta resolução (PNG transparente + SVG se possível)
- [ ] Imagem nova do hero
- [ ] Logos dos parceiros sem fundo (alternativamente, fazer Remove BG do que já temos)
- [ ] PDFs de Estatuto Social, Ata de Fundação, Prestação de Contas 2026 (quando disponíveis)
- [ ] CNPJ + dados bancários (quando formalizado, libera página /apoie de verdade)
- [ ] Confirmar se as 3 matérias do trimestre virão por email mesmo (item #8)

---

## Sugestão de cards no Trello "Site COMQ"

Cada item acima vira um card no padrão observado do board (User Story BDD). Exemplo do #1:

> **Título**: Adicionar: Botão "APOIE" no header
> **Descrição**:
> **Como visitante** do site COMQ,
> **quero** ver um botão "APOIE" em destaque no header,
> **para que** eu consiga rapidamente acessar a página de apoio à ONG.
>
> **Critérios de aceite**:
> - Botão laranja arredondado no canto superior direito (desktop)
> - Em mobile, dentro do menu hamburger
> - Linka para `/apoie.html`
>
> **Labels**: Front-end, Documento (referência ao PDF)
> **Lista**: Backlog (ou To do se priorizado pra sprint)

Posso gerar todos os 11 cards com esse padrão na hora que você liberar.
