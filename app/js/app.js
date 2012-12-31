'use strict';


// Declare app level module which depends on filters, and services
angular.module('chessUI', ['chessUI.filters', 'chessUI.services', 'chessUI.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/game.html', controller: ChessCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
