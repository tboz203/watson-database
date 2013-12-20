require.config({
  baseUrl: 'js/',
  paths: {
    angular:      '../lib/js/angular',
    bootstrap:    '../lib/js/bootstrap',
    jquery:       '../lib/js/jquery',
    less:         '../lib/js/less',
    uiBootstrap:  '../lib/js/ui-bootstrap'
  },
  shim: {
    'angular': {'exports': 'angular'}
  }
});

console.log('main.js, standing by');

require(['angular', 'DatabaseApp'], function(angular, app) {
  console.log('require block, standing by');
  angular.bootstrap(document, ['DatabaseApp']);
});
