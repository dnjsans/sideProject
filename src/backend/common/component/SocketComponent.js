/**
 * Available Annotations : Inject, Socket, Scheduler, FilterMapping
 */
/** @Component */
export class SocketComponent{
	constructor(){
		
		/** @Websocket () */
		this.socketServer;
		
		/** @   Websocket('nsp1') */
		//this.sockets
		/** @   Socket('message01', 'nsp1') */
		
		
	}

	
	// Setting user Id using socket
	/** @Socket ('setUserId') */
	setUserId(data,socket){
		socket.userId = data.userId;
		console.log('socket.userId :' + socket.userId);
	}
	
	
	
	
	/**
	 * Update FleetStatus to connected users
	 * socket.on('getAllFleetStatus',function(data){
			//draw fleet status 
		});
		socket.emit('getAllFleetStatus',{});
					
	 */
	// @Socket('getAllFleetStatus')
//	getAllFleetStatus(data,socket){
//
//		let resultList = this.FSService.getAllFleetStatus();
//		socket.emit('getAllFleetStatus',resultList);
//	}
	
	
	
	/**
	 * Sending New Alarms to connected users
	 * 강제 호출을 없엤음..
	 */
	// @Socket('getNewAlarm')
//	getNewAlarm(data,socket){
//		let resultList = this.NService.getNewAlarm({userId: data.userId});			//load new Notice before a day ago 
//		socket.emit('getNewAlarm',resultList);
//	}

	
	/**
	 * keep session alive Using batch socket
	 * every 10min
	 * 
		socket.on('keepSessionAlive',function(data){
			console.log(data);
		}); 
	 */
// @Scheduler ('0 */10 * * * *')
	keepSessionAlive(){
//		this.socketServer.emit('keepSessionAlive','keep session alive');
		
		for(var id in this.socketServer.sockets){
			var socket = this.socketServer.sockets[id];
			socket.emit('keepSessionAlive',socket.userId || 'Anonymous');
//			console.log('===========> keep session alive '+ id);
		}
	}
	/** @Socket ('resKeepSessionAlive') */
	resKeepSessionAlive(id,socket){
		console.log('Responsed keep session alive : '+ id);
//		var socket = this.sockets[id];
//		if(socket != null){
//			console.log('Responsed keep session alive : '+ socket.userId);
//		}
	}
	
	/** @Socket ('callSocket') */
	callSocket(id,socket){
		console.log('b2b websocket : '+ id);
//		var socket = this.sockets[id];
//		if(socket != null){
//			console.log('Responsed keep session alive : '+ socket.userId);
//		}
		socket.emit('recvSocket',id || 'Anonymous');
	}
	
	
	
//	const WebSocket = require("ws");
//const wss = new WebSocket.Server({ host : "ws://www.XXX.com/socketserver", port : 9000});
//// 처음에 웹소켓이 연결될 때, callback 함수가 실행
//wss.on("connection", function(ws) {
//	ws.on('message', function(message) {
//    	const sendData = {
//          event: 'response',
//          data: null
//        };
//        switch(message.event) {
//          case 'connection':
//            console.log(message);
//            break;
//          case 'send':
//            sendData.data = 'Hello';
//            ws.send(JSON.stringify(sendData));
//            break;
//        }
//    });
//    
	
	
	
//	if (process.env.NODE_ENV === 'production') {
//	  cron.schedule('*/20 * * * * *', () => {
//	    console.log('running a cron task');
//	    if (shell.exec(`NODE_ENV=${app.settings.env} node tasks/saveArticlesList.js`).code === 0) {
//	      // 코드 0으로 프로그램이 종료되면 성공적으로 프로그램이 실행되었다는 뜻
//	      shell.echo('cron task successfully run');
//	    } else {
//	      // 에러 발생했다는 메세지 로그
//	      shell.exit(1);
//	      shell.echo('error occurred when running cron task');
//	    }
//	  });
//	}
	
	
	
}
