import angular from 'angular';
import messagesFactory from './messages.factory';
import filterFactory from './filter.factory';

let messagesFactoryModule = angular.module('app.services.messagesFactory', [])
  .factory('messagesFactory', messagesFactory)
  .factory('filterFactory', filterFactory);

export default messagesFactoryModule;
