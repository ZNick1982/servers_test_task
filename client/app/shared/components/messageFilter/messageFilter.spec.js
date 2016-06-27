
import messageFilterModule from './';
import messageFilterController from './messageFilter.controller';
import messageFilterComponent from './messageFilter.component';
import messageFilterTemplate from './messageFilter.html';

describe('messageFilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(messageFilterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new messageFilterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = messageFilterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(messageFilterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(messageFilterController);
      });
  });
});
