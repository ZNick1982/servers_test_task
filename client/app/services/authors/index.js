import angular from 'angular';
import authorsFactory from './authors.factory';

let authorsFactoryModule = angular.module('app.services.authorsFactory', [])
.factory('authorsFactory', authorsFactory);

export default authorsFactoryModule;
