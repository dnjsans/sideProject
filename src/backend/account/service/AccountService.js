/** @Service */
export class AccountService{
	constructor(){

		/** @Inject ('UserService') */ 
		this.userService; 

		/** @Constants () */ 
		this.constants; 
	}
	

	/**
	 * checkIdAndPass
	 * @param date
	 * @retuns bool
	 */
	checkIdAndPass(id, pass){

        let results = this.userService.getUserById(id);

        if(results.length == 0){
            throw "User ID doesn't exist!";
        }
		let results2 = this.userService.checkIdAndPass(id, pass);
		if(results2.length > 0){
			return true;
		}else{
			throw "There is wrong password!";
		}
	}
	/**
	 * getFile
	 * @param date
	 */
	postJoin(id, pass, nickName){

		let results = this.userService.getUserById(id);

        if(results.length > 0){
            throw "User ID is aleady exist.";
        }else{
            this.userService.createUser(id, pass, nickName);
        }

		return true;
	}

}