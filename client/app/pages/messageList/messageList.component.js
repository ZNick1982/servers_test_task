import template from './messageList.html';
import controller from './messageList.controller';
import './messageList.scss';

var messageListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ml'
};

export default messageListComponent;
