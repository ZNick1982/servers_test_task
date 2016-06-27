import ItemsFactory from '../../shared/classes/itemsFactory';
import AuthorGenerator from '../../shared/classes/authorGenerator';

module.exports = function($http, $timeout) {
  "ngInject";

  var service = new ItemsFactory(new AuthorGenerator($timeout));

  return service;
}