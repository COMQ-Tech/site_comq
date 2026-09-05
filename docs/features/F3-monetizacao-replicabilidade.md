# Feature 3 — Monetização (parceiros) e Replicabilidade

**Prazo**: Abril 2027
**Status**: Planejamento
**Dependência**: F1 concluída, F2 parcialmente concluída

---

## Premissa fundamental

> **O COMQ não cobra nada dos beneficiários (jovens e empreendedoras).** Toda a receita aqui descrita vem de **terceiros** — empresas, patrocinadores, editais e outras ONGs. Nenhum modelo nesta feature pode, em nenhuma hipótese, transferir custo para os jovens ou empreendedoras atendidos.

---

## Objetivo

Gerar retorno financeiro real **a partir de parceiros pagantes e iniciativas externas**, e transformar o que foi construído em modelo replicável para outras ONGs.

---

## Modelos de Receita

### Modelo 1 — Patrocínio em Tiers (foco em pequenas empresas do Mário Quintana)

Público-alvo: pequenas e médias empresas do bairro Mário Quintana e região (Porto Alegre/RS) que se beneficiam de ter visibilidade junto à comunidade.

| Tier | Visibilidade | Preço/mês |
|------|--------------|-----------|
| Ouro | Logo no hero + parceiros + newsletter + post mensal | R$ 500 |
| Prata | Logo parceiros + menção em newsletter | R$ 250 |
| Bronze | Logo pequeno na seção de parceiros | R$ 100 |

Entregável: logo no site (gerenciada pela API) + link + menção no relatório trimestral + certificado digital "Apoiador COMQ".

### Modelo 2 — Editais e Fundos Sociais

- Exportar dados do Plausible mensalmente
- Montar PDF no Canva com visitantes, cliques, crescimento, jovens empregados, empreendedoras ativas
- Usar em: Fundo Social RS, BNDES Fundo Social, Fundação Itaú Social, Edital LIBRA, editais municipais (SMED/Prefeitura POA)

### Modelo 3 — Template para outras ONGs

- Repositório open source (MIT) com o site como base
- Serviço de implementação personalizada: R$ 500–1.500 por ONG
- Distribuir em grupos de ONGs no WhatsApp e LinkedIn

### Modelo 4 — Relatório de Impacto como serviço (B2B)

- Configurar Analytics + montar dashboard + enviar relatório mensal para outras ONGs: R$ 200–500/mês por cliente
- Quem paga: outras ONGs, não o COMQ nem seus beneficiários

### Modelo 5 — Workshops para empresas parceiras (não para beneficiários)

- Palestra sobre "como sua empresa pode apoiar uma ONG local" para grupos de empresários
- Cobrança por evento corporativo: R$ 500–1.500
- Beneficiários **não pagam** — eles podem assistir gratuitamente, é a empresa que contrata

### Modelo 6 — Google AdSense (opcional, com cuidado)

- Requer ~300 visitas/mês e aprovação do Google
- Estimativa: R$ 50–200/mês inicialmente
- Avaliar antes: pode comprometer a percepção de seriedade da ONG. Decisão a ser tomada com a direção (Marco Antônio).

---

## Modelos descartados (e por quê)

- **Cobrar de empreendedoras por cursos/mentorias**: viola a premissa fundamental. Empreendedora atendida pelo COMQ não paga.
- **Cobrar de jovens por inscrição em vagas/eventos**: idem.
- **Vender lista de inscritos da newsletter**: viola LGPD e a relação de confiança com a comunidade.
- **Pop-ups invasivos / paywalls**: descaracteriza a missão social.

---

## Projeção de Retorno

| Fonte | Mai-Jul/26 | Ago-Out/26 | Nov/26-Jan/27 | Fev-Abr/27 |
|-------|-----------|-----------|---------------|-----------|
| Patrocínios (empresas MQ) | R$ 0 | R$ 300 | R$ 600 | R$ 1.000 |
| Editais (eventual) | R$ 0 | R$ 0 | R$ 0 | a definir |
| Templates | R$ 0 | R$ 0 | R$ 500 | R$ 1.000 |
| Workshops corporativos | R$ 0 | R$ 0 | R$ 0 | R$ 500 |
| **Total/mês (recorrente)** | **R$ 0** | **R$ 300** | **R$ 1.100** | **R$ 2.500** |

---

## Checklist

- [ ] Seção "Seja Patrocinador" criada no site (gerenciada pela API)
- [ ] Proposta comercial em PDF para parceiros
- [ ] 1 patrocinador Ouro ou 3 Bronze ativos
- [ ] Página de Apoie funcional (com dados bancários do COMQ — depende do CNPJ)
- [ ] Template em repositório próprio no GitHub
- [ ] `privacidade.html` criada e linkada no footer
- [ ] Primeiro relatório de impacto gerado e usado em 1 edital

---

## Métricas de Sucesso

| Métrica | Hoje | Meta Abr/2027 |
|---------|------|---------------|
| Patrocinadores pagantes | 0 | 5+ |
| Receita mensal | R$ 0 | R$ 1.500+ |
| ONGs usando o template | 0 | 3+ |
| Editais inscritos | 0 | 3+ |
| Beneficiários cobrados por algo | 0 | **0** (premissa absoluta) |
