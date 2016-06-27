class itemsFactory {
  constructor(itemsGenerator) {
    this.generator = itemsGenerator;
    this.items = [];

    this.setItems = (newItems) => { 
      this.items = this.items.concat(newItems); 
      return newItems;
    }
  }

  fetchItems(filter, skip, count) {
    return this.generator
      .fetchItems(filter, skip, count)
      .then(this.setItems);
  }

  addItem(item) {
    return this.generator
      .addItem(item);
  }

  getById(id){
    return this.generator
      .getById(id);
  }

  clearItems() {
    this.items = [];
  }
}

export default itemsFactory;