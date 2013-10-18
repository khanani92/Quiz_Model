
sampleApp.factory('userRegister',function($http,$location){
    var register = {};

    register.UserRegister= function(){
                 var u_name,email,pass,re_pass;
        var register_data = {u_name:null,email:null,pass:null,re_pass:null};

        //Checking Fields
            getData = function(){
                console.log("nameDisplay")
                 u_name =  register_data.u_name;
                 email =  register_data.email;
                 pass =  register_data.pass;
                 re_pass =  register_data.re_pass;
               // console.log(u_name+email+pass+re_pass);
               return u_name,email,pass,re_pass ;
                }//getData()

        register_data.checkSendData = function(){
                if(!u_name){
                    register_data.error = "Username is less than 5 character";
                }else if(!email){
                    register_data.error = "Email is incorrect ";
                }else if(!pass){
                    register_data.error = "Password is less than 5 character ";
                }else if((!re_pass) || (pass != re_pass)){
                    register_data.error = "Both Password are not same or less than 5 character ";
                }else{register_data.error = "";
                    $http({
                    url:"/regUser",
                    data:{u_name:u_name,pass:pass,email:email},
                    method:"POST"

                }).success(function(res){
                        console.log("res:"+res);
                         register_data.message = "Congratulation!! You are Successfully Registered  "

                       $location.path('/signin');
                        //console.log("registered")

                    }).error(function(){ alert("Error")   ; });}
            }//checkSendData

        return register_data;
    }//UserRegister
          return register;

});//userRegister Factory



sampleApp.factory('userLogin',function($http,$location){
    var Login = {};

    Login.UserLogin= function(){
        var u_name,email,pass,re_pass;
        var login_data = {email:null,pass:null};

        //Checking Fields
        getData = function(){
            console.log("nameDisplay")

            email =  login_data.email;
            pass =  login_data.pass;

            // console.log(u_name+email+pass+re_pass);
            return email,pass;
        }//getData()
        login_data.checkSendData = function(){
             if(!email){
                login_data.error = "Email is incorrect ";
            }else if(!pass){
                 login_data.error = "Password is less than 5 character ";
            }else {login_data.error = "";
                $http({
                    url:"/loginStudent",
                    data:{email:email,pass:pass},
                    method:"POST"

                }).success(function(res,textStatus){
                        console.log("res:"+res.u_name+res.email);
                        if(res != 'error'){
                            var u_id =  res._id;

                            sessionStorage.setItem('id',u_id);
                            window.location = 'http://localhost:3000/'
                          //location.reload('#/');

                            //console.log(sessionStorage.id);

                        }else{
                            login_data.error= "Your Email or Password is wrong"
                            console.log("record not found")
                        }
                        //alert(textStatus);// succes
                       /* alert(jqXHR.status);// 200
                        alert(jqXHR.statusText);// ok
                        alert(data);
                         */
                        //$location.path('/')
                        //console.log("registered")

                    }).error(function(){ alert("Error")   ; });}
        }//checkSendData



        return login_data;
    }//UserLogin
    return Login;

});//userLogin Factory
