# Portfólio Pessoal

Site de portfólio estático construído com **React + Vite**. Design minimalista em branco, cinza e verde musgo.

## Rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # preview local do build
```

## Adicionar ou editar projetos

Edite apenas o arquivo `src/data/projects.js`:

```js
{
  id: 6,                          // número único
  name: "Nome do Projeto",
  description: "O que o projeto faz.",
  period: "Jan 2026 – Mar 2026",
  technologies: ["React", "Node.js"],
  github: "https://github.com/seu-usuario/repo",
}
```

Sem tocar em mais nenhum outro arquivo.

## Deploy no Vercel

### Via GitHub (recomendado)

1. Suba o projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**
3. Importe o repositório do GitHub
4. O Vercel detecta o Vite automaticamente — clique em **Deploy**

Pronto. Cada `git push` na branch main faz um novo deploy automático.

### Via CLI

```bash
npm i -g vercel
vercel        # primeira vez (cria o projeto)
vercel --prod # deploys seguintes
```

## Estrutura

```
src/
├── components/
│   ├── Header.jsx       # Cabeçalho com nome e links
│   ├── ProjectList.jsx  # Lista vertical de projetos
│   ├── ProjectCard.jsx  # Linha clicável de cada projeto
│   └── Modal.jsx        # Pop-up com detalhes
├── data/
│   └── projects.js      # ← edite aqui para gerenciar projetos
└── styles/
    ├── global.css        # Variáveis de cor e reset
    ├── Header.css
    ├── ProjectCard.css
    └── Modal.css
```
# Site-Portf-lio
