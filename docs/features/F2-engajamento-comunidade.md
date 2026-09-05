# Feature 2 — Engajamento e Comunidade

**Prazo**: Março 2027
**Status**: Planejamento
**Dependência**: F1 concluída

---

## Objetivo

Transformar visitantes em membros ativos: newsletter, projetos visíveis, mais histórias de impacto.

---

## Por que gera retorno financeiro

1. **Lista de emails** → mobilização para eventos e campanhas de doação
2. **Histórias documentadas** → prova social para editais
3. **Página de projetos** → transparência exigida por financiadores
4. **Comunidade engajada** → compartilhamentos no WhatsApp valem mais que anúncios

---

## Entregas

### 1. Newsletter — integração com Brevo

```html
<!-- Substituir form atual pelo gerado no painel Brevo -->
<form action="https://api.brevo.com/v3/contacts" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Inscrever</button>
</form>
```

Conteúdo mensal: 1 história de impacto + vagas do mês + próximos eventos + novos parceiros.

### 2. Seção #projetos

Projetos para documentar: Grupo de Jovens, Grupo de Empreendedoras, Parceria SENAC, Evento Online (Nov/24), Expofavela (Nov/24).

### 3. Galeria de histórias

```html
<article class="historia-card">
  <img src="images/foto-nome.webp" alt="Nome" loading="lazy">
  <blockquote>"Depoimento aqui."</blockquote>
  <cite>— Nome, Função no COMQ</cite>
</article>
```

Coletar via Google Forms (nome, foto, texto).

### 4. Mapa de impacto (opcional)

Card simples com números: jovens impactados, parceiros, cidades.

---

## Checklist

- [ ] Conta Brevo criada
- [ ] Newsletter integrada com email de boas-vindas automático
- [ ] Seção #projetos no `index.html` com CSS próprio
- [ ] 5+ projetos documentados
- [ ] Google Forms para depoimentos criado
- [ ] 6+ depoimentos publicados
- [ ] Primeira newsletter com 50+ inscritos

---

## Métricas de Sucesso

| Métrica | Hoje | Meta Mar/2027 |
|---------|------|---------------|
| Inscritos newsletter | 0 | 300+ |
| Taxa de abertura | — | > 35% |
| Depoimentos publicados | 2 | 10+ |
| Projetos documentados | 0 | 5+ |
