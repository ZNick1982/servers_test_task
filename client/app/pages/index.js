import angular from 'angular';
import messageList from './messageList/';
import authorInfo from './authorInfo/';

let componentModule = angular.module('app.pages', [
  messageList.name,
  authorInfo.name
]);

export default componentModule;
