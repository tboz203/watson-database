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

require(['angular', 'DatabaseApp'], function(angular, app) {
  angular.bootstrap(document, ['DatabaseApp']);
  console.log('require block, standing by');
});

console.log('main.js, standing by');
