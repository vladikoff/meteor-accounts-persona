Package.describe({
  summary: "Login service for Persona accounts."
});

Package.on_use(function(api, where) {
  api.use('accounts-base', ['client', 'server']);
  api.use('http', ['server']);

  api.add_files('persona_common.js', ['client', 'server']);
  api.add_files('persona_server.js', 'server');
  api.add_files('persona_client.js', 'client');
});
