
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

var User = mongoose.model('Users',userSchema);


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


exports.index = function(req, res){
  res.render('index', { title: 'Quiz Model' });
};
