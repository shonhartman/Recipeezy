import angular from 'angular';

import config from './config';
import registerController from './controllers/register';
import service from './service';

let user = angular.module('app.user', []);

user.config(config);

user.controller('RegisterController', registerController);
user.service('UserService', service);

export default user
