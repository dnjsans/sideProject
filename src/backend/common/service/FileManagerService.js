/** @Service */
class FileManagerService{
	constructor(){

		this.fs = require('fs');
		
		/** @Inject ('FileManagerModel') */
		this.fileManager;

		/** @Constants () */ 
		this.constants; 
	}
	

	/**
	 * getFile
	 * @param date
	 */
	getFileList(params){
		const createDate = params.date;
		var param = {date:createDate};
		var s = " SELECT * FROM filemanager WHERE 1=1 ";
			s+=" AND date_format(createdAt, '%m/%d/%Y %H:%i:%s') = date_format(:date, '%m/%d/%Y %H:%i:%s')";
		
		let resultList = this.fileManager.query(s, param);
		return resultList ;
	}

	
	
	/**
	 * getFile from Id
	 * @param id
	 */
	getFileInfo(fid){
		return this.fileManagerModel.findOne({where:{id:fid}});
	}

	
	/**
	 * get base64 from File
	 * @param id
	 */
	getBase64FromFileId(fileId){
		const file = this.getFileInfo(fileId);	//get image file
		const filePath = this.constants._upload.path + file.filePath;

		 // read binary data
		 return 'data:'+file.mimeType+';base64,'+ this.fs.readFileSync(filePath, 'base64');
		 
		 //var bitmap = fs.readFileSync(filePath);
		 // convert binary data to base64 encoded string
		 //return new Buffer(bitmap).toString('base64');
	}


	/**
	 * insert Base64 Image
	 * @param timestamp, image(base64)

		const fsResult = this.FMService.insertBase64Image({
			image: image64
		}); 
	 */
	insertBase64Image(params){

		const image = params.image;			//base64 image required
		
		const timestamp = params.timestamp || (new Date()).getTime();	//340983029483
		const imageType = params.imageType || "image/png";
		const createUser = params.createUser || 'anonymous';


 
		let fileSize = 0;			//base64 image required
		
		
		var param = {};
		if(image){
			let today = new Date();   
			let year = today.getFullYear(); // 년도
			let month = today.getMonth() + 1;  // 월
			let date = ''+today.getDate();  // 날짜
			month = (month.length == 1)?'0'+month:''+month;		//0붙이기
			date = (date.length == 1)?'0'+date:''+date;		//0붙이기
	
			let pdir = this.constants._upload.path + '/' + year + month;
			let cdir = this.constants._upload.path + '/' + year + month + '/' + date;
			let folder = '/' + year + month + '/' + date;
			//year + month + '/' + date
			!this.fs.existsSync(this.constants._upload.path) && this.fs.mkdirSync(this.constants._upload.path);
			!this.fs.existsSync(pdir) && this.fs.mkdirSync(pdir);
			!this.fs.existsSync(cdir) && this.fs.mkdirSync(cdir);
			
			//파일 저장
//			let base64Data = image.replace(/^data:image\/png;base64,/,"");
//			let binaryData = new Buffer(base64Data, 'base64').toString('binary');
//			this.fs.writeFile(location+"_"+timestamp+".png", binaryData, "binary", function(err) {
//			  console.log(err); // writes out file without error, but it's not a valid image
//			});
			
			//Mime type
			var mimeTypeArr = image.match(/^data:(image\/[\w]+)\;base64/);
			if(mimeTypeArr != null){
				param.mimeType = mimeTypeArr[1];
			}else{
				param.mimeType = imageType;
				
			}

			var mimeType;
		    switch (param.mimeType) {
		      case "image/jpeg":
		        mimeType = "jpg";
		      break;
		      case "image/jpg":
		        mimeType = "jpg";
		      break;
		      case "image/png":
		        mimeType = "png";
		      break;
		      case "image/gif":
		        mimeType = "gif";
		      break;
		      case "image/bmp":
		        mimeType = "bmp";
		      break;
		      default:
		        mimeType = "png";
		      break;
		    }

			//file name 
			param.fileName = "F_"+timestamp+"."+mimeType;
			param.filePath = folder +'/'+"F_"+timestamp+"."+mimeType;

			var base64Data = image.replace(/^data:image\/[\w]+;base64,/, "");
			
			//file size
			//const img = 'data:image/png;base64,aBdiVBORw0fKGgoAAA';
			const buffer = Buffer.from(base64Data);
			//console.log("Byte length: " + buffer.length);
			//console.log("MB: " + buffer.length / 1e+6);

			//var decoded = atob(base64str);
			fileSize = buffer.length;

			
			this.fs.writeFile(cdir +'/'+ "F_"+timestamp+"."+mimeType, base64Data, 'base64', function(err) {
				if(err != null) console.log(err);
			});
			
			
		}
		
		var createResult = this.FileManager.create({
			fileName: param.fileName,
			filePath: param.filePath,
			fileSize: fileSize,
			mimeType: param.mimeType,
			createUser: createUser
		});
		//result {"id":1,"userid":"test1","username":"test1","password":"test1","updatedAt":"2018-10-26T14:34:45.217Z","createdAt":"2018-10-26T14:34:45.217Z"}
		//[2,1] 0:id, 1:number
		return createResult.id;
	}
	
	/**
	 * delete file
	 * @param fileId
	 */
	deleteFile(fId){
		var f = this.getFileInfo(fId);	//get file
		try {
			//file removed
			this.fs.unlinkSync(f.filePath);
		}catch(err) {
			console.error(err)
		}
		
		// remove in the table
		return this.FileManager.destroy({
			where: {id: fId}
		});

	}
	
	/**
	 * insert File Info
	 * @ return : {"id":1,"fileName":"test1.jpg","filePath":"/upload/202102/1/","mimeType":"image/jpeg","fileSize":"21,432","createUser":"Anonymous","createdAt":"2018-10-26T14:34:45.217Z"}
	 */
	insertFileManager(params,createUser = "Anonymous"){
		return this.FileManager.create({
			fileName: params.originalname,
			filePath: params.path,
			mimeType: params.mimetype,
			fileSize: params.size,
			createUser:  createUser
		});
		
	//  fieldname: 'layoutFile',
	//  originalname: '20190722_211404.jpg',
	//  encoding: '7bit',
	//  mimetype: 'image/jpeg',
	//  destination: 'C:\\Users\\desk01\\git\\bgadmin\\upload_admin_v1.0/20212/19',
	//  filename: '71a2269fd545223c65e26eba9ca443e2',
	//  path: 'C:\\Users\\desk01\\git\\bgadmin\\upload_admin_v1.0\\20212\\19\\71a2269fd545223c65e26eba9ca443e2',
	//  size: 69567
	}
	
}

export {FileManagerService}