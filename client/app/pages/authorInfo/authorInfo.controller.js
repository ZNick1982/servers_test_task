class authorInfoController {

  constructor(messagesFactory, authorsFactory, $log, $timeout, $modal, $scope) {
    "ngInject";

    this.messagesFactory = messagesFactory;
    this.authorsFactory = authorsFactory;

    this.filter = {
      dateFrom: '',
      dateTo: '',
      textToContain: '',
      author: ''
    };

    this.$log = $log;
    this.$scope = $scope;
    this.MSG_PER_PAGE = 10;
    this.messages = [];

    this.allLoaded = false;
    this.isLoading = false;
    this.$timeout = $timeout;

  }

  $onInit() {
    this.messagesFactory.clearItems();
    this.loadProfile()
  }

  loadProfile() {
    this.authorsFactory.getById(this.authorId.authorId)
      .then((authorData) => {
        this.authorData = authorData;
        this.filter.author = this.authorData.name;
        this.loadMore();
      });
    
  }

  loadMore() {
    let skip = this.messages.length;
    if(!this.isLoading && !this.allLoaded) {
      this.isLoading = true;
      this.messagesFactory
        .fetchItems(this.filter, skip, this.MSG_PER_PAGE)
        .then((newItems) => {
          this.isLoading = false;
          this.messages = this.messagesFactory.items;
          if(newItems.length < this.MSG_PER_PAGE) {
            this.allLoaded = true;
          }
        });
    }
  }
}

export default authorInfoController;
