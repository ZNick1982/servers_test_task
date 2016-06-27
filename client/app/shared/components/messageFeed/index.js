import angular from 'angular';
import messageFeedComponent from './messageFeed.component';
import servicesModule from '../../../services/';

let messageFeedModule = angular.module('messageFeed', [
  servicesModule.name
])
.component('messageFeed', messageFeedComponent);

export default messageFeedModule;
