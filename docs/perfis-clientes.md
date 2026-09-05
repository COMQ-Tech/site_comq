# Perfis de Cliente — COMQ

> Este documento define **quem o COMQ atende** e **quem paga pelo COMQ** (jamais a mesma pessoa).
> A bateria de perguntas vira a base do formulário de cadastro automatizado da API (estilo Google Forms, mas próprio).

---

## Os 4 perfis

| Perfil | Tipo | Paga? | Onde se cadastra |
|--------|------|-------|------------------|
| Jovem beneficiário | Beneficiário | **Não** | Formulário do site → API |
| Empreendedora beneficiária | Beneficiária | **Não** | Formulário do site → API |
| Voluntário | Apoiador (tempo) | Não (presta serviço gratuito) | Formulário do site → API |
| Parceiro pagante | Pagador (empresa) | **Sim** | Formulário do site → API + contato comercial |

---

## Perfil 1 — Jovem Beneficiário (1º emprego)

**Quem é**: Jovem do bairro Mário Quintana ou região, idade de referência 14–24 anos, buscando primeiro emprego, estágio, jovem aprendiz, ou capacitação para entrar no mercado.

**O que o COMQ entrega**: conexão com vagas, grupo de WhatsApp, capacitação SENAC, mentorias, divulgação de cursos gratuitos.

**O que o jovem paga**: nada.

### Dados a coletar (mapeamento de perfil)

Estes dados hoje **não existem coletados** — o jovem entra direto no WhatsApp pelo link. A meta é coletar via formulário antes de liberar o link do grupo.

#### Bloco 1 — Identificação
- Nome completo
- Data de nascimento
- Telefone (com DDD)
- E-mail (opcional, jovem nem sempre tem)
- Como prefere ser contatado (WhatsApp / E-mail / Ligação)

#### Bloco 2 — Localização
- Bairro de moradia (lista com Mário Quintana e bairros vizinhos + "outro")
- CEP (opcional, mas ajuda a mapear)
- Cidade
- Distância aproximada do centro de Porto Alegre (auto-calculável depois)

#### Bloco 3 — Composição familiar e contexto
- Quantas pessoas moram na sua casa?
- Você é a pessoa que sustenta a casa? (Sim / Não / Em parte)
- Recebe algum benefício social? (Bolsa Família / BPC / Auxílio Brasil / Nenhum / Prefere não responder)
- Renda familiar aproximada (faixas, opcional)

#### Bloco 4 — Escolaridade
- Nível de estudo atual (Fundamental incompleto / Fundamental completo / Médio incompleto / Médio completo / Técnico em andamento / Técnico completo / Superior em andamento / Superior completo)
- Está estudando agora? (Sim / Não)
- Se sim, em qual instituição?
- Tem alguma dificuldade de acesso (transporte, internet, equipamento)?

#### Bloco 5 — Experiência e busca
- Já trabalhou alguma vez registrado? (Sim / Não)
- Está buscando: 1º emprego / estágio / jovem aprendiz / curso técnico / freelance
- Há quanto tempo está procurando?
- Áreas de interesse (multi-seleção: administrativo, vendas, atendimento, TI, saúde, beleza, gastronomia, logística, outro)
- Tem currículo pronto? (Sim / Não / Quer ajuda para fazer)

#### Bloco 6 — Habilidades digitais
- Tem celular smartphone? (Sim / Sim mas com restrição / Não)
- Tem internet em casa? (Sim / Não / Só dados móveis)
- Sabe usar: Word/Google Docs, Excel/Planilhas, e-mail, redes sociais (multi-seleção)
- Tem interesse em curso de tecnologia? (Sim / Não)

#### Bloco 7 — LGPD
- Aceita receber comunicações do COMQ por WhatsApp e email
- Aceita ter seus dados anonimizados usados em relatórios de impacto
- Confirma que tem 18+ anos OU autorização do responsável (com upload do termo)

---

## Perfil 2 — Empreendedora Beneficiária

**Quem é**: Mulher empreendedora ou aspirante, mora ou trabalha no Mário Quintana ou região, geralmente já tem um pequeno negócio (formal ou informal) ou quer começar.

**O que o COMQ entrega**: encontros mensais, capacitação, mentorias, networking, divulgação no site e redes do COMQ.

**O que a empreendedora paga**: nada.

### Dados a coletar

#### Bloco 1 — Identificação
- Nome completo
- Data de nascimento
- Telefone / WhatsApp
- E-mail
- Instagram do negócio (opcional)

#### Bloco 2 — Localização
- Bairro de residência
- Bairro onde atua (pode ser diferente)
- CEP
- Atende qual região?

#### Bloco 3 — Negócio
- Já tem negócio? (Sim, formal CNPJ / Sim, informal / Ainda não, estou começando)
- Nome do negócio
- Tempo de atuação
- Tipo de negócio (multi-seleção: alimentação, beleza, moda/costura, artesanato, serviços de limpeza, educação, saúde, comércio, tecnologia, outro)
- Atende presencialmente, online, ou ambos?
- Tem CNPJ / MEI? (Sim / Em processo / Não)

