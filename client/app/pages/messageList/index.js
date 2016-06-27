import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messageListComponent from './messageList.component';
import servicesModule from '../../services/';
import sharedComponentsModule from '../../shared/components/';
import infiniteScrollModule from '../../shared/directives/infiniteScroll';

let messageListModule = angular.module('messageList', [
  uiRouter,
  servicesModule.name,
  sharedComponentsModule.name,
  infiniteScrollModule.name
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('messageList', {
      url: '/',
      template: '<message-list></message-list>'
    });
})
.component('messageList', messageListComponent);

export default messageListModule;
