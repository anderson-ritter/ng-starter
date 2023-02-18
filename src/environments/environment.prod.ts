export const environment = {
  production: true,
  debug: false,
  app: {
    name: 'NG Returns',
    i18nPrefix: '',
  },
  auth: {
    authority: 'https://localhost:5001',
    clientId: 'ng-returns-client',
    clientSecret: 'secret',
    scope: 'openid profile accounts'
  }
};
