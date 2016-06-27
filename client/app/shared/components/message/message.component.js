import template from './message.html';
import controller from './message.controller';
import './message.scss';

let messageComponent = {
  restrict: 'E',
  bindings: {
    message: '<'
  },
  template,
  controller,
  controllerAs: 'mc'
};

export default messageComponent;
