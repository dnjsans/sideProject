/**
 *	All Page Pre-Filtering Class 
 * Available Annotations : Inject, Socket, Scheduler, FilterMapping
 */
/** @Component */
export class FilterComponent{
	constructor(){
		
		/** @Inject ('CommonInfoService') */
		this.commonInfoService;
		
		/** @Inject ('EncryptService') */ 
		this.encrypt;
	}
	
	
	// Starter
	/** @     Starter () */
	setWimsInfo(){
		//this.commonInfoService.setCommonInfoModel();
	}

	/**
	 * Intercepting requests  
	 * Check logined (exclude account)       /*      : all file check 
	 * ^([\w\W]+\.(?!png|jpg|gif))*\b
	 */
	// @FilterMapping ('/*') 
	SessionInterceptor(req,res,next){
		res.header('X-XSS-Protection' , 0 );


//		if(req.headers.accept && req.headers.accept.indexOf("image/*") > -1) return next();		//pass images 
		
		if(req.url.indexOf('.css') > -1) return next();
		if(req.url.indexOf('.js') > -1) return next();
		if(req.url.indexOf('.png') > -1) return next();
		if(req.url.indexOf('.jpg') > -1) return next();
		if(req.url.indexOf('.html') > -1) return next();
		
		if(req.url.indexOf('/fm/viewFile') > -1) return next();		//파일 메니터로 이미지 로그 볼때 통과


//====================================== token is required
		if(this.commonInfoService.token == '' ) this.commonInfoService.setCommonInfoModel();
		//console.log(res.locals.__);
		//console.log(res.__);
		//console.log(res.cookie('lang'));
		
		//====================================== setting default params 
		res.locals.userId = ''; 
		res.locals.userName= '';
		res.locals.nickName= '';
		res.locals.role=''; //Administrator
		res.locals.scanDays=0;
		res.locals.location='index';
		res.locals.token = this.commonInfoService.token;
		res.locals.timezone = this.commonInfoService.timezone;
		
		//res.locals.locale = require('i18n').getLocale() || this.locale;
		//res.locals.locale = (req.cookies != null) ? req.cookies.lang || this.locale : this.locale;
		res.locals.locale = this.commonInfoService.locale;	//res.__("lang") || this.commonInfoService.locale
		res.cookie('lang', res.locals.locale);
		res.locals.email = this.commonInfoService.email;
		
		
		//======================================
		
		if(req.url.indexOf('/account/') > -1) return next();
		
		if(req.url.indexOf('/rest-api/') > -1){
			
			//================================================== Access Token Decoding
			let token = req.headers['x-token'];
			if(token != null && token != 'null'  && token != ''){
				//accessToken = this.Decipher(req.headers['access-token']);
				let accessToken = null;
				try{
					//======================복호화
					accessToken = this.encrypt.Decode(token);
					
					if(accessToken.indexOf('::') > -1){
						let tokenArr = accessToken.split('::');
						if(tokenArr.length == 2){
							res.locals.companyId = Number(tokenArr[0]);
							res.locals.warehouseId = Number(tokenArr[1]);
						}else{
							console.log('Token is not Valied');
							return next();
						}
					}else{
						console.log('Token is not Valied');
						return next();
					}
					
					
					
					//console.log(result);	// 1
				}catch(e){
					console.log(e);
					return next();
				}
//				if(isNaN(accessToken)) return next();
//				res.locals.xToken = Number(accessToken);			//token은 warehouseId $$$
			}
			return next();
		} 
		
		// Hub의 경우 token에서 companyId가 없으면 Sync up 화면으로 이동
		if (this.commonInfoService.systemType == 'bwareHub' && (this.commonInfoService.companyId == null || this.commonInfoService.companyId == undefined || this.commonInfoService.companyId == 0)) {
			if (req.url == '/setting/master_syncup') return next();
			else return res.redirect('/setting/master_syncup');
		}

		//private site
		if(req.session.userInfo != null){	//check session
			res.locals.userId = req.session.userInfo.userid;
			res.locals.userName = req.session.userInfo.username;
			//make initial  
			let arr = res.locals.userName.match(/(^.)|(\s.)/g);				//Start word or Next word with space
			res.locals.nickName = arr[0] + ((arr[1] == undefined)? '' : arr[1].trim());		// make initial : Admin -> A,  Won Jae -> WJ
			
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
		
//		console.log('Intercepting requests ...');
	}
	
	
}
