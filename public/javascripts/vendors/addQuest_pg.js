sampleApp.controller('addQuest_pg',function($scope,$location,$http){
    /*if(!id){
        console.log("not found"+id)
        $scope.user_in = false;
        $scope.user_out = true;
    }else{
        console.log("found"+id)

        $scope.user_in = true;
        $scope.user_out = false;
    } */
    $scope.question = {q:null,a1:null,a2:null,a3:null,a4:null,r_a:null}
    /*$scope.answer_1 = '';
    $scope.answer_2 = '';
    $scope.answer_3 = '';
    $scope.answer_4 = '';*/
    $scope.checkSendData = function(){
       if($scope.question.r_a != null){
           var question = $scope.question;
           $scope.error = "";
           //console.log(question);
           $http({
               url:"/addQuestion",
               data:{question:question},
               method:"POST"

           }).success(function(res,textStatus){
                   console.log(res);
                   setTimeout(
                       function()
                       {
                           location.reload();
                       }, 0001);
               }).error(function(){ alert("Error");  })//http request to send data to server to save in db




       }else{
           $scope.error = "Please Select the correct answer."
       }
    }

    $scope.title = "Welcome Admin!!! You can add Question Here. ";

})//addQuest_pg()

