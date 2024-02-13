import crypto from 'crypto'
/**
 *	All Page Pre-Filtering Class 
 * Available Annotations : Inject, Socket, Scheduler, FilterMapping
 */
/** @                    Component */
class FilterComponent{
	constructor(){
		
		this.startTime = Date.now();
		this.serverLocation = '';
		this.timezone = '0';
		this.locale = 'en';
		this.email = '';
		
		this.ENC_KEY = crypto.randomBytes(32);
		this.IV = crypto.randomBytes(16);
		
		/** @Inject('WimsInfo') */
		this.WimsInfo;
		
	}
	
	
	// Starter
	/** @Starter () */
	Starter(){
		try{
			
			let resultList = this.WimsInfo.findAll();
			if(resultList.length > 0){
				this.serverLocation = resultList[0].serverLocation;
				this.timezone = resultList[0].timezone;
				this.locale = resultList[0].locale;
				this.email = resultList[0].email;
			}
		}catch(e){/* wimsinfo테이블이 처음에는 존재하지 않기 때문에 오류가 발생할수 있음 */}
	}

	//FOR vue
	Cipher(code){	//여기서 사용 안함.
		const cipher = crypto.createCipheriv('aes-256-cbc', this.ENC_KEY, this.IV);
		let token = cipher.update(code, 'utf8', 'hex'); // 'HbMtmFdroLU0arLpMflQ'
		token += cipher.final('hex'); // 'HbMtmFdroLU0arLpMflQYtt8xEf4lrPn5tX5k+a8Nzw='
		return token;
	}
	//FOR vue
	Decipher(token){
		const decipher = crypto.createDecipheriv('aes-256-cbc', this.ENC_KEY, this.IV);
		let result = decipher.update(token, 'hex', 'utf8'); // 암호화할문 (base64, utf8이 위의 cipher과 반대 순서입니다.)
		result += decipher.final('utf8'); // 암호화할문장 (여기도 base64대신 utf8)
		return result;	//160594598::id
	}

	/**
	 * Intercepting requests  
	 * Check logined (exclude account)       /*      : all file check 
	 * ^([\w\W]+\.(?!png|jpg|gif))*\b
	 */
	// @FilterMapping('/*') 
	SessionInterceptor(req,res,next){
		res.header('X-XSS-Protection' , 0 );
		
		if(req.headers.accept && req.headers.accept.indexOf("image/") > -1) return next();		//pass images  image/*
		
		if(req.url.indexOf('.css') > -1) return next();
		if(req.url.indexOf('.js') > -1) return next();
		if(req.url.indexOf('.png') > -1) return next();
		if(req.url.indexOf('.jpg') > -1) return next();
		if(req.url.indexOf('.html') > -1) return next();

		//================================================== Access Token Decoding
		let accessToken = '';
		let token = req.headers['access-token'];
		if(token != null && token != 'null'){
			accessToken = this.Decipher(req.headers['access-token']);
		}

		//================================================== locals
		res.locals = 
		{
				userId : '', 
				userName: '',
				nickName: '',
				role:'',
				scanDays:0,
				location:'index',
				
				serverLocation : this.serverLocation,
				timezone : this.timezone,
				locale : this.locale,
				email : this.email,

				Cipher : this.Cipher,	//함수를 던질때 함수에서 사용하는 this인자도 같이 던진다.
				ENC_KEY : this.ENC_KEY, //함수에서 사용하는 this인자도 같이 던진다.
				IV : this.IV,			//함수에서 사용하는 this인자도 같이 던진다.
				accessToken : accessToken
		};



		if(req.url.indexOf('/account/') > -1) return next();
		if(req.url.indexOf('/rest-api/') > -1) return next();
		if(req.url.indexOf('/api/') > -1) return next();

		//====================================== setting default params 

		/*
		//======================================
		//private site
		if(req.session.userInfo != null){	//check session
			res.locals.userId = req.session.userInfo.userid;
			res.locals.userName = req.session.userInfo.username;
			//make initial  
			let arr = res.locals.userName.match(/(^.)|(\s.)/g);
			res.locals.nickName = arr[0] + ((arr[1] == undefined)? '' : arr[1].trim());		// make initial : Admin -> A
			
//			res.locals.nickname = req.session.userInfo.nickname;
			res.locals.role = req.session.userInfo.role;
			res.locals.scanDays = req.session.userInfo.scanDays;
			
			
			//access permission check 
			if(req.url.indexOf('/setting/') > -1){	//only Administrator can enter the setting folder
				if(["Administrator"].indexOf(res.locals.role) == -1){
					return res.redirect('/account/accessDenied');
				}
			}
			if(req.url.indexOf('/fleet/') > -1){	//Administrator and Manager can enter the setting folder
				if(["Administrator","Manager"].indexOf(res.locals.role) == -1){
					return res.redirect('/account/accessDenied');
				}
			}
			
			
			
			return next();  // call next() here to move on to next middleware/router
		}else{
			
			
//			Response.AddHeader("Access-Control-Allow-Origin", "*");	//외부 입력
//			if (req.headers["x-requested-with"] != null && req.headers["x-requested-with"].toLowerCase() === "xmlhttprequest")
			if (req.headers["x-requested-with"] == "XMLHttpRequest")
			{
				res.status(401);
				res.send('SESSION TIMEOUT');
				
//				var error = new Error('SESSION TIMEOUT');
//				error.status = 401;
//				next(error);
			}else{
				res.redirect('/account/login');		//go to login page
			}

		}
		 */
//		console.log('Intercepting requests ...');
	}
	
	
}

export {FilterComponent}