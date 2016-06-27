import messageGenerator from './messageGenerator';

describe('messageGenerator class tests', () => {

  let $timeout, makeObject;

  beforeEach(inject((_$timeout_) => {
    $timeout = _$timeout_;
    makeObject = () => {
      return new messageGenerator($timeout);
    };
  }));


  describe('Constructor', () => {
    // Constructor specs
    it('has a name property items', () => {
      let mockGenerator = makeObject();
      expect(mockGenerator).to.have.property('items');
    });

    it('has a name method fetchItems()', () => {
      let mockGenerator = makeObject();
      expect(mockGenerator).to.have.property('items');
    });
  });

  describe('Fetch data', () => {
    it('Fetch first page data without filter', ()=>{
      let mockGenerator = makeObject();
      let filter = null;
      let skip = 0;
      let count = 10;
      mockGenerator.fetchItems(filter, skip, count)
        .then((data)=>{
          expect(data.length).to.be(10);
        });
    });
  });
});
