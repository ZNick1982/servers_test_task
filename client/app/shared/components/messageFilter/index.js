import angular from 'angular';
import messageFilterComponent from './messageFilter.component';

let messageFilterModule = angular.module('messageFilter', [])
.component('messageFilter', messageFilterComponent);

export default messageFilterModule;
