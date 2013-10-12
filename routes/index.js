
/*
 * GET home page.
 */
exports.regUser = function(req,res){
  var u_name = req.body.u_name;
  var email = req.body.email;
  var pass = req.body.pass;
    console.log(u_name);
    console.log(email);
    console.log(pass);
  res.send("Data Received")
};
exports.loginStudent = function(req,res){

    var email = req.body.email;
    var pass = req.body.pass;
    console.log(email);
    console.log(pass);
    res.send("Data Received of login")
};


exports.index = function(req, res){
  res.render('index', { title: 'Quiz Model' });
};
