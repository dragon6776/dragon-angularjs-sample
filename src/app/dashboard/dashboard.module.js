(function(){
    'use strict';
    angular.module('DragonApp.dashboard', [])
        .config(function(){
            $stateProvider
                .state('dashboard', {
                    url: 'dashboard',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'Dashboard',
                });
        });
});