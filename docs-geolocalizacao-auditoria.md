# Auditoria de geolocalização e tradução automática

## Resultado
**Não está perfeitamente implementado** para o requisito “qualquer parte do mundo traduzir automaticamente para o idioma nativo da localidade”.

## Evidências no código
1. A detecção por geolocalização via IP existe (`https://ipapi.co/json/`), mas o mapeamento por país cobre apenas **4 países**: BR, FR, US e JP.
2. O normalizador de idioma também reconhece apenas 4 famílias de idioma (pt, fr, ja e fallback para en).
3. O dicionário de mensagens possui apenas 4 idiomas: `pt-BR`, `en-US`, `fr-FR` e `ja-JP`.
4. Portanto, usuários de países/idiomas como `de-DE`, `es-ES`, `it-IT`, `nl-NL`, `zh-CN`, `ar-SA` etc. cairão em inglês, e não no idioma nativo.

## Conclusão prática
- A funcionalidade atual entrega **localização parcial** (4 idiomas/regiões), não cobertura mundial com língua nativa automática.
- Para cumprir o requisito “qualquer parte do mundo”, é necessário ampliar catálogo de idiomas e estratégia de seleção (ou integrar mecanismo de tradução automática com governança de qualidade).

## Recomendações objetivas
1. **Ampliar idiomas suportados** no `MESSAGES` para os mercados-alvo (ex.: es, de, it, nl, zh, ar, ru).
2. **Melhorar fallback por idioma**: usar `navigator.languages` (lista ordenada) antes de cair em inglês.
3. **Expandir mapeamento por país** com estratégia de manutenção (arquivo dedicado + testes).
4. **Adicionar testes automatizados** para cenários de locale por país/idioma, garantindo não regressão.
5. **Opcional**: adicionar seletor manual de idioma na UI para override do usuário.
