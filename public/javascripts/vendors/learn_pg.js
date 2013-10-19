sampleApp.controller('learn_pg',function($scope,$location){
    var id = sessionStorage.id;

    if(!id){
        console.log("not found"+id)
        $scope.user_in = false;
        $scope.user_out = true;
    }else{
        console.log("found"+id)

        $scope.user_in = true;
        $scope.user_out = false;
    }
    $scope.message = "Learning Platform";

    $scope.go = function (path){
        $location.path(path);
    }

});
