# ROADMAP COMQ — Abril 2026 → Abril 2027

> Documento mestre de planejamento. Atualize sempre que uma decisão for tomada ou um marco for atingido.

---

## Visão Geral

**Sobre o COMQ**: Centro de Oportunidades do MQ — ONG fundada em **agosto/2024** por **Marco Antônio**, junto a um grupo de voluntários. Atua no bairro Mário Quintana (Porto Alegre/RS) conectando jovens à empregabilidade e empreendedoras à capacitação.

**Impacto até agora (baseline Abr/2026)**: ~50 jovens empregados, 70 empreendedoras ativas, parcerias com SENAC, Despertar, Mulheres Convergência, Sabão Tinguá, Solo, Projeto Social.

**Missão do projeto digital**: Transformar o site do COMQ em uma plataforma que gere visibilidade real, atraia parceiros e financiadores, e sirva como modelo replicável para outras ONGs da periferia.

**Horizonte**: 12 meses (Abril 2026 → Abril 2027)
**Prazo crítico**: Feature 1 operacional até **Janeiro 2027**

---

## Premissa fundamental

> **O COMQ não cobra nada dos beneficiários (jovens e empreendedoras).** Eles nunca pagarão. Toda a sustentabilidade financeira vem de **parceiros pagantes** (pequenas empresas do bairro Mário Quintana e região), **patrocínios institucionais**, **editais públicos** e **serviços para outras ONGs** (template, consultoria de impacto).

---

## Arquitetura de produtos (3 projetos integrados)

