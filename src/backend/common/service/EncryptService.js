/**
	let token = this.encrypt.Encode('12::34');
	this.encrypt.Decode(token);	//12::34

 */
/** @Service */
export class EncryptService{
	constructor(){
		/** @Encrypt ('>>encrypt_key<<')    */ 
		this.encrypt;
	}
	
	Encode(code){
		return this.encrypt.encode(code);  
	}

	Decode(token){
		return this.encrypt.decode(token)
	}
	
}