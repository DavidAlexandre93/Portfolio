const test = require('node:test');
const assert = require('node:assert/strict');
const {
  shouldDeployDevelopment,
  shouldDeployStaging,
  shouldDeployProduction,
} = require('../.github/scripts/promotion-rules.cjs');

test('deploy em desenvolvimento apenas na branch develop', () => {
  assert.equal(shouldDeployDevelopment({ eventName: 'push', ref: 'refs/heads/develop' }), true);
  assert.equal(shouldDeployDevelopment({ eventName: 'push', ref: 'refs/heads/main' }), false);
});

test('deploy em staging apenas na branch main', () => {
  assert.equal(shouldDeployStaging({ eventName: 'push', ref: 'refs/heads/main' }), true);
  assert.equal(shouldDeployStaging({ eventName: 'pull_request', ref: 'refs/heads/main' }), false);
});

test('deploy em produção apenas com tag semver', () => {
  assert.equal(shouldDeployProduction({ eventName: 'push', ref: 'refs/tags/v1.0.0' }), true);
  assert.equal(shouldDeployProduction({ eventName: 'push', ref: 'refs/tags/latest' }), false);
  assert.equal(shouldDeployProduction({ eventName: 'push', ref: 'refs/heads/main' }), false);
});
