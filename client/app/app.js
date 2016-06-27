import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMesages from 'angular-messages';

import '../lib/angular-strap/dist/modules/compiler';
import '../lib/angular-strap/dist/modules/dimensions';
import '../lib/angular-strap/dist/modules/modal';
import '../lib/angular-strap/dist/modules/modal.tpl';
import '../lib/angular-strap/dist/modules/tooltip';
import '../lib/angular-strap/dist/modules/tooltip.tpl';
import '../lib/angular-strap/dist/modules/date-formatter';
import '../lib/angular-strap/dist/modules/date-parser';
import '../lib/angular-strap/dist/modules/datepicker';
import '../lib/angular-strap/dist/modules/datepicker.tpl';

import sharedComponents from './shared/components/';
import Pages from './pages/';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    sharedComponents.name,
    Pages.name,
    ngMesages,
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.datepicker'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(($datepickerProvider) => {
      "ngInject";
    angular.extend($datepickerProvider.defaults, {
      dateFormat: 'dd/MM/yyyy',
      startWeek: 1,
      autoclose: true
    });
  })
  .component('app', AppComponent);
