import messageFeedModule from './'
import messageFeedController from './messageFeed.controller';
import messageFeedComponent from './messageFeed.component';
import messageFeedTemplate from './messageFeed.html';

describe('messageFeed', () => {
  let $rootScope, makeController;

  beforeEach(window.module(messageFeedModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new messageFeedController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = messageFeedComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(messageFeedTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(messageFeedController);
      });
  });
});
