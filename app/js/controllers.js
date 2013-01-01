'use strict';

function ChessCtrl($scope) {

    $scope.chess = new Chess();
    $scope.local_history = []
    $scope.chess = new Chess();
    $scope.reset = function(){
        if($scope.pgn){
            $scope.status = "resetted";
            $scope.chess.load_pgn($scope.pgn);
            $scope.boardText = '\n' + $scope.chess.ascii();
        }
        $scope.local_history = [];
    }
    $scope.load = function(){
        $scope.pgn = $scope.newPGN
        $scope.status = $scope.chess.load_pgn($scope.pgn);
        $scope.boardText = '\n' +$scope.chess.ascii();
    }
    $scope.end = function(){
        $scope.chess.load_pgn($scope.pgn);
        $scope.local_history = [];
        $scope.boardText = '\n' +$scope.chess.ascii();
    }
    $scope.restart = function(){
        if($scope.chess.history()){
            $scope.chess.load_pgn($scope.pgn);
            $scope.local_history = $scope.chess.history().reverse();
            $scope.chess.reset();
            $scope.boardText = '\n' +$scope.chess.ascii();
        }
    }
    $scope.undo = function(){
        if($scope.chess.history()){
            $scope.local_history.push($scope.chess.history()[$scope.chess.history().length-1])
            $scope.chess.undo();
            $scope.boardText = '\n' +$scope.chess.ascii();
        }
    }
    $scope.advance = function(){
        if($scope.local_history){
            $scope.chess.move($scope.local_history.pop())
            $scope.boardText = '\n' +$scope.chess.ascii();
        }
    }
}
