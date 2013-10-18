sampleApp.controller('main_pg',function($scope,$location){
    $scope.message = "Hello AngularJS";

        $scope.go = function (path){
            $location.path(path);
        }

});