| Projeto | Repositório | Trello | Função |
|---------|-------------|--------|--------|
| **site_comq** | `site_comq` (atual) | [Site COMQ](https://trello.com/b/Rgxqs7si/site-comq) | Front estático que consome a API. Apenas estrutura/layout — conteúdo vem da API. |
| **api_comq** | A criar | [Api COMQ](https://trello.com/b/ai9GIaBj/api-comq) | Backend NestJS + TypeScript + TypeORM. Fonte única de conteúdo (eventos, notícias, parceiros, cadastros, mídia, configs). |
| **newsletter_comq** | Decisão pendente (ver `docs/newsletter/visao-geral.md`) | [Newsletter COMQ](https://trello.com/b/RYMp9B8g/newsletter-comq) | Captura de inscritos, painel admin, disparo de email. |

---

## As 3 Features

| # | Feature | Meta | Prazo |
|---|---------|------|-------|
| F1 | SEO + Analytics + Performance | Site indexado, dados de impacto, carregamento rápido | Jan/2027 |
| F2 | Engajamento e Comunidade (front consumindo API + newsletter funcional) | Newsletter funcional, mais histórias, projetos visíveis, conteúdo dinâmico via API | Mar/2027 |
| F3 | Monetização (parceiros) e Replicabilidade | Patrocínios pagos por empresas, template para ONGs, prova de impacto | Abr/2027 |

---

## Timeline Mensal

### Q2 2026 (Maio — Julho)

- [ ] Implementar todas as meta tags SEO no `index.html`
- [ ] Configurar Google Search Console
- [ ] Instalar Plausible Analytics (sem cookies, LGPD-friendly)
- [ ] Auditar e converter imagens restantes para `.webp`
- [ ] Adicionar `loading="lazy"` em todas as imagens abaixo do fold
- [ ] Criar `sitemap.xml` e `robots.txt`
- [ ] Criar `manifest.json` (PWA básico)
- [ ] **Aplicar mudanças do PDF Q2** (ver `docs/mudancas-2026-Q2.md`): botão APOIE, novo logo horizontal, hero ajustado, parceiros em cinza com hover, links Forms de matrícula, transparência, página apoie
- [ ] **Iniciar API**: scaffold NestJS + TypeScript + TypeORM, primeiros endpoints (`/eventos`, `/parceiros`)
- [ ] Primeira entrada no `DIARIO.md` após cada entrega

### Q3 2026 (Agosto — Outubro)

- [ ] Revisar resultados do Search Console (primeiras indexações)
- [ ] Criar página/seção de Projetos em Andamento
- [ ] **Newsletter**: integração com captura de email (via API ou Brevo, decidir em `docs/newsletter/visao-geral.md`)
- [ ] **API**: módulos de auth (magic link por email), uploads de mídia, logs de auditoria
- [ ] **Front consome API**: hero, parceiros, notícias e eventos passam a vir da API
- [ ] Adicionar Open Graph e cards para WhatsApp/Instagram
- [ ] Começar documentação do template replicável

### Q4 2026 (Novembro — Janeiro 2027)

- [ ] **MARCO F1**: SEO + Analytics + Performance 100% operacional
- [ ] Gerar primeiro relatório de impacto com dados reais (Analytics)
- [ ] Apresentar relatório para captação de patrocinadores e editais
- [ ] Lançar modelo de patrocínio no site (tiers de visibilidade) — voltado a empresas, nunca a beneficiários
- [ ] Testar template em outra ONG parceira

### Q1 2027 (Fevereiro — Abril)

- [ ] **MARCO F2**: Engajamento operacional (newsletter + projetos + histórias via API)
- [ ] **MARCO F3**: Primeiro retorno financeiro documentado (parceiros pagantes)
- [ ] Retrospectiva anual completa no `DIARIO.md`
- [ ] Planejar próximo ciclo (Roadmap 2027-2028)

---

## Indicadores de Sucesso (KPIs)

| KPI | Baseline (Abr/2026) | Meta (Jan/2027) | Meta (Abr/2027) |
|-----|---------------------|-----------------|-----------------|
| Posição no Google para "COMQ Porto Alegre" | Não indexado | Top 5 | Top 3 |
| Visitas mensais ao site | Desconhecido | 500/mês | 1.000/mês |
| Tempo de carregamento (mobile) | ~4s estimado | < 2s | < 1.5s |
| Parceiros ativos exibidos | 6 | 10 | 15 |
| Emails na lista (newsletter) | 0 | 200 | 500 |
| Jovens cadastrados via formulário online | 0 (só via WhatsApp/Forms hoje) | 100 | 250 |
| Empreendedoras cadastradas via formulário online | 0 | 50 | 150 |
| Receita mensal (parceiros pagantes) | R$ 0 | R$ 500 | R$ 1.500 |

---

## Equipe

| Papel | Responsável | Contato |
|-------|-------------|---------|
| Direção do COMQ | Marco Antônio | (51) 98438-6201 |
| Dev Backend (API) | A definir | — |
| Dev Frontend (site) | A definir | — |
| Conteúdo / Textos | A definir | — |
| Design | A definir | — |
| Gestão do Roadmap | A definir | — |

GTs ativos do COMQ (do Guia do Voluntário): Tecnologia & Desenvolvimento, Marketing & Design, Eventos & Ações. Reuniões quinzenais por GT + reunião geral todo primeiro sábado do mês.

---

## Princípios de Desenvolvimento

1. **Beneficiário não paga, nunca** — receita vem de parceiros, patrocínios e editais
2. **Front burro, API rica** — todo conteúdo dinâmico (textos, imagens, parceiros, eventos, cores) vem da API; o front é só o "envelope" externo
3. **Zero dependências pesadas no front** — manter o site rápido
4. **Sem cookies invasivos** — usar analytics sem cookies (Plausible)
5. **Replicável** — cada decisão deve poder ser copiada por outra ONG
6. **Documentar tudo** — toda decisão vai para o `DIARIO.md`
7. **Tudo logado** — toda mudança em conteúdo gera log de auditoria na API
8. **Impacto mensurável** — se não dá pra medir, não é prioridade

---

## Links Úteis

- Site: https://comq.site
- Repositório site: https://github.com/COMQ-Tech/site_comq
- Trello site-comq: https://trello.com/b/Rgxqs7si/site-comq
- Trello api-comq: https://trello.com/b/ai9GIaBj/api-comq
- Trello newsletter-comq: https://trello.com/b/RYMp9B8g/newsletter-comq
- Instagram: https://www.instagram.com/comq.projeto/
- LinkedIn: https://www.linkedin.com/company/comq-projeto/
- Email: comq.projeto@gmail.com
- WhatsApp: (51) 98438-6201
