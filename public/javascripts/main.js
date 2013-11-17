
var sampleApp = angular.module("myApp",['ui.bootstrap'])
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
             .when('/htmlQuiz_pg:q_id',{
                 templateUrl:'views/htmlQuiz_pg.html',
                 controller:'htmlQuiz_pg'
             })
             .when('/addQuest_pg',{
                 templateUrl:'views/addQuest_pg.html',
                 controller:'addQuest_pg'
             })
             .when('/about_pg',{
                 templateUrl:'views/about_pg.html',
                 controller:'about_pg'
             })
             .when('/shareResult_pg',{
                 templateUrl:'views/shareResult_pg.html',
                 controller:'shareResult_pg'
             })


             .when('/error',{
                 templateUrl:'views/error.html'
              })
             .otherwise({
                 redirectTo:"/"
             })

       }]);//Config

sampleApp.controller('navController',function($scope,$location,$http){
    var id = sessionStorage.id;

    if(!id){
       console.log("not found"+id)
       $scope.inBtn = true;
        $scope.outBtn = false;
        $scope.message = "";
    }else{
        console.log("found"+id)
        $scope.inBtn = false;
        $scope.outBtn = true;
        $http({
            url:"/getUserInfo",
            data:{u_id:id},
            method:"POST"
        }).success(function(res,textStatus){
                $scope.message = res.u_name;

            }).error(
            function(){ console.log("Error");}
        )//Error
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
