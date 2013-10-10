sampleApp.controller('sign_in',function($scope,$location){
    $scope.message = "Sign In";

    $scope.go = function (path){
        $location.path(path);
    }

});/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 10/10/13
 * Time: 11:08 PM
 * To change this template use File | Settings | File Templates.
 */
