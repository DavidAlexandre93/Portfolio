# Portfolio (Vite + React)

Portfólio pessoal desenvolvido com **React**, **Vite** e **Tailwind CSS**.

## Requisitos

- Node.js **20.x** (recomendado usar `nvm use` com o arquivo `.nvmrc`).

## Como rodar

```bash
npm install
npm run dev
```

Aplicação em: [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento (Vite)
- `npm run build`: gera build de produção
- `npm run preview`: sobe o build localmente
- `npm run start`: alias para `npm run dev`
- `npm run test`: executa os testes Node

## Baseline e observabilidade de performance

Este projeto é majoritariamente frontend estático. Portanto, as melhorias de performance e estabilidade focam em:

- **Latência de página (Core Web Vitals)**
- **Taxa de erro de runtime no cliente**
- **Tempo de build**

### Métricas-alvo sugeridas (produção)

- p95 LCP < **2.5s**
- p95 INP < **200ms**
- p99 CLS < **0.1**
- erro de navegação (JS/runtime) < **1%**
