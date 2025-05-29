# Guia de Edição da Landing Page "Brevemente" TalentFlow

Este documento fornece instruções para editar e personalizar a landing page "Brevemente" da TalentFlow.

## Estrutura de Ficheiros

A landing page é composta pelos seguintes ficheiros:

- `index.html` - Estrutura principal da página
- `styles.css` - Estilos e design visual
- `script.js` - Funcionalidades interativas (countdown e formulário)
- `images/` - Pasta contendo os logotipos e imagens

## Como Editar a Landing Page

### Edição do Conteúdo (index.html)

O ficheiro `index.html` contém toda a estrutura e conteúdo da landing page. Para editar:

1. Abra o ficheiro com qualquer editor de código (VS Code, Sublime Text, etc.)
2. Localize a secção que deseja modificar
3. Altere o texto entre as tags HTML

Secções principais:
- Logo: No topo da página
- Slogan "Connecting Talents": Título principal
- Mensagem "Brevemente Disponível": Subtítulo
- Descrição: Texto explicativo sobre a plataforma
- Countdown: Contagem regressiva para o lançamento
- Formulário de subscrição: Para captura de emails
- Links sociais: Ícones de redes sociais
- Rodapé: Informações de copyright

### Personalização Visual (styles.css)

O ficheiro `styles.css` contém todos os estilos visuais. Para modificar:

1. Abra o ficheiro com um editor de código
2. No topo do documento, encontrará variáveis CSS que definem as cores principais:

```css
:root {
    --primary-color: #1e56ff;
    --secondary-color: #00e5c9;
    --dark-blue: #0a0e29;
    /* outras variáveis */
}
```

3. Altere estas variáveis para mudar as cores em toda a página
4. Para modificações mais específicas, localize a secção correspondente no CSS

### Configuração do Countdown (script.js)

O countdown está configurado para 1 de Agosto de 2025. Para alterar a data:

1. Abra o ficheiro `script.js`
2. Localize a linha:
```javascript
const launchDate = new Date("August 1, 2025 00:00:00").getTime();
```
3. Altere a data para o lançamento desejado

### Formulário de Email

O formulário está configurado para simular o envio de emails. Para integrá-lo com um serviço real:

1. Abra o ficheiro `index.html` e localize a tag `<form id="subscribe-form">`
2. Adicione o atributo `action` com o URL do seu serviço de email
3. Modifique o ficheiro `script.js` na secção de manipulação do formulário para enviar os dados ao seu serviço

### Imagens e Logotipos

Para substituir imagens:
1. Adicione novas imagens à pasta `images/`
2. No ficheiro `index.html`, localize a tag `<img>` e atualize o atributo `src` para apontar para as novas imagens

## Publicação da Landing Page

Para publicar a landing page:

1. **Hospedagem tradicional**:
   - Faça upload de todos os ficheiros mantendo a mesma estrutura de pastas para o seu servidor web

2. **GitHub Pages**:
   - Crie um repositório no GitHub
   - Faça upload de todos os ficheiros
   - Ative o GitHub Pages nas configurações do repositório

3. **Netlify/Vercel**:
   - Crie uma conta em netlify.com ou vercel.com
   - Arraste e solte a pasta do projeto ou conecte ao seu repositório GitHub

## Dicas para Personalização

- **Cores**: Modifique as variáveis CSS para manter consistência visual
- **Fontes**: Para alterar as fontes, modifique as importações do Google Fonts no topo do `index.html` e as variáveis de fonte no `styles.css`
- **Responsividade**: A página já é totalmente responsiva, mas teste sempre após modificações
- **SEO**: Personalize as meta tags no `<head>` do `index.html` para melhorar o SEO
- **Redes Sociais**: Atualize os links das redes sociais no HTML para apontar para as suas páginas oficiais

## Suporte

Para qualquer dúvida ou suporte adicional, entre em contacto através do email fornecido.
