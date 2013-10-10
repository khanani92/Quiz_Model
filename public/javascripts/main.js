/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 9/22/13
 * Time: 12:20 PM
 * To change this template use File | Settings | File Templates.
 */


var sampleApp = angular.module("myApp",[])
    .config(['$routeProvider',function($routeProvider){

         $routeProvider
             .when('/',{
               templateUrl:'views/main.html',
               controller:'main_pg'
             })
             .when('/signin',{
                 templateUrl:'views/signin.html',
                 controller:'sign_in'
             })

             .when('/register',{
                 templateUrl:'views/register.html',
                 controller:'register'
             })

             .when('/error',{
                 templateUrl:'views/error.html'
              })
             .otherwise({
                 redirectTo:"/"
             })

       }]);//Config

sampleApp.controller('navController',function($scope,$location){

    $scope.go = function (path){
        $location.path(path);
    }

});


/*
function myController($scope ){
    $scope.message="Hello Angular";
};
 */
