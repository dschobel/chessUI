'use strict';

function ChessCtrl($scope) {

    $scope.chess = new Chess();
    $scope.history = []
    $scope.chess = new Chess();
    $scope.reset = function(){
        if($scope.pgn){
            $scope.status = "resetted";
            $scope.chess.load_pgn($scope.pgn);
            $scope.boardText = '\n' + $scope.chess.ascii();
        }
        $scope.history = [];
    }
    $scope.load = function(){
        $scope.pgn = $scope.newPGN
        $scope.status = $scope.chess.load_pgn($scope.pgn);
        $scope.boardText = '\n' +$scope.chess.ascii();
    }
    $scope.undo = function(){
        if($scope.chess.history()){
            $scope.history.push($scope.chess.history()[$scope.chess.history().length-1])
            $scope.chess.undo();
            $scope.boardText = '\n' +$scope.chess.ascii();
        }
    }
    $scope.advance = function(){
        if($scope.history){
            $scope.chess.move($scope.history.pop())
            $scope.boardText = '\n' +$scope.chess.ascii();
        }
    }
}
