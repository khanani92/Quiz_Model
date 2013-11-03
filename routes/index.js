
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quiz_model');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
   console.log("db connected");
});

var userSchema = mongoose.Schema({
    u_name : String,
    email: String,
    pass: String
})
var QuestionSchema = mongoose.Schema({
    question : String,
    a_1: String,
    a_2: String,
    a_3: String,
    a_4: String,
    r_a: String
})

var User = mongoose.model('Users',userSchema);
var Question = mongoose.model('Questions',QuestionSchema);


exports.regUser = function(req,res){
  var u_name = req.body.u_name;
  var email = req.body.email;
  var pass = req.body.pass;
    console.log(u_name);
    console.log(email);
    console.log(pass);



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
        r_a: data.r_a
    });

    question_info.save(function(err,data){
        if(err){
            res.send("Upload Fail"+err);
        }else{
            res.send("Your Question have been saved"+data);
        }
    });//>save
    res.send("Data Received of addQuestion");
}


exports.getQuestion = function(req,res){
    Question.find(function(err,data){
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

    })//FindOne funtionx;
};

exports.index = function(req, res){
  res.render('index', { title: 'Quiz Model' });
};
