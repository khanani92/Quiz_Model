sampleApp.controller('sign_in',function($scope,$location,userLogin,$http){
    $scope.message = "Sign In";
    $scope.login = userLogin.UserLogin();
    /*
    var login_data = {email:null,pass:null};
    $scope.login = {};
    $scope.login.userLogin= function(){

        //Checking Fields
        var email =  $scope.login.email;
        var pass =  $scope.login.pass;

        if(!email){
            $scope.login.error = "Email is incorrect ";
        }else if(!pass){
            $scope.login.error = "Password is less than 5 character ";
        }else{$scope.login.error = "";


            //sending data through ajax

            $http({
                url:"/loginStudent",
                data:{email:email,pass:pass},
                method:"POST"

            }).success(function(res){
                    console.log("res:"+res);

                    $location.path('/signin')
                    //console.log("registered")

                }).error(function(){ alert("Error")   ; });

        }//else for Field checking and sending data
    }//UserLogin
      */
    $scope.$watch('login.email+ login.pass',getData)
    $scope.go = function (path){
        $location.path(path);
    }

});
