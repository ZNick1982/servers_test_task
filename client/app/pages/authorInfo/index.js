import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authorInfoComponent from './authorInfo.component';
import servicesModule from '../../services/';
import sharedComponentsModule from '../../shared/components/';
import infiniteScrollModule from '../../shared/directives/infiniteScroll';

let authorInfoModule = angular.module('authorInfo', [
  uiRouter,
  servicesModule.name,
  sharedComponentsModule.name,
  infiniteScrollModule.name
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('authorInfo', {
      url: '/author/:authorId',
      template: '<author-info author-id="$stateParams"></author-info>',
      controller: ($stateParams, $scope) => {
        "ngInject";
        $scope.$stateParams = $stateParams;
      }
    });
})
.component('authorInfo', authorInfoComponent);

export default authorInfoModule;
