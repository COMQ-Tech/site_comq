# Feature 1 — SEO, Analytics e Performance de Imagens

**Prazo**: Janeiro 2027
**Status**: Planejamento
**Responsável**: A definir

---

## Objetivo

Tornar o site do COMQ **visível no Google**, **mensurável** (saber quantas pessoas acessam e o que fazem) e **rápido no celular** — que é onde a comunidade do Mário Quintana acessa.

Esses três pilares se reforçam: SEO traz visitas → Analytics mede o impacto → Performance garante que as pessoas ficam.

---

## Por que isso gera retorno financeiro

1. **Visibilidade no Google** → Mais pessoas descobrem o COMQ organicamente → mais parceiros, voluntários e potenciais financiadores chegam sem custo de marketing
2. **Dados do Analytics** → Relatórios concretos de impacto ("X pessoas acessaram nossa página de voluntariado este mês") são exigidos em **editais de financiamento** e convencem patrocinadores
3. **Performance rápida** → Google ranqueia sites rápidos mais alto (Core Web Vitals) → mais tráfego gratuito
4. **Open Graph (WhatsApp/Instagram)** → Quando alguém compartilha o link, aparece com imagem e texto bonito → aumenta cliques → mais tráfego

---

## Entregas

### 1. SEO — Meta Tags e Estrutura

```html
<!-- Básico -->
<meta name="description" content="COMQ conecta jovens e empreendedoras do bairro Mário Quintana a oportunidades de emprego, capacitação e desenvolvimento. Porto Alegre/RS.">
<meta name="keywords" content="COMQ, Mário Quintana, emprego jovem, capacitação, Porto Alegre, ONG, empreendedoras">
<meta name="author" content="COMQ">
<link rel="canonical" href="https://comq.site">

<!-- Open Graph (WhatsApp, Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:title" content="COMQ — Conectando Jovens a Oportunidades">
<meta property="og:description" content="Organização social que conecta jovens e empreendedoras do Mário Quintana a emprego e capacitação em Porto Alegre.">
<meta property="og:image" content="https://comq.site/images/og-cover.jpg">
<meta property="og:url" content="https://comq.site">
<meta property="og:locale" content="pt_BR">

<!-- Twitter/X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="COMQ — Conectando Jovens a Oportunidades">
<meta name="twitter:description" content="Organização social que conecta jovens e empreendedoras do Mário Quintana a emprego e capacitação.">
<meta name="twitter:image" content="https://comq.site/images/og-cover.jpg">

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "COMQ",
  "description": "Organização social que conecta jovens e empreendedoras do bairro Mário Quintana a oportunidades de emprego e capacitação.",
  "url": "https://comq.site",
  "email": "comq.projeto@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  }
}
</script>
```

### 2. sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://comq.site/</loc>
    <lastmod>2026-04-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. robots.txt

```
User-agent: *
Allow: /
Sitemap: https://comq.site/sitemap.xml
```

### 4. Analytics — Plausible

```html
<script defer data-domain="comq.site" src="https://plausible.io/js/script.js"></script>
```

### 5. Lazy loading nas imagens

```html
<img src="..." alt="..." loading="lazy" width="X" height="Y">
```

### 6. manifest.json (PWA)

```json
{
  "name": "COMQ",
  "short_name": "COMQ",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#28535a",
  "theme_color": "#28535a",
  "icons": [
    { "src": "images/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "images/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Checklist

- [ ] Meta tags básicas no `<head>`
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Schema.org (JSON-LD)
- [ ] Imagem OG criada (1200x630px) → `images/og-cover.jpg`
- [ ] `sitemap.xml` criado
- [ ] `robots.txt` criado
- [ ] Google Search Console configurado e sitemap enviado
- [ ] Plausible instalado
- [ ] Imagens convertidas para `.webp`
- [ ] `loading="lazy"` em todas as imagens abaixo do hero
- [ ] `manifest.json` criado + ícones 192x192 e 512x512
- [ ] PageSpeed Insights > 90 mobile

---

## Métricas de Sucesso

| Métrica | Hoje | Meta Jan/2027 |
|---------|------|---------------|
| PageSpeed mobile | ~55 (estimado) | > 90 |
| Indexado no Google | Não | Sim |
| Posição "COMQ Porto Alegre" | Não ranqueado | Top 5 |
| Visitas mensais medidas | 0 | 500+ |
| Preview bonito no WhatsApp | Não | Sim |
