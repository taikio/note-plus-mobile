/**
 * Created by welker on 05/07/16.
 */
(function(){
    'use strict';

    angular
        .module('Note')
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
            $stateProvider


                .state('login',{
                    url: '/',
                    templateUrl: 'login.html',
                    controller: 'loginCtrl'
                })
                .state('category',{
                    url: '/category',
                    templateUrl: 'category.html',
                    controller: 'categoryCtrl'
                })
                .state('list',{
                    url: '/list',
                    templateUrl: 'noteList.html',
                    controller: 'noteListCtrl'
                })
                .state('new',{
                    url: '/new',
                    templateUrl: 'newNote.html',
                    controller: 'newNoteCtrl'
                })
                .state('note',{
                    url: '/note',
                    templateUrl: 'note.html',
                    controller: 'noteCtrl'
                })
                .state('cadastrar',{
                    url: '/cadastrar',
                    templateUrl: 'cadastrar.html',
                    controller: 'cadastrarCtrl'
                })
                .state('edit',{
                    url: '/edit',
                    templateUrl: 'editar.html',
                    controller: 'editarCtrl'
                })
                .state('account',{
                    url: '/account',
                    templateUrl: 'account.html',
                    controller: 'accountCtrl'
                });
                
                $urlRouterProvider.otherwise('/');
        }]);
})();
