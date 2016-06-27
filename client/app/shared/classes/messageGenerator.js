import getMockData from './mockData';
import moment from 'moment';

const WAIT_TIMEOUT = 500;

class messageGenerator {

  constructor ($timeout) {
    this.__timeout__ = $timeout;
    this.items = [];
    let that = this;
    getMockData().forEach((auth) => {
      auth.messages.forEach((msg) => { 

        let date = moment(msg.date).toDate();
        that.items.push({
          ...msg,
          date: date,
          author: {
            name: auth.name,
            id: auth.id
          }
        });
      });
    });

    this.__getData__ = (filter, skip, count) => {
      return $timeout(() => {
        
        var filteredData = that.items.filter((el) => {
          var isIncluded = true;
          for(let prop in filter) {
            switch (prop) {
              case 'dateFrom':
                if(filter[prop] instanceof Date) {
                  isIncluded = isIncluded && (filter[prop] <= el.date);
                }
              break;
              case 'dateTo': 
                if(filter[prop] instanceof Date) {
                  isIncluded = isIncluded && (filter[prop] >= el.date);
                }
              break;
              case 'textToContain': 
                if(filter[prop] && filter[prop] != "") {
                  isIncluded = isIncluded && (el.text.indexOf(filter[prop]) > -1);
                }
              break;
              case 'author': 
                if(filter[prop] && filter[prop] != "") {
                  isIncluded = isIncluded && (el.author.name.indexOf(filter[prop]) > -1);
                }
              break;
            }
          }
          return isIncluded;
        });
        var res = [];
        try {
          res = filteredData.slice(skip, skip + count);
        } catch (ex) {
          res = [];
        }
        return res;
      }, WAIT_TIMEOUT);
    }
  }

  fetchItems(filter, skip, count) {
// TODO: Add filter usage for getting data
    return this.__getData__(filter, skip, count);
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  getById(id) {
    return this.items.find((el) => {
      return el.id === id
    });   
  }
}

export default messageGenerator;