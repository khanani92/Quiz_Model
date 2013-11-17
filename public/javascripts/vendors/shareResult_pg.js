sampleApp.controller('shareResult_pg',function($scope,$location,$http){
    var id = sessionStorage.id;

    if(!id){
        console.log("not found"+id)
        $scope.msg = "Please Sign In "
    }else{
        console.log("found"+id)

        $http({
            url:"/showResult",
            data:{u_id:id},
            method:"POST"
        }).success(function(res,textStatus){
                $scope.resultData = res;
                console.log(res);
            }).error(
            function(){ alert("Error");}
        )//Error
    }


    $scope.message = "Share With Other";
});