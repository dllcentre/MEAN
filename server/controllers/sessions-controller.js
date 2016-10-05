var Seesion = require('../models/sessions');

module.exports.createSession = function (req,res) {

	var session=Seesion(req.body);

	//	console.log(req.body);

	session.save (function(err,result){
         res.json(result);
	});
}

module.exports.list = function(req,res) {
Seesion.find({}, function(err, results) {
	res.json(results);

});

}	
