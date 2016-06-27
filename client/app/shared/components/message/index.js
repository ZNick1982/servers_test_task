import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messageComponent from './message.component';

let messageModule = angular.module('message', [
  uiRouter
])
.component('message', messageComponent);

export default messageModule;
