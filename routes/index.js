
var mongoose = require('mongoose');
mongoose.connect('mongodb://quiz_model:a1234567@ds053798.mongolab.com:53798/quiz_model');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
   console.log("db connected");
});

var userSchema = mongoose.Schema({
    u_name : String,
    email: String,
    pass: String
});
var QuestionSchema = mongoose.Schema({
    question : String,
    a_1: String,
    a_2: String,
    a_3: String,
    a_4: String,
    r_a: String,
    q_name: String
});

var resultSchema = mongoose.Schema({
    u_id : String,
    quiz_name: String,
    userResult: String,
    date:String
});

var User = mongoose.model('Users',userSchema);
var Question = mongoose.model('Questions',QuestionSchema);
var Result = mongoose.model('Results',resultSchema);


exports.regUser = function(req,res){
  var u_name = req.body.u_name;
  var email = req.body.email;
  var pass = req.body.pass;
    //console.log(u_name);
    //console.log(email);
    //console.log(pass);



    var user_info = new User({
        u_name :u_name,
        email:email,
        pass:pass
    });

    user_info.save(function(err,data){
        if(err){
            res.send("Registration Fail"+err);
        }else{
            res.send("Registrated"+data);
        }
    });//>save
  res.send("Data Saved")
};


exports.loginStudent = function(req,res){

    var email = req.body.email;
    var pass = req.body.pass;
    console.log(email);
    console.log(pass);

    User.findOne({ email: email, pass: pass },function(err,data){
        if (err) {// ...
            console.log('An error has occurred');

            res.send('An error has occurred'+err);

        }
        else {
            if(!data){
                console.log('record not found');

                res.send("error");

            }else{
                console.log("data == "+data);
                res.send(data);
            }//else  for data forward

        }//Main else

    })//FindOne funtionx

    //res.send("Data Received of login"+user_data);
};


exports.addQuestion = function(req,res){

    var data = req.body.question;
    var question_info = new Question({
        question : data.q,
        a_1: data.a1,
        a_2: data.a2,
        a_3: data.a3,
        a_4: data.a4,
        r_a: data.r_a,
        q_name:data.q_name
    });

    question_info.save(function(err,data){
        if(err){
            res.send("Upload Fail"+err);
        }else{
            res.send("Your Question have been saved"+data);
        }
    });//>save
    console.log(question_info)
    res.send("Data Received of addQuestion");
}


exports.getQuestion = function(req,res){
    var q_name = req.body.q_name;
    q_name = q_name.toLowerCase();
    //console.log(q_name);
    Question.find({ q_name: q_name },function(err,data){
        if (err) {// ...
            console.log('An error has occurred');

            res.send('An error has occurred'+err);

        }
        else {
            if(!data){
                console.log('record not found');

                res.send("error");

            }else{
           //     console.log("data == "+data);
                res.send(data);
            }//else  for data forward

        }//Main else

    })//FindOne funtionx;
};

exports.saveResult = function(req,res){
  var user_result = req.body.riteans_perc;
  var u_id = req.body.u_id;
  var quiz_name = req.body.quiz_name;
    console.log(u_id+"=="+user_result);
    var myDate=new Date();

    //make a new collection results were all result will be saves {user_id,quiz_name,Result,date}, When result will be shown
    //through id we will get all the info of user from users collection.
    var result_info = new Result({
        u_id : u_id,
        quiz_name: quiz_name,
        userResult: user_result,
        date:myDate
    });

    result_info.save(function(err,data){
        if(err){
            res.send("Upload Fail"+err);
        }else{
            res.send("Your Result have been saved"+data);
        }
    });//>save
    res.send("Result Received");
};

exports.getUserInfo = function(req,res){
    var u_id = req.body.u_id;
    User.findOne({ _id: u_id },function(err,data){
        if (err) {// ...
            console.log('An error has occurred');

            res.send('An error has occurred'+err);

        }
        else {
            if(!data){
                console.log('record not found');

                res.send("error");

            }else{
                console.log("data == "+data);
                res.send(data);
            }//else  for data forward

        }//Main else

    })//FindOne funtionx

}//getUserInfo()

exports.showResult = function(req, res){

    var u_id = req.body.u_id;
    Result.find({ u_id: u_id },function(err,data){
        if (err) {// ...
            console.log('An error has occurred');

            res.send('An error has occurred'+err);

        }
        else {
            if(!data){
                console.log('record not found');

                res.send("error");

            }else{
                //     console.log("data == "+data);
                res.send(data);
            }//else  for data forward

        }//Main else

    })//FindOne funtionx;
};


exports.index = function(req, res){
  res.render('index', { title: 'Quiz Model' });
};
