sampleApp.controller('signout',function($scope,$location){
    sessionStorage.clear();
    window.location = 'http://localhost:3000/'


    $scope.go = function (path){
        $location.path(path);
    }

});
