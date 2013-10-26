sampleApp.controller('htmlQuiz_pg',function($scope,$location){
    var id = sessionStorage.id;
    var urite_ans = 0;
    $scope.quiz_box = false;
    $scope.info_box = true;
    $scope.result_box = false;
    if(!id){
        console.log("not found"+id)
        $scope.user_in = false;
        $scope.user_out = true;
    }else{
        console.log("found"+id)

        $scope.user_in = true;
        $scope.user_out = false;
    }

    $scope.startQuiz = function(){
        $scope.quiz_box = true;
        $scope.info_box = false;


       var quiz_model = $scope.quiz_model =[
            {id:1,q:"HTML standard for?",a1:"Hyper Text Markup Language",a2:"High Text Markup Language",a3:"Hyper Text Make Language",a4:"High Text Message Language",r_a:"a1"},
            {id:2,q:"How types of Heading Tags are there in HTML ?",a1:"3",a2:"9",a3:"1",a4:"6",r_a:"a4"},
            {id:3,q:"Which type not supported by input tag ?",a1:"text",a2:"password",a3:"data",a4:"email",r_a:"a3"},
            {id:4,q:"Which type of video formats are supported by HTML5 video tag ?",a1:"mp4,ogg,flv",a2:"mp4,ogg",a3:"flv,avi,mp4",a4:"avi,ogg,pdf",r_a:"a2"}
        ];

        var next = 0;
        $scope.current_q = quiz_model[next];
       // $scope.prev_btn = true ;
        $scope.next_btn = true;
        $scope.result_btn = false;
        var user_ans = [];//User Ans will be stored here
        $scope.u_ans = '';//user ans are upated in this model var
        var ans_given = false;
        $scope.change_q = function(state){

            var next_btn=next+1;
            var prev_btn=next-1;

            switch(state)
            {
                case "next":
                    if(!$scope.u_ans){
                        $scope.err_message = "Please Select Any answer to processed  forward";

                    }else{
                    $scope.current_q = quiz_model[next_btn];
                    next = next_btn;

                    var q_id =  quiz_model[next-1].id
                    var u_ans = $scope.u_ans;
                        ans_forward(q_id,u_ans);
                        $scope.u_ans = '';

                        $scope.err_message = '';
                        ans_given = !ans_given;
                    }
                     //console.log(q_id + "------"+quiz_model[next-1].q);


                    //console.log(next);
                    break;
                case "prev":
                    $scope.current_q = quiz_model[prev_btn];
                    next = prev_btn;
                    console.log(quiz_model[prev_btn].id);
                    break;
            }//Switch
            check_status();


        }//Solving the  uder request for next/prev questions
          var check_status = function(){
             if(ans_given == true){
              if(next == 0){

                  $scope.prev_btn = true;
                  $scope.next_btn = true;
              }else if(next< (quiz_model.length-1)){

                  $scope.prev_btn = true;
                  $scope.next_btn = true;
              }else if((next+1) == quiz_model.length){

                  $scope.prev_btn = true;
                  $scope.next_btn = false;
                  $scope.result_btn = true;
                  //console.log(quiz_model.length-1)
                     next--;


              }//Showing and hiding next/prev button
             ans_given = false

             }//checking that user have choosen any answer or not
             }// Checking the position of the user for button show and hide

         $scope.generate_result = function(){

             if(!$scope.u_ans){
                 $scope.err_message = "Please Select Any answer to processed  forward";

             }else{
                 var q_id =  quiz_model[next+1].id
                 var u_ans = $scope.u_ans;
                 ans_forward(q_id,u_ans);
                 //console.log(q_id+"----------"+u_ans)

                 for(var i=0;i<quiz_model.length;i++){
                     //console.log("user_ans"+user_ans[i].q_id + "quiz_model--"+quiz_model[i].id);

                     if(quiz_model[i].id == user_ans[i].q_id){
                         //console.log("Q:"+(i+1)+" as"+user_ans[i].u_ans +"qm"+quiz_model[i].r_a);
                         if((user_ans[i].u_ans) == (quiz_model[i].r_a)){
                            urite_ans ++;
                         }//if internal
                     }//if main



                 }//for loop

                 $scope.quiz_box = false;
                 $scope.result_box = true;
                 var riteans_perc = (urite_ans/quiz_model.length)*100;
                 $scope.rite_percentage = riteans_perc;
                 console.log(riteans_perc);
             }////checking that user have choosen any answer or not

         }//generate_result();

         var ans_forward = function(id,ans){
             user_ans.push({q_id:id,u_ans:ans});
         }//This function save user's answer to array


     }//startQuiz


    $scope.go = function (path){
        $location.path(path);
    }
    $scope.message = "HTML5 Quiz";

});
