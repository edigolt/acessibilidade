# Acesso para Todos

Site educativo com cinco páginas sobre acessibilidade.

## Como executar
Abra `index.html` no navegador ou utilize a extensão Live Server no VS Code. Não é necessário instalar dependências.

## Como publicar no GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie os arquivos da pasta `AcessoParaTodos` para a raiz do repositório (o `index.html` deve ficar na raiz).
3. Acesse **Settings > Pages** e em **Build and deployment**, escolha **Deploy from a branch**, `main` e `/ (root)`; salve.
4. Aguarde a publicação e abra o endereço mostrado em Pages.

## Testes recomendados
- Navegue apenas com Tab, Shift+Tab e Enter.
- Teste zoom do navegador até 200% e telas pequenas.
- Teste os botões de fonte e contraste, inclusive após trocar de página.
- Faça uma avaliação com Lighthouse e axe DevTools e, se possível, um leitor de tela (NVDA).

Referência: https://www.w3.org/WAI/standards-guidelines/wcag/

**Nota:** O projeto incorpora práticas de acessibilidade, mas a conformidade completa com WCAG exige testes e revisão.
