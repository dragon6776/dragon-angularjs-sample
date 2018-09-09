'use strict';

angular.module('DragonApp', [
    'ui.router',
    'DragonApp.dashboard'
])
.config(function($urlRouterProvider){
    $urlRouterProvider.otherwise('/dashboard');
});