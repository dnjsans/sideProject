/**
 *  Available Annotations : Controller, Inject, RequestMapping(third param is input-tag name when secound param is 'files')
 */
/**
 *	Home
 */
/** @Controller */
export class IndexController {
	constructor(){
	}
	
	
	/** @RequestMapping ('/',get) */
	index(req,res,next){
		res.render('index');
	}
	
}
