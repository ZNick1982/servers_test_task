import angular from 'angular';
import messageModule from './message/';
import messageFeedModule from './messageFeed/';
import messageFilterModule from './messageFilter/';

let componentsModule = angular.module('app.shared.components', [
  messageModule.name,
  messageFeedModule.name,
  messageFilterModule.name
]);

export default componentsModule;
