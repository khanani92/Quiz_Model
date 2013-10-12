sampleApp.controller('register',function($scope,$location,$http,userRegister){
    $scope.message = "Register";
     //  $scope.register = userRegister.UserRegister();
   // var u_name = $scope.register.u_name;
    //console.log($scope.register.u_name);

     var register_data = {u_name:null,email:null,pass:null,re_pass:null};
    $scope.register.UserRegister= function(){

          //Checking Fields
           var u_name =  $scope.register.u_name;
           var email =  $scope.register.email;
           var pass =  $scope.register.pass;
           var re_pass =  $scope.register.re_pass;
           if(!u_name){
               $scope.register.error = "Username is less than 5 character";
           }else if(!email){
               $scope.register.error = "Email is incorrect ";
           }else if(!pass){
               $scope.register.error = "Password is less than 5 character ";
           }else if((!re_pass) || (pass != re_pass)){
            $scope.register.error = "Both Password are not same or less than 5 character ";
           }else{$scope.register.error = "";


        //sending data through ajax

        $http({
            url:"/regStudent",
            data:{u_name:u_name,pass:pass,email:email},
            method:"POST"

        }).success(function(res){
                console.log("res:"+res);

                $location.path('/signin')
                //console.log("registered")

            }).error(function(){ alert("Error")   ; });

           }//else for Field checking and sending data
    }//UserRegister

    $scope.$watch('register.u_name + register.email+ register.pass + register.re_pass',getData)
    $scope.go = function (path){
        $location.path(path);
    }

});/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 10/10/13
 * Time: 11:34 PM
 * To change this template use File | Settings | File Templates.
 */
