/**
 *  Available Annotations : Controller, Inject, RequestMapping(third param is input-tag name when secound param is 'files')
 */
/**
 *	File Manager 
 */
/** @Controller */
/** @RequestMapping ('/test') */
export class TestController {
	constructor(){

		/** @Inject ('TestService') */
		this.testService;

		/** @Constants () */ 
		this.constants; 


		this.i = 0;
	}
	
	/**
	 * TEST1
	 * 서비스로 부터 데이터 받아서 view에 전달
	 * /test/getTexts
	 */
	/** @RequestMapping ('/getTexts',get) */
	getTexts(req,res,next){
		let list = this.testService.getTexts();
		
		res.render('test/getTexts',{list:list});
	}
	
	/**
	 * 택스트를 DB에 입력 
	 */
	/** @RequestMapping ('/insertText',get) */
	insertText(req,res,next){
		this.testService.insertText("TEXT:"+this.i++);
		res.redirect('/test/getTexts');
	}
	
}
