import messageGenerator from '../../shared/classes/messageGenerator';
import itemsFactory from '../../shared/classes/itemsFactory';

export default function($http, $timeout) {
  "ngInject";

  var service = new itemsFactory(new messageGenerator($timeout));
  return service;
}