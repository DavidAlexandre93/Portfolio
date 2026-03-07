function shouldDeployDevelopment({ eventName, ref }) {
  return eventName === 'push' && ref === 'refs/heads/develop';
}

function shouldDeployStaging({ eventName, ref }) {
  return eventName === 'push' && ref === 'refs/heads/main';
}

function shouldDeployProduction({ eventName, ref }) {
  return eventName === 'push' && /^refs\/tags\/v\d+\.\d+\.\d+$/.test(ref);
}

module.exports = {
  shouldDeployDevelopment,
  shouldDeployStaging,
  shouldDeployProduction,
};
