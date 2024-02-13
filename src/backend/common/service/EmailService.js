
/**
 * Email Service
 */

/** @Service */
export class EmailService{
	constructor(){
		/** @Email () */ 
		this.email;

		/** @Render () */ 
		this.render;

		/** @Logger () */ 
		this.logger;

		/** @Constants () */ 
		this.constants;
	}

	/**
	 * Send Email
	 * @param {String} to  You can send an email to multiple people at once (test1@gmail.com,test2@gmail.com)
	 * @param {String} subject 
	 * @param {String} templateFileName filename: template.html
	 * @param {String} mailContentParam {receivedData:"abc", service:{name:"serviceName"}, errorMsg:"no error"}
	 */
	send(to, subject, templateFileName, mailContentParam) {
		try {
			let mailOptions = {
					//from: 'sender@gmail.com',             //single (no required)
					to,			//multiple (test1@gmail.com,test2@gmail.com)
					subject,	//title
					html: this._makeMailContent(templateFileName, mailContentParam)			//contents
			};
			let result = this.email.send(mailOptions);
			Logger.info(`Finish sending email: ${result.response}, ${subject}`);
		} catch (e){
			Logger.error(e)
		}
	}

	_makeMailContent(templateFileName, mailContentParam) {
		let str = "";
		try{
			//ejs rendering
			str = this.render(`${this.constants._root}/src/backend/views/email/${templateFileName}`, mailContentParam);
		}catch (err) {
			console.log(err);
			throw err;
		}
		return str;
	}

	
}