#### Bloco 4 — Faturamento e estrutura (opcional, faixas)
- Faixa de faturamento mensal
- Trabalha sozinha ou tem ajuda?
- Quantas pessoas trabalham com você?
- Tem renda além do negócio?

#### Bloco 5 — Necessidades
- O que mais precisa de ajuda? (multi-seleção: divulgação, vendas, gestão financeira, formalização, redes sociais, fotos de produto, embalagem, precificação, atendimento ao cliente, outro)
- Já participou de capacitação anterior? (Sim / Não)
- Topa receber mentoria? (Sim / Não / Talvez)

#### Bloco 6 — Composição familiar
- Quantas pessoas dependem da sua renda?
- Você é a principal provedora da casa?

#### Bloco 7 — LGPD
- Mesmas autorizações do perfil de jovens

---

## Perfil 3 — Voluntário

**Quem é**: Pessoa que quer doar tempo e habilidade ao COMQ. Sem vínculo empregatício (Lei 9.608/1998).

### Dados a coletar (alinhado ao Guia do Voluntário)

#### Bloco 1 — Identificação
- Nome completo
- Idade (se menor de 18, exigir termo do responsável)
- E-mail
- WhatsApp
- Cidade / bairro

#### Bloco 2 — Disponibilidade
- Quantas horas semanais pode dedicar?
- Em quais dias/horários?
- Aceita reuniões quinzenais por GT?
- Aceita reunião geral todo primeiro sábado do mês?

#### Bloco 3 — Habilidades e interesse
- Em qual GT tem interesse? (Tecnologia & Desenvolvimento / Marketing & Design / Eventos & Ações / Sem preferência)
- Habilidades técnicas (multi-seleção: programação, design, social media, escrita, fotografia, video, evento, mentoria, ensino, captação, jurídico, contábil, outro)
- Tem alguma experiência prévia em voluntariado?

#### Bloco 4 — Motivação
- Por que quer ser voluntário no COMQ?
- O que espera ganhar com a experiência?

#### Bloco 5 — Termo
- Aceito as Regras de Conduta (link para o Guia)
- Aceito o Termo de Adesão de Voluntariado
- (Se menor) Upload do termo assinado pelo responsável

---

## Perfil 4 — Parceiro Pagante (empresa)

**Quem é**: Pequena ou média empresa do Mário Quintana ou região que quer apoiar financeiramente o COMQ em troca de visibilidade.

**O que o COMQ entrega**: logo no site, menção em newsletter, certificado digital "Apoiador COMQ", relatório trimestral de impacto.

**O que a empresa paga**: R$ 100 a R$ 500/mês conforme tier (Bronze / Prata / Ouro).

### Dados a coletar

#### Bloco 1 — Empresa
- Razão social / Nome fantasia
- CNPJ (opcional na primeira interação, exigido para emitir nota)
- Setor / segmento
- Endereço (rua, bairro, cidade)
- Site, Instagram, telefone comercial

#### Bloco 2 — Responsável
- Nome do responsável pela decisão
- Cargo
- E-mail e WhatsApp do responsável

#### Bloco 3 — Interesse
- Tier de interesse (Bronze / Prata / Ouro / Outro / Quero conversar)
- Por que quer apoiar o COMQ?
- Aceita receber proposta comercial em PDF?

#### Bloco 4 — Visibilidade
- Pode enviar logo em PNG/SVG (upload)
- Aprova divulgação do nome da empresa na lista pública de parceiros?

#### Bloco 5 — LGPD
- Aceita receber comunicações comerciais e relatórios trimestrais

---

## Bateria de perguntas — formato técnico para a API

Cada bloco vira um **schema** no banco. O formulário do site é uma SPA leve que consome `GET /forms/:perfil` (retorna o esquema JSON dos campos) e envia `POST /cadastros/:perfil` (envia respostas).

Vantagens:
- Direção do COMQ pode editar perguntas sem mexer no código (admin)
- Logs de cada cadastro com timestamp e IP
- Exportação CSV para análise (substitui Google Forms)
- Após cadastro válido, a API dispara o link do grupo de WhatsApp por email/WhatsApp

Detalhes de modelagem em `docs/api/visao-geral.md`.

---

## Indicadores derivados deste cadastro

Quando o cadastro for via API (não mais Google Forms), o COMQ vai conseguir responder perguntas que **hoje não consegue**:

- Quantos jovens estão buscando emprego, por bairro?
- Qual a idade média de quem entra no grupo?
- Quantas empreendedoras já são MEI vs informais?
- Qual setor concentra mais empreendedoras?
- Quantos voluntários estão alocados em cada GT?
- Quanto de receita potencial está em pipeline (parceiros em interesse)?

Esses indicadores entram no relatório trimestral de impacto, que vira material para editais.
