/**
	Global Constants 
	모든 Class에서 this._root이런식으로 사용가능
*/ 
const path = require('path');
let ip = process.env.IP;
if (!ip) {
	const { networkInterfaces } = require('os');
	const nets = networkInterfaces();
	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			// Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
			if (net.family === 'IPv4' && !net.internal) {
				ip = net.address;
			}
		}
	}
}
const port = process.env.PORT ?? 5000;

module.exports = {
	_sessionKey : "mkv#!&*!#EDNambcsv1#!@!An$()_*#@",
	_email:{
		serverUrl: `http://${ip}:${port}`
	},
	_ip: ip,
	_port: port,
	_root: __dirname,
	_upload:{
		path: path.resolve(__dirname, './upload')
	}

};
