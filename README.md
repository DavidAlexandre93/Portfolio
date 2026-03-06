This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requisitos

- Node.js **20.x** (recomendado usar `nvm use` com o arquivo `.nvmrc`).

## Getting Started

First, instale as dependências e execute o servidor de desenvolvimento:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Baseline e observabilidade de performance

Este projeto é majoritariamente frontend estático. Portanto, as melhorias de performance e estabilidade focam em:

- **Latência de página (Core Web Vitals):** monitoramento de LCP/CLS/INP/FCP/TTFB em produção via `reportWebVitals`.
- **Taxa de erro:** logging estruturado no endpoint `/api/vitals` para capturar amostras de degradação por navegação.
- **Throughput/CPU/RAM/DB:** não há backend stateful com banco neste repositório; essas métricas devem ser medidas no ambiente de hospedagem (Vercel/infra) e não localmente.
- **Tempo de build:** medido localmente com `yarn build` + script Python para registrar duração e memória de pico.

### Métricas-alvo sugeridas (produção)

- p95 LCP < **2.5s**
- p95 INP < **200ms**
- p99 CLS < **0.1**
- erro de navegação (JS/runtime + 5xx API) < **1%**

### Como medir baseline local

```bash
python - <<'PY'
import subprocess,time,resource
start=time.time()
proc=subprocess.run(['yarn','build'],capture_output=True,text=True)
end=time.time()
usage=resource.getrusage(resource.RUSAGE_CHILDREN)
print(proc.stdout)
print(proc.stderr)
print(f'build_time_seconds={end-start:.2f}')
print(f'max_rss_kb={usage.ru_maxrss}')
raise SystemExit(proc.returncode)
PY
```
