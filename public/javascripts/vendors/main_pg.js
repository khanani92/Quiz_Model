/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 10/10/13
 * Time: 9:09 PM
 * To change this template use File | Settings | File Templates.
 */
sampleApp.controller('main_pg',function($scope,$location){
    $scope.message = "Hello AngularJS";

        $scope.go = function (path){
            $location.path(path);
        }

});