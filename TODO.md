# TODO - COMQ Site

## 📋 Índice
- [Prioridade Alta (Crítica)](#-prioridade-alta-crítica)
- [Prioridade Média](#-prioridade-média)
- [Prioridade Baixa](#-prioridade-baixa)
- [Débitos Técnicos](#-débitos-técnicos)
- [Melhorias Futuras](#-melhorias-futuras)
- [Backlog de Funcionalidades](#-backlog-de-funcionalidades)

---

## 🔴 Prioridade ALTA (Crítica)

### 1. SEO - Meta Tags e Otimização para Buscadores
**Status**: Pendente
**Urgência**: CRÍTICA
**Impacto**: Sem isso, o site não será indexado adequadamente pelo Google e outros buscadores
**Tempo estimado**: 2-3 horas

#### Tarefas:
- [ ] Adicionar meta tag `description` com descrição atrativa do COMQ
- [ ] Adicionar meta tag `keywords` com palavras-chave relevantes
- [ ] Implementar Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- [ ] Implementar Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Adicionar canonical URL
- [ ] Adicionar robots meta tag
- [ ] Melhorar atributos `alt` das imagens com descrições mais detalhadas e ricas em palavras-chave

**Exemplo de implementação**:
```html
<!-- Meta Tags Básicas -->
<meta name="description" content="COMQ - Centro de Oportunidades do Mário Quintana conecta jovens e empreendedores a oportunidades de emprego, capacitação e desenvolvimento profissional em Porto Alegre/RS">
<meta name="keywords" content="COMQ, oportunidades emprego, jovens Porto Alegre, empreendedorismo, capacitação profissional, Mário Quintana">
<meta name="author" content="COMQ - Centro de Oportunidades">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://comq.site/">
<meta property="og:title" content="COMQ - Centro de Oportunidades do Mário Quintana">
<meta property="og:description" content="Transformando vidas através de oportunidades. Conectamos jovens e empreendedores a vagas de emprego, cursos e desenvolvimento profissional.">
<meta property="og:image" content="https://comq.site/images/logo-comq.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://comq.site/">
<meta property="twitter:title" content="COMQ - Centro de Oportunidades do Mário Quintana">
<meta property="twitter:description" content="Transformando vidas através de oportunidades. Conectamos jovens e empreendedores a vagas de emprego, cursos e desenvolvimento profissional.">
<meta property="twitter:image" content="https://comq.site/images/logo-comq.png">
```

---

### 2. Corrigir Links Vazios (Botões CTA Hero)
**Status**: Pendente
**Urgência**: ALTA
**Impacto**: Usuários clicam mas não acontece nada, prejudica a experiência
**Tempo estimado**: 30 minutos

#### Tarefas:
- [ ] Substituir `href="#"` do botão "Conheça nossos projetos" por link/seção válida
- [ ] Substituir `href="#"` do botão "Seja um parceiro" por link para seção de parcerias (#voluntario)
- [ ] Criar páginas de destino ou âncoras apropriadas

**Código atual** ([index.html:81-82](index.html#L81-L82)):
```html
<a href="#" class="hero__buttons-accent">Conheça nossos projetos</a>
<a href="#" class="hero__buttons-white">Seja um parceiro</a>
```

**Solução sugerida**:
```html
<a href="#historia" class="hero__buttons-accent">Conheça nossos projetos</a>
<a href="#voluntario" class="hero__buttons-white">Seja um parceiro</a>
```

---

### 3. Implementar Funcionalidade do Formulário de Newsletter
**Status**: Pendente
**Urgência**: ALTA
**Impacto**: Perda de leads e inscrições
**Tempo estimado**: 2-4 horas

#### Tarefas:
- [ ] Escolher plataforma de email marketing (recomendado: Mailchimp, SendGrid, ou EmailJS)
- [ ] Criar conta na plataforma escolhida
- [ ] Implementar integração via API ou formulário embed
- [ ] Adicionar validação de email no frontend
- [ ] Adicionar feedback visual ao usuário (sucesso/erro)
- [ ] Implementar proteção contra spam (reCAPTCHA ou honeypot)
- [ ] Adicionar mensagem de confirmação/agradecimento

**Opções de implementação**:

**Opção 1 - Mailchimp (Gratuito até 500 contatos)**:
```html
<!-- Formulário Mailchimp -->
<form action="https://comq.us12.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID" method="post" class="newsletter-form">
  <input type="email" name="EMAIL" placeholder="Digite seu e-mail" required>
  <button type="submit">Inscrever-se</button>
</form>
```

**Opção 2 - EmailJS (Frontend puro)**:
```javascript
// Adicionar script EmailJS
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// JavaScript para enviar
emailjs.init("YOUR_PUBLIC_KEY");
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  emailjs.send("service_id", "template_id", { email: email })
    .then(() => alert('Inscrição realizada com sucesso!'));
});
```

---

### 4. Implementar Google Analytics ou Ferramenta de Métricas
**Status**: Pendente
**Urgência**: ALTA
**Impacto**: Impossível medir desempenho, tráfego e conversões
**Tempo estimado**: 1 hora

#### Tarefas:
- [ ] Criar conta no Google Analytics 4
- [ ] Obter ID de medição (G-XXXXXXXXXX)
- [ ] Adicionar script de tracking no `<head>`
- [ ] Configurar objetivos/conversões (cliques em WhatsApp, formulários, etc.)
- [ ] Testar se está capturando dados corretamente
- [ ] Configurar Google Search Console
- [ ] (Opcional) Adicionar Microsoft Clarity para heatmaps

**Implementação**:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 5. Criar Páginas de Políticas e Termos (LGPD/Compliance)
**Status**: Pendente
**Urgência**: ALTA
**Impacto**: Conformidade legal (LGPD) e confiança do usuário
**Tempo estimado**: 4-6 horas

#### Tarefas:
- [ ] Criar página `politica-privacidade.html`
- [ ] Criar página `termos-uso.html`
- [ ] Criar página `transparencia.html` ou seção com relatórios
- [ ] Atualizar links do footer com os arquivos criados
- [ ] Revisar com advogado ou usar geradores de política LGPD
- [ ] Adicionar banner de cookies (se usar cookies/analytics)

**Links no footer** ([index.html:530-532](index.html#L530-L532)):
```html
<a href="#">Política da Privacidade</a>
<a href="#">Termos de Uso</a>
<a href="#">Transparência</a>
```

**Solução**:
```html
<a href="politica-privacidade.html">Política da Privacidade</a>
<a href="termos-uso.html">Termos de Uso</a>
<a href="transparencia.html">Transparência</a>
```

---

### 6. Criar sitemap.xml e robots.txt
**Status**: Pendente
**Urgência**: ALTA
**Impacto**: Indexação inadequada nos buscadores
**Tempo estimado**: 30 minutos

#### Tarefas:
- [ ] Criar arquivo `sitemap.xml` na raiz do projeto
- [ ] Criar arquivo `robots.txt` na raiz do projeto
- [ ] Submeter sitemap no Google Search Console
- [ ] Testar com validadores online

**sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://comq.site/</loc>
    <lastmod>2025-11-02</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://comq.site/politica-privacidade.html</loc>
    <lastmod>2025-11-02</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://comq.site/termos-uso.html</loc>
    <lastmod>2025-11-02</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
```

**robots.txt**:
```
User-agent: *
Allow: /

Sitemap: https://comq.site/sitemap.xml
```

---

## 🟡 Prioridade MÉDIA

### 7. Remover Código JavaScript Não Utilizado
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Código desnecessário aumenta tamanho do arquivo
**Tempo estimado**: 15 minutos

#### Tarefas:
- [ ] Remover código do carrossel ([app.js:109-130](js/app.js#L109-L130))
- [ ] Verificar se há outros trechos não utilizados

**Código para remover** ([app.js:109-130](js/app.js#L109-L130)):
```javascript
// ----- Carrossel -----
const track = document.querySelector(".carrossel-track")
const btnLeft = document.querySelector(".carrossel-btn.left")
const btnRight = document.querySelector(".carrossel-btn.right")
// ... (todo o bloco)
```

---

### 8. Otimizar Imagens
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Melhor performance e tempo de carregamento
**Tempo estimado**: 2-3 horas

#### Tarefas:
- [ ] Converter todas as imagens JPEG para WebP
- [ ] Comprimir PNGs grandes (empreendedoras.png: 237K, logo-despertar.png: 51K, etc.)
- [ ] Implementar `srcset` para imagens responsivas
- [ ] Considerar uso de CDN para imagens (Cloudinary, ImgIX)
- [ ] Gerar múltiplas versões (thumbnail, medium, full) para cada imagem

**Ferramentas recomendadas**:
- **Conversão para WebP**: `cwebp` (CLI) ou [Squoosh](https://squoosh.app/)
- **Compressão**: TinyPNG, ImageOptim
- **Automação**: Sharp (Node.js), ImageMagick

**Exemplo de srcset**:
```html
<img
  src="images/empreendedoras-800.webp"
  srcset="images/empreendedoras-400.webp 400w,
          images/empreendedoras-800.webp 800w,
          images/empreendedoras-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="Foto de empreendedoras da comunidade"
  loading="lazy"
>
```

---

### 9. Adicionar Preload para Recursos Críticos
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Melhora a velocidade de carregamento inicial
**Tempo estimado**: 30 minutos

#### Tarefas:
- [ ] Adicionar preload para fontes Google
- [ ] Adicionar preload para logo principal
- [ ] Adicionar preload para CSS crítico

**Implementação**:
```html
<!-- Preload de fontes -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap" as="style">
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" as="style">

<!-- Preload de imagens críticas -->
<link rel="preload" href="./images/logo-comq.png" as="image">
<link rel="preload" href="./images/hero-bg.webp" as="image">

<!-- Preload de CSS -->
<link rel="preload" href="css/style.css" as="style">
```

---

### 10. Implementar Minificação de CSS e JavaScript
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Reduz tamanho de arquivos em 20-30%
**Tempo estimado**: 2 horas (setup inicial)

#### Tarefas:
- [ ] Configurar ferramenta de build (Gulp, Webpack, ou Vite)
- [ ] Minificar arquivos CSS
- [ ] Minificar arquivo JavaScript
- [ ] Criar versões `.min.css` e `.min.js`
- [ ] Atualizar referências no HTML
- [ ] Adicionar ao processo de deploy

**Opções**:

**Opção 1 - Online (rápido)**:
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

**Opção 2 - Automatizado (recomendado)**:
```bash
# Usando npm
npm install -g clean-css-cli uglify-js

# Minificar CSS
cleancss -o css/style.min.css css/style.css

# Minificar JS
uglifyjs js/app.js -o js/app.min.js -c -m
```

---

### 11. Adicionar Favicon em Múltiplos Formatos
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Melhor suporte cross-browser e PWA
**Tempo estimado**: 1 hora

#### Tarefas:
- [ ] Gerar favicons em múltiplos tamanhos (16x16, 32x32, 192x192, 512x512)
- [ ] Criar arquivo `site.webmanifest` para PWA
- [ ] Adicionar Apple Touch Icon
- [ ] Adicionar meta tags de tema mobile

**Implementação**:
```html
<!-- Favicons -->
<link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png">
<link rel="manifest" href="./site.webmanifest">

<!-- Theme Color -->
<meta name="theme-color" content="#28535a">
<meta name="msapplication-TileColor" content="#28535a">
```

---

### 12. Implementar Validação de Formulários
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Melhor UX e previne erros
**Tempo estimado**: 1 hora

#### Tarefas:
- [ ] Adicionar validação HTML5 nos campos
- [ ] Adicionar validação JavaScript customizada
- [ ] Adicionar mensagens de erro personalizadas
- [ ] Adicionar feedback visual (borda vermelha, ícones)

---

### 13. Configurar Linters e Formatadores
**Status**: Pendente
**Urgência**: MÉDIA
**Impacto**: Qualidade e consistência do código
**Tempo estimado**: 2 horas

#### Tarefas:
- [ ] Configurar ESLint para JavaScript
- [ ] Configurar Stylelint para CSS
- [ ] Configurar Prettier para formatação
- [ ] Adicionar scripts no package.json
- [ ] Configurar pre-commit hooks com Husky

**Setup**:
```bash
npm init -y
npm install --save-dev eslint stylelint prettier husky lint-staged

# Criar arquivos de configuração
npx eslint --init
```

---

## 🟢 Prioridade BAIXA

### 14. Melhorar Acessibilidade (A11y)
**Status**: Pendente
**Urgência**: BAIXA
**Impacto**: Inclusão e conformidade WCAG
**Tempo estimado**: 3-4 horas

#### Tarefas:
- [ ] Adicionar `lang="pt-BR"` no HTML (já presente, verificar)
- [ ] Adicionar skip link para conteúdo principal
- [ ] Melhorar contraste de cores (testar com WAVE ou axe)
- [ ] Adicionar `role` attributes onde apropriado
- [ ] Testar com leitores de tela (NVDA, JAWS)
- [ ] Garantir navegação completa por teclado
- [ ] Adicionar labels ocultos para ícones sociais

**Exemplo de skip link**:
```html
<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
</style>
```

---

### 15. Implementar Modo Escuro (Dark Mode)
**Status**: Backlog
**Urgência**: BAIXA
**Impacto**: Melhor UX, tendência moderna
**Tempo estimado**: 4-6 horas

#### Tarefas:
- [ ] Criar paleta de cores para tema escuro
- [ ] Adicionar toggle de tema no header
- [ ] Salvar preferência no localStorage
- [ ] Respeitar preferência do sistema (prefers-color-scheme)
- [ ] Atualizar todas as seções com estilos dark mode

---

### 16. Adicionar Animações e Micro-interações
**Status**: Backlog
**Urgência**: BAIXA
**Impacto**: Melhora UX e moderniza o site
**Tempo estimado**: 4-6 horas

#### Tarefas:
- [ ] Adicionar scroll reveal animations (AOS, Intersection Observer)
- [ ] Animações de hover mais elaboradas
- [ ] Transições suaves entre estados
- [ ] Loading spinner para formulários
- [ ] Animação de entrada do menu mobile

**Biblioteca recomendada**: [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)

---

### 17. Consolidar e Otimizar CSS
**Status**: Pendente
**Urgência**: BAIXA
**Impacto**: Reduz duplicação, melhora manutenibilidade
**Tempo estimado**: 3-4 horas

#### Tarefas:
- [ ] Identificar e remover CSS duplicado
- [ ] Consolidar media queries repetidas
- [ ] Refatorar com metodologia BEM consistente
- [ ] Considerar uso de CSS-in-JS ou preprocessador (SASS/LESS)
- [ ] Remover CSS não utilizado (PurgeCSS)

---

### 18. Padronizar Nomenclatura de Arquivos e Variáveis
**Status**: Pendente
**Urgência**: BAIXA
**Impacto**: Melhor manutenibilidade
**Tempo estimado**: 2 horas

#### Tarefas:
- [ ] Padronizar nomes de arquivos (tudo kebab-case)
- [ ] Padronizar comentários (todos em português OU inglês)
- [ ] Revisar nomenclatura de classes CSS
- [ ] Documentar convenções no README

---

### 19. Adicionar Testes Automatizados
**Status**: Backlog
**Urgência**: BAIXA
**Impacto**: Previne regressões, aumenta confiabilidade
**Tempo estimado**: 6-8 horas (setup + testes iniciais)

#### Tarefas:
- [ ] Configurar Jest para testes JavaScript
- [ ] Escrever testes unitários para funções JS
- [ ] Configurar Cypress ou Playwright para testes E2E
- [ ] Criar testes de acessibilidade (axe-core)
- [ ] Adicionar testes ao CI/CD

---

### 20. Implementar Service Worker / PWA
**Status**: Backlog
**Urgência**: BAIXA
**Impacto**: Site funciona offline, instalável no mobile
**Tempo estimado**: 4-6 horas

#### Tarefas:
- [ ] Criar arquivo `sw.js` (Service Worker)
- [ ] Criar `manifest.json` completo
- [ ] Configurar cache strategies
- [ ] Adicionar ícones PWA (192x192, 512x512)
- [ ] Testar instalação no mobile
- [ ] Testar funcionamento offline

---

## 💻 Débitos Técnicos

### DT-1: Remover Configuração Angular do VS Code
**Arquivo**: `.vscode/settings.json`
**Linha**: 2
**Problema**: Configuração `angular.enable-strict-mode-prompt: false` em projeto sem Angular
**Ação**: Remover configuração ou limpar arquivo

---

### DT-2: Duplicação de Imports de Fontes Google
**Arquivo**: `index.html`
**Linhas**: 12-24
**Problema**: Dois blocos diferentes importando as mesmas fontes
**Ação**: Consolidar em um único import

**Atual**:
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
```

**Sugerido**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

### DT-3: Valores Duplicados na Lista de Valores
**Arquivo**: `index.html`
**Linhas**: 149-150
**Problema**: "Compromisso com a comunidade" aparece duas vezes

**Ação**: Corrigir duplicação

---

### DT-4: Erro de Digitação em Texto
**Arquivo**: `index.html`
**Linha**: 319
**Problema**: "Assisto antes para empreendedoras todo nós no encontro das Empreendedoras do COMQ!" - texto não faz sentido
**Ação**: Revisar e corrigir texto

---

### DT-5: Inconsistência no Uso de Tags HTML
**Arquivo**: `index.html`
**Linhas**: 290, 313-318
**Problema**: Mistura de `<h1>`, `<h3>`, `<h5>` sem hierarquia consistente nos cards de parceiros
**Ação**: Padronizar usando `<h3>` para nomes e `<p>` para descrições

---

## 🚀 Melhorias Futuras

### MF-1: Migrar para Framework Moderno
**Tecnologias sugeridas**: React, Vue.js, ou Next.js
**Justificativa**: Melhor escalabilidade, componentização, e ecosystem
**Esforço**: Alto (3-4 semanas)

#### Benefícios:
- Componentização real
- State management robusto
- Roteamento avançado
- SSR/SSG para melhor SEO
- Ecosystem rico de bibliotecas

---

### MF-2: Implementar CMS Headless
**Tecnologias sugeridas**: Strapi, Contentful, Sanity
**Justificativa**: Permitir edição de conteúdo sem código
**Esforço**: Médio (1-2 semanas)

#### Benefícios:
- Equipe não-técnica pode atualizar conteúdo
- Versionamento de conteúdo
- Multi-idioma facilitado
- API para futuras integrações

---

### MF-3: Adicionar Backend para Formulários e Newsletter
**Tecnologias sugeridas**: Node.js + Express, Firebase, ou Supabase
**Justificativa**: Controle total sobre dados e integraçõesr
**Esforço**: Médio (1-2 semanas)

#### Funcionalidades:
- API para newsletter
- API para voluntários
- Banco de dados para contatos
- Dashboard administrativo
- Envio de emails automatizados

---

### MF-4: Implementar Busca no Site
**Tecnologia sugerida**: Algolia, Meilisearch, ou Fuse.js
**Justificativa**: Facilitar navegação em conteúdo crescente
**Esforço**: Médio (3-5 dias)

---

### MF-5: Adicionar Internacionalização (i18n)
**Tecnologia sugerida**: i18next, vue-i18n, ou react-intl
**Justificativa**: Alcançar público mais amplo
**Esforço**: Alto (2-3 semanas)

#### Idiomas prioritários:
1. Português (atual)
2. Inglês
3. Espanhol

---

### MF-6: Dashboard de Métricas e Impacto
**Justificativa**: Transparência e engajamento com apoiadores
**Esforço**: Alto (3-4 semanas)

#### Funcionalidades:
- Número de jovens impactados
- Empresas parceiras
- Vagas de emprego geradas
- Eventos realizados
- Gráficos e visualizações

---

### MF-7: Sistema de Blog/Notícias
**Justificativa**: Engajamento contínuo e SEO
**Esforço**: Médio (1-2 semanas)

#### Funcionalidades:
- Publicação de notícias
- Histórias de sucesso
- Eventos futuros
- Sistema de categorias e tags
- Compartilhamento social

---

### MF-8: Integração com Redes Sociais
**Justificativa**: Automatizar posts e aumentar alcance
**Esforço**: Médio (1 semana)

#### Funcionalidades:
- Feed do Instagram no site
- Auto-post de eventos no LinkedIn
- Compartilhamento facilitado
- Social login (entrar com Google/Facebook)

---

## 📦 Backlog de Funcionalidades

### 1. Sistema de Depoimentos Dinâmico
- [ ] Adicionar mais depoimentos de membros da comunidade
- [ ] Criar carrossel/slider para navegação
- [ ] Permitir envio de novos depoimentos via formulário

### 2. Calendário de Eventos
- [ ] Exibir próximos eventos e workshops
- [ ] Integrar com Google Calendar
- [ ] Sistema de inscrição online

### 3. Portal de Vagas
- [ ] Listagem de vagas disponíveis
- [ ] Filtros por área, tipo, localização
- [ ] Candidatura online

### 4. Galeria de Fotos/Vídeos
- [ ] Seção com fotos de eventos
- [ ] Vídeos de depoimentos
- [ ] Lightbox para visualização

### 5. Chat ou FAQ Interativo
- [ ] Chatbot para dúvidas frequentes
- [ ] Seção de FAQ expansível
- [ ] Integração com WhatsApp Business API

### 6. Área de Membros/Login
- [ ] Cadastro de jovens e empreendedores
- [ ] Dashboard personalizado
- [ ] Histórico de participação
- [ ] Certificados digitais

---

## 📊 Priorização por Impacto vs Esforço

### Quick Wins (Alto Impacto, Baixo Esforço)
1. ✅ Adicionar meta tags de SEO
2. ✅ Corrigir links vazios
3. ✅ Implementar Google Analytics
4. ✅ Criar sitemap.xml e robots.txt
5. ✅ Remover código JavaScript não utilizado

### Major Projects (Alto Impacto, Alto Esforço)
1. ✅ Implementar funcionalidade de newsletter
2. ✅ Criar páginas de políticas (LGPD)
3. ✅ Otimizar imagens
4. ⏳ Migrar para framework moderno
5. ⏳ Implementar CMS headless

### Fill Ins (Baixo Impacto, Baixo Esforço)
1. ✅ Corrigir duplicação de imports
2. ✅ Padronizar nomenclatura
3. ✅ Adicionar favicons completos
4. ✅ Melhorar acessibilidade básica

### Thankless Tasks (Baixo Impacto, Alto Esforço)
1. ⏳ Testes automatizados completos
2. ⏳ Implementar PWA completo
3. ⏳ Internacionalização

---

## 📈 Métricas de Sucesso

Para cada item completado, medir:

### SEO
- [ ] Posição no Google para palavras-chave alvo
- [ ] Número de páginas indexadas
- [ ] Taxa de cliques (CTR) nos resultados de busca

### Performance
- [ ] Lighthouse Score > 90
- [ ] Tempo de carregamento < 3s
- [ ] First Contentful Paint < 1.5s

### Conversões
- [ ] Taxa de inscrição na newsletter
- [ ] Cliques em botões de WhatsApp
- [ ] Submissões de formulário de voluntários

### Engajamento
- [ ] Tempo médio no site > 2min
- [ ] Taxa de rejeição < 60%
- [ ] Páginas por sessão > 3

---

## 🗓 Roadmap Sugerido

### Sprint 1 (Semana 1-2): Quick Wins - SEO e Correções Críticas
- [ ] SEO: Meta tags completas
- [ ] Corrigir links vazios
- [ ] Google Analytics
- [ ] sitemap.xml e robots.txt
- [ ] Remover código não utilizado

### Sprint 2 (Semana 3-4): Funcionalidades Essenciais
- [ ] Implementar newsletter funcional
- [ ] Criar páginas de políticas (LGPD)
- [ ] Otimizar imagens (conversão WebP)

### Sprint 3 (Semana 5-6): Performance e Qualidade
- [ ] Minificação CSS/JS
- [ ] Preload de recursos críticos
- [ ] Configurar linters
- [ ] Melhorias de acessibilidade

### Sprint 4 (Semana 7-8): Melhorias UX
- [ ] Animações e micro-interações
- [ ] Validação de formulários
- [ ] Favicons completos
- [ ] Consolidar CSS

### Backlog (Meses 3-6): Evolução
- [ ] Avaliar migração para framework moderno
- [ ] Implementar CMS headless
- [ ] Sistema de blog
- [ ] Dashboard de métricas

---

## 📝 Notas Finais

### Prioridades Imediatas (Esta Semana)
1. **SEO** - Sem isso, o site não será encontrado
2. **Links vazios** - Prejudica conversões
3. **Google Analytics** - Precisa começar a coletar dados AGORA
4. **Newsletter** - Perda de leads todos os dias

### Manutenção Contínua
- Revisar e atualizar conteúdo mensalmente
- Monitorar métricas semanalmente
- Testar em diferentes navegadores/dispositivos
- Backup regular do código

### Contato para Discussão Técnica
- Agendar reunião com equipe para priorização
- Definir orçamento para ferramentas pagas (analytics, CMS, etc.)
- Estabelecer processo de deploy e versionamento

---

**Última atualização**: 02/11/2025
**Versão do documento**: 1.0
**Status geral**: 85% das funcionalidades críticas implementadas

---

*Este documento deve ser revisado e atualizado mensalmente conforme o progresso do projeto.*
