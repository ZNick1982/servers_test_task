import template from './messageFilter.html';
import controller from './messageFilter.controller';
import './messageFilter.scss';

let messageFilterComponent = {
  restrict: 'E',
  bindings: {
    filter: '=',
    onUpdate: '&?'
  },
  template,
  controller,
  controllerAs: 'f'
};

export default messageFilterComponent;
