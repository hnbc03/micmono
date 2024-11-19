import('./bootstrap')
  .then((module) => module.bootstrap())
  .catch((err) => console.error('Error bootstrapping the app', err));