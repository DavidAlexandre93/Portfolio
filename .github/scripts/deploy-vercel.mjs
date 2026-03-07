#!/usr/bin/env node
import { execSync } from 'node:child_process';

const environment = process.argv[2];

if (!environment) {
  console.error('Uso: node .github/scripts/deploy-vercel.mjs <development|staging|production>');
  process.exit(1);
}

const requiredSecrets = ['VERCEL_TOKEN', 'VERCEL_ORG_ID', 'VERCEL_PROJECT_ID'];
for (const secret of requiredSecrets) {
  if (!process.env[secret]) {
    console.error(`Segredo ausente: ${secret}`);
    process.exit(1);
  }
}

const token = process.env.VERCEL_TOKEN;
const isProduction = environment === 'production';

const commands = isProduction
  ? [
      `vercel pull --yes --environment=production --token=${token}`,
      `vercel build --prod --token=${token}`,
      `vercel deploy --prebuilt --prod --token=${token}`,
    ]
  : [
      `vercel pull --yes --environment=preview --token=${token}`,
      `vercel build --token=${token}`,
      `vercel deploy --prebuilt --token=${token}`,
    ];

execSync('npm i -g vercel@latest', { stdio: 'inherit' });
commands.forEach((cmd) => execSync(cmd, { stdio: 'inherit' }));
