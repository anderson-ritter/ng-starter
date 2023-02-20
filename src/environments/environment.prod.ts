export const environment = {
  production: true,
  debug: false,
  app: {
    name: 'NG Starter',
    i18nPrefix: '',
  },
  auth: {
    authority: 'https://localhost:5001',
    clientId: 'ng-starter-client',
    clientSecret: 'secret',
    scope: 'openid profile accounts'
  }
};
