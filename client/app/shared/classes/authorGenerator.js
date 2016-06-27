import getMockData from './mockData';
import moment from 'moment';

const WAIT_TIMEOUT = 500;

class messageGenerator {

  constructor ($timeout) {
    this.__timeout__ = $timeout;
    this.items = [];
    getMockData().forEach((auth) => {
      auth.registered = moment(auth.registered).toDate(); 
      auth.messages.forEach((msg) => { 
        msg.date = moment(msg.date).toDate();
      });
      this.items.push(auth);
    });
  }

  fetchItems(filter, skip, count) {
    return new Error('not implemented');
  }

  addItem(newItem) {
    this.items[0].messages.push(newItem);
  }

  getById(id) {
      return this.__timeout__(() => {
        return this.items.find((el) => {
        return el.id === id
      });
    }, WAIT_TIMEOUT);   
  }
}

export default messageGenerator;