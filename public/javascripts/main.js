
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
             .when('/signout',{
                 templateUrl:'views/signout.html',
                 controller:'signout'
             })
             .when('/learn_pg',{
                 templateUrl:'views/learn_pg.html',
                 controller:'learn_pg'
             })
             .when('/takeQuiz_pg',{
                 templateUrl:'views/quizmain_pg.html',
                 controller:'quizmain_pg'
             })
             .when('/htmlQuiz_pg',{
                 templateUrl:'views/htmlQuiz_pg.html',
                 controller:'htmlQuiz_pg'
             })


             .when('/error',{
                 templateUrl:'views/error.html'
              })
             .otherwise({
                 redirectTo:"/"
             })

       }]);//Config

sampleApp.controller('navController',function($scope,$location){
    var id = sessionStorage.id;

    if(!id){
       console.log("not found"+id)
       $scope.inBtn = true;
        $scope.outBtn = false;
    }else{
        console.log("found"+id)
        $scope.inBtn = false;
        $scope.outBtn = true;
    }

    $scope.go = function (path){
        $location.path(path);
    }

});


/*
function myController($scope ){
    $scope.message="Hello Angular";
};
 */
