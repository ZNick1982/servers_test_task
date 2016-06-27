
import messageModule from './';
import messageController from './message.controller';
import messageComponent from './message.component';
import messageTemplate from './message.html';

describe('message', () => {
  let $rootScope, makeController;

  beforeEach(window.module(messageModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new messageController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  
  describe('Component', () => {
      // component/directive specs
      let component = messageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(messageTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(messageController);
      });
  });
});
