import angular from 'angular';
import messagesFactoryModule from './messages/';
import authorsFactoryModule from './authors/';

let servicesModule = angular.module('app.services', [
  messagesFactoryModule.name,
  authorsFactoryModule.name
]);

export default servicesModule;
