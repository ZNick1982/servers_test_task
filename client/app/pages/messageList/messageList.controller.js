import addMessageDialogTemplate from './messageList.addMessage.dialog.html';
class messageListController {

  constructor(messagesFactory, authorsFactory, $log, $timeout, $modal, $scope, filterFactory) {
    "ngInject";

    this.messagesFactory = messagesFactory;
    this.authorsFactory = authorsFactory;
    this.filter = filterFactory;

    this.$log = $log;
    this.$scope = $scope;
    this.MSG_PER_PAGE = 10;
    
    this.allLoaded = false;
    this.isLoading = false;
    this.$timeout = $timeout;
    this.addMessageModal = $modal({
      title: 'Add new message',
      scope: $scope, 
      template: addMessageDialogTemplate, 
      show: false
    });

    this.maxMessageLen = 200;
    this.leftCharsCnt = this.maxMessageLen;
    this.newMessage = '';

  }

  $onInit() {
    this.allLoaded = false;
    this.messages = [];
    this.messagesFactory.clearItems();
    this.loadMore();
    
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

  filterChanged() {
    if(this.filterDelayPromise) {
      this.$timeout.cancel(this.filterDelayPromise);
    }
    this.filterDelayPromise = this.$timeout(() => {
      this.filterDelayPromise = null;
      this.messagesFactory.clearItems();
      this.messages = [];
      this.allLoaded = false;
      this.loadMore();
    }, 100);
  }

  showAddMessageDialog() {
    this.addMessageModal.$promise.then(this.addMessageModal.show);
  }

  hideAddMessageDialog() {
    this.addMessageModal.$promise.then(this.addMessageModal.hide);
  }

  calcCharCnt(isReq) {
    if(isReq) {
      this.leftCharsCnt = this.maxMessageLen;
      return;
    } 
    this.leftCharsCnt = Math.max(this.maxMessageLen - (this.newMessage?this.newMessage.length : this.maxMessageLen), 0);
  }

  addMessage() {

    this.messagesFactory.addItem(
    {
      id: 'new Id', 
      text: this.newMessage, 
      date: new Date(),
      author: {
        name: 'Leta Carson',
        id: 'a4681d40-39e7-4b38-b4e1-55bc8e8b0657'
      }
    });

    this.authorsFactory.addItem(
    {
      id: 'new Id', 
      text: this.newMessage, 
      date: new Date()
    });

    this.messagesFactory.clearItems();
    this.messages = [];
    this.allLoaded = false;
    this.loadMore();
    this.cancelAddMessage();
  }

  cancelAddMessage() {
    this.newMessage = '';
    this.hideAddMessageDialog();
  }
}

export default messageListController;
