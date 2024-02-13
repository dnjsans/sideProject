/** @Service */
export class TestService{
	constructor(){

		/** @Inject ('TestModel') */ 
		this.testModel; 

		/** @Constants () */ 
		this.constants; 
	}
	

	/**
	 * getFile
	 * @param date
	 */
	getTexts(){
		return this.testModel.findAll();
		
	}

	/**
	 * getFile
	 * @param date
	 */
	 insertText(text){
		this.testModel.create({name:text});
		return true;
	}

}