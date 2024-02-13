/** @Service */
export class UserService{
	constructor(){

		/** @Inject ('UserModel') */ 
		this.userModel; 

		/** @Constants () */ 
		this.constants; 
	}
	

	/**
	 * getFile
	 * @param date
	 */
	createUser(id, pass, nickName){
		return this.userModel.create({id, pass, nickName});
	}


    /**
     * ID로 유저정보를 가져옴
     * @param {*} id 
     * @returns 
     */
    getUserById(id){
        return this.userModel.findAll({where: {id}});
    }

    /**
     * 
     * @param {*} id 
     * @param {*} pass
     * @returns 
     */
    checkIdAndPass(id, pass){
        return this.userModel.findAll({where: {id,pass}});
    }


}