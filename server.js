var express			   = require('express'),
	app				   = express(),
	bodyParser		   = require('body-parser'),
	mongoose           = require('mongoose'),
	SessionsController = require('./server/controllers/sessions-controller');


mongoose.connect('mongodb://localhost:27017/dll-db');

app.use(bodyParser());


app.get('/', function(req,res) {

	res.sendFile(__dirname+'/client/views/index.html');

});


app.use('/js',express.static(__dirname+'/client/js'));

app.get('/api/sessions',SessionsController.list);

app.post('/api/sessions',SessionsController.createSession);

app.listen(3000, function(){

	console.log('I\'m listening ...');
});

 