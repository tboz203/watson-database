require.config({
  baseUrl: 'js/',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap-3',
    jquery:         '../lib/js/jquery',
    less:           '../lib/js/less',
    'ui-bootstrap': '../lib/js/ui-bootstrap'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']}
  }
});

require(['angular', 'DatabaseApp'], function(angular, app) {
  angular.bootstrap(document, ['DatabaseApp']);
  console.log('require block, standing by');
});

console.log('main.js, standing by');
