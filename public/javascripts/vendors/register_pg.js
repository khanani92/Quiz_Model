sampleApp.controller('register',function($scope,$location){
    $scope.message = "Register";

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
