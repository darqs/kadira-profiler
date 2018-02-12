Package.describe({
  "summary": "CPU Profiler for Meteor (used with Kadira)",
  "version": "1.4.0",
  "git": "https://github.com/darqs/kadira-profiler.git",
  "name": "darqs:kadira-profiler"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], ['client', 'server']);

});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.6');
  api.use('http');
  api.use('check');
  api.use('random');
  api.use('meteorhacks:kadira@2.30.2');
  api.imply('meteorhacks:kadira@2.30.2');
  api.use('darqs:kadira-binary-deps@1.6.0');

  api.add_files('lib/server.js', 'server');
  api.add_files('lib/client.js', 'client');
}
