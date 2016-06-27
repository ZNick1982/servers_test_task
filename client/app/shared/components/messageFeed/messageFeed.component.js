import template from './messageFeed.html';
import controller from './messageFeed.controller';
import './messageFeed.scss';

var messageFeedComponent = {
  restrict: 'E',
  bindings: {
    messages: '<'
  },
  template,
  controller,
  controllerAs: 'mf'
};

export default messageFeedComponent;
