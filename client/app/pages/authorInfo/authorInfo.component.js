import template from './authorInfo.html';
import controller from './authorInfo.controller';
import './authorInfo.scss';

var authorInfoComponent = {
  restrict: 'E',
  bindings: {
    authorId: '<'
  },
  template,
  controller,
  controllerAs: 'ai'
};

export default authorInfoComponent;
