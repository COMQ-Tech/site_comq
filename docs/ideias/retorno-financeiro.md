# Brainstorm — Retorno Financeiro e Ideias Abertas

> Ideias que ainda não viraram feature. As melhores entram no ROADMAP.

---

## Premissa absoluta

**Beneficiário não paga.** Toda ideia abaixo precisa ter como pagador: empresa, patrocinador, edital, outra ONG ou produto B2B. Se a fonte de receita for o jovem ou a empreendedora atendida, a ideia é descartada.

---

## Ideias Ativas

**Patrocínio local de pequenas empresas do Mário Quintana**
Empresas do bairro anunciam para a própria comunidade. Venda com apresentação de 15 min ao dono do negócio. Foco: padarias, mercados, salões, oficinas, lojas de roupa, autoescolas, papelarias.

**Programa "COMQ Indica" (afiliados B2B)**
Links de afiliados para cursos pagos por empresas (não pelos jovens) — cursos corporativos, ferramentas SaaS para empreendedoras (Conta Azul, Bling), planos de saúde corporativos. O COMQ indica empresa para empresa → ganha comissão. Beneficiário continua sem pagar.

**Mural de Vagas pago (empresas pagam para divulgar)**
Empresas pagam R$ 50–150 para divulgar vaga por 30 dias na seção `#vagas` do site. Jovem candidata sem custo.

**Relatório de Impacto como serviço (para outras ONGs)**
Configurar Analytics + enviar relatório mensal para outras ONGs: R$ 200–500/mês por cliente.

**Vaquinha digital permanente**
Catarse ou Apoia.se com meta mensal exibida no site. R$ 10–30/mês por apoiador (pessoa física ou jurídica). Não é beneficiário.

**Parceria com Prefeitura / SMED / SMDS**
Dados de Analytics + relatórios estruturados = candidatura natural para programas municipais de inclusão digital, juventude e empreendedorismo. Receita por convênio público.

**Parceria com SENAC, SENAI, SEBRAE**
Repasses por matrículas geradas (modelo de contraprestação social). Eles ganham aluno, COMQ ganha repasse, jovem ganha curso gratuito.

**Selo "Apoiador COMQ" para empresas**
Selo digital + adesivo físico + menção em rede social mensalmente. Tier de entrada R$ 50/mês — fácil de vender para muitas empresas pequenas.

---

## Ideias Futuras

- App nativo (React Native) — só após F1+F2+F3
- Podcast de histórias de impacto (patrocinado por empresa local)
- Loja social com produtos das empreendedoras (COMQ não cobra delas, vendas vão para elas)
- Minicurso "Como criar um site de ONG" — vendido para outras ONGs
- Certificação COMQ para empresas apoiadoras

---

## Tecnologias

| Tecnologia | Propósito | Custo |
|------------|-----------|-------|
| Plausible Analytics | Analytics sem cookies | Grátis (self-host) / $9/mês |
| Brevo | Email marketing (alternativa) | Grátis até 300/dia |
| NestJS + TypeORM | Stack da API COMQ | Grátis |
| PostgreSQL (Neon/Supabase free) | Banco da API | Grátis até certo volume |
| Cloudinary / R2 | Hospedagem de imagens da API | Grátis até certo volume |
| Resend / Brevo SMTP | Envio de email da newsletter via API | Grátis até 100/dia |
| Google AdSense | Anúncios passivos (avaliar com cautela) | % por performance |
| Catarse / Apoia.se | Crowdfunding recorrente | 13% arrecadado |
| Netlify / Vercel / Render | Hospedagem do site e da API | Grátis |
| Leaflet.js | Mapa de impacto | Grátis |

---

## Perguntas em Aberto

- O COMQ tem CNPJ formalizado? Impacta no AdSense, recebimento de patrocínios formais e abertura de conta bancária da página "Apoie".
- Quem fica responsável por atualizar o site mensalmente (depois que o admin via API estiver pronto)?
- O Instagram tem conta profissional? Pode ser integrado ao site via API.
- Interesse em tornar o template open source oficial (organização GitHub COMQ-Tech)?
- Marco Antônio aprova o tier "Selo Apoiador" a R$ 50/mês como porta de entrada?
