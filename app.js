var INFO = function(){ console.log.apply(console,arguments); };	//here so doesnt show in search all
var ERROR = INFO;
ERROR.err = INFO;	//until overwritten

//================ 각종 설정 로드
let appConfig = require('./app.config.js');	//appConfig._upload.path

process.on('uncaughtException', function(err) {
	if(err.code == 'EADDRINUSE') {
		INFO('The server is already running. Stop the running server by closing its Command Prompt then try again.');
	} else
		ERROR.err(1,err);
	
	setTimeout(function() {
		INFO('Exiting.');
		process.exit(1);
	},100);
});

const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');	//session

const bodyParser = require('body-parser');
const compress = require('compression');
//const shell = require('shelljs');

INFO("Initializing server...");

//================= location setting
//client root
var client_route = path.resolve(__dirname, './src/frontend');		//resource
app.use(express.static(client_route));		

//server root
var app_route = path.resolve(__dirname, './src/backend');	
app.engine('.html', require('ejs').__express);				//use .ejs to .html
app.set('views', path.resolve(app_route,'views'));			//location of ejs files
app.set('view engine', 'html');								


// setting parameter parser
app.use(bodyParser({limit:'50mb'}));		//needed otherwise cant parse init info (deprecated)
app.use(bodyParser.json({limit:'50mb'}));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));

//================== Session
app.use(session({
    secret: appConfig._sessionKey,
    resave: false,
    saveUninitialized: true,
	name: 'sessionKey'
}));

//================== copress header
app.use(compress({
	filter: function (req, res) {
		return /json|text|javascript|dart|image\/svg\+xml|application\/x-font-ttf|application\/vnd\.ms-opentype|application\/vnd\.ms-fontobject/.test(res.getHeader('Content-Type'));
	}
}));


//================ file upload folder link to /image 
app.use('/image', express.static(appConfig._upload.path));		//client root위치



//=============== busy
//const busy = require('busy'); 
//var busyCheck = busy();
//app.use(function(req, res, next) { 
//	if(busyCheck.blocked) 
//		res.status(503).send("I'm busy right now, sorry."); 
//	else
//		next();
//});

//=============== redirect
app.use(function(req,res,next){	//www. redirect
	var host = req.get('host');
	if(/^www\./.test(host)){
	    host = host.substring(4, host.length);	//remove www.
	    res.writeHead(301, {
				Location:req.protocol + '://' + host + req.originalUrl,
	        Expires: new Date().toGMTString()
			});
	    res.end();
	} else {
	    next();
	}
});



//================ 404 (doesn't need in VUE Client )
app.use(function(err, req, res, next){
//	res.status(500).send('Something broke!');	
	if (err.status === 404){ 
		res.statusCode = 404; 
		res.send('Cant find that file, sorry!');
//		res.render('common/404');
	} 
	else next(err);
});
	


//================ web server start.
var serv = require('http').Server(app);
serv.listen(appConfig._port, (err) => {
	if (err) {
		return console.log(err)
	}

	return console.log('server is listening on http://localhost:%s/', appConfig._port);
});


//==================== socketIO  =================
var socketIo = require('socket.io')(serv,{});

//==================== HETA MVC  =================
require('hetamvc').init({
	scanPath:app_route,	//path
	route:app,		//express route
	socket:socketIo,	//express http
	uploadPath:appConfig._upload.path,
	sequelize:require('./sqlite.config.js'),
	//mongodb:require('./mongodb.config.js'),
	locale:require('./locale.config.js'),		//locale
	email:require('./email.config.js'),			//Email
	logger:require('./logger.config.js'),		//logger
	constants:appConfig,
	forceAwait: true
 },{
	babel_plugin: ["module-resolver",{"alias": {"@": "./"}}]
});


// [ History for VUE ]
//const history = require('connect-history-api-fallback');
//app.use(history({index:'/index.html'}));
//app.use(express.static(client_route));

//global.serverUrl=  'http://localhost:5000/';


