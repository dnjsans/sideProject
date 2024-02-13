/**
 * Available Annotations : Inject, Socket, Scheduler, FilterMapping
  */
/** @Service */
export class CommonService{
	constructor(){
		
		/** @Constants () */ 
		this.constants;

		/** @Inject ('EncryptService') */ 
		this.encrypt;
		
		/** @Inject ('CommonInfoModel') */
		this.commonInfoModel;
		
		
		this.timezone = 0;
		this.locale = 'en';
		this.email = '';
		
		this.token = '';
		
		this.ip = '';

		/** @Locale () */
		this.i18n;


	}


	/** locale functoin */
	__(localeName, params = {}){
		return this.i18n.__(localeName,params);
	}	
		
	/**
		모든 row값을 update한다. 
	 */
	updatecommonInfoModel(param){
		try{
			if(this.commonInfoModel != null){
				//change DB
				this.commonInfoModel.update(param,{ where : { token: this.token } });
					
				//change value
				for(let i in param){
					this[i] = param[i];
					
					// if(i == 'token')  this.decodeToken(this[i]);
					
				}
				this.i18n.setLocale(this.locale);	//default 'en'
				console.log('>>>>>>>>>>>>>>>>>>>lang getLocale <<<<<<<<<<<<<<<<<<',this.i18n.getLocale());
			}
		}catch(e){console.log(e);}
	}
	
	
	/**
		Wims 설정값을 최초 가져온다.
	 */
	setCommonInfoModel(){
		try{
			if(this.commonInfoModel != null){
				let resultList = this.commonInfoModel.findAll();	//최초 설치시 wimsinfo가 없어서 에러 발생 
				if(resultList.length > 0){
					this.serverLocation = resultList[0].serverLocation;
					this.timezone = resultList[0].timezone;
					this.locale = resultList[0].locale || 'en';
					this.email = resultList[0].email;
					this.token = resultList[0].token;
					
					this.i18n.setLocale(this.locale);	//default 'en'
					console.log('>>>>>>>>>>>>>>>>>>>lang getLocale <<<<<<<<<<<<<<<<<<',this.i18n.getLocale());
			
					//this.decodeToken(this.token);
				}
					
					
					//=================== UPDATE TIME_ZONE =====================
//					if(this.timezone != null && this.timezone != 0){
//						this.sequelize.query("SET GLOBAL time_zone='"+this.timezone+"'",{type:Sequelize.QueryTypes.UPDATE});
//						this.sequelize.query("SET time_zone='"+this.timezone+"'",{type:Sequelize.QueryTypes.UPDATE});
//						this.sequelize.query("SET @@global.time_zone = '"+this.timezone+"'",{type:Sequelize.QueryTypes.UPDATE});
//						//this.sequelize.query("SET @@session.time_zone = '"+this.timezone+"'",{type:Sequelize.QueryTypes.UPDATE});
//						//console.log(result);
//					}
			}
		}catch(e){console.log(e);/* wimsinfo테이블이 처음에는 존재하지 않기 때문에 오류가 발생할수 있음 */}
	}
	
	/**
		Setting 메뉴에서 수정 하고 값을 반영할때 호출
	 */
	setParams(params = {}){
		for(let i in params){
			this[i] = params[i];

			// if(i == 'token')  this.decodeToken(this[i]);

		}
		this.i18n.setLocale(this.locale);	//default 'en'
		console.log('>>>>>>>>>>>>>>>>>>>lang getLocale <<<<<<<<<<<<<<<<<<',this.i18n.getLocale());
	}

	/**
		서버 ip값을 가져온다. (docker일때는 어전다.)
	 */
	
	// decodeToken(token){
	// 	let accessToken = this.encrypt.Decode(token);
		//console.log(accessToken);
		// if(accessToken.indexOf('::') > -1){
		// 	let tokenArr = accessToken.split('::');
		// 	if(tokenArr.length == 2){
		// 		this.companyId = Number(tokenArr[0]);
		// 	}else{
		// 		console.log('Token is not Valied');
		// 		throw 'Token is not Valied';
		// 	}
		// }
	// }
}
