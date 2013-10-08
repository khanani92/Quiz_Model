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
               controller:'candidateController'
             })


             .when('/error',{
                 templateUrl:'views/error.html'
              })
             .otherwise({
                 redirectTo:"/"
             })

       }]);//Config



/*
function myController($scope ){
    $scope.message="Hello Angular";
};
 */
