/**
 *  Available Annotations : Controller, Inject, RequestMapping(third param is input-tag name when secound param is 'files')
 */
/**
 *	File Manager 
 */
/** @Controller */
/** @RequestMapping ('/fm') */
export class FileManagerController {
	constructor(){
		/** @Inject ('FileManagerService') */
		this.fileManagerService;

		this.fs = require('fs');

		/** @Constants () */ 
		this.constants; 
	}
	
	
	/**
	 * upload image page (TEST)
	 */
	/** @RequestMapping ('/image',get) */
	imageupload(req,res,next){
		res.locals.location = this.location;
		res.render('upload/image');
	}
	
	/**
	 * third param is input-tag name when secound param is 'files'
	 * param2: must be 'files' (file is in the req.files)
	 * param3: input:name     -> <input type="file" name="image"/>
	 */
	/** @RequestMapping('/imagesubmit',files,'image') */
	imageuploadSubmit(req,res,next){
		
		const location = req.body.location;
		const scanned = req.body.scanned;
		
		try{
			for(var i in req.files){
				const file = req.files[i];
				let param = {
					fileName : file.originalname,
					filePath : file.path,
					mimeType : file.mimetype,
					location : location,
					scanned : scanned
				};
				
				this.fileManagerService.insertFileManager(param);
			}
			
			res.json({result:'SUCCESS'});
		}catch(e){
			res.json({errorMsg:e});
		}
	}
	
	
	/**
	 * get file list (JSON)
	 */
	/** @RequestMapping('/getFileList',post) */
	getFileList(req,res,next){
		
		const location = req.body.location;
		const scanned = req.body.scanned;
		try{
			if(location == null || location == '' ) throw 'need Location';
			if(scanned == null || scanned == '' ) throw 'need scanned';
			const result = this.fileManagerService.getFileList(req.body);
			if(result == null){
				 throw 'There is no file.';
			}
			res.json(result);
		}catch(e){
			res.json({errorMsg:e});
		}
	}	
	
	
	/**
	 * show image file
	 */
	/** @RequestMapping('/viewFile/:fileId',get) */
	viewFile(req,res,next){
		var fileId = req.params.fileId; // ex) /upload/files/sample.png
		
		try {
			
			const file = this.fileManagerService.getFileInfo(fileId);	//get image file
			if(file != null){
				const filePath = this.constants._upload.path + file.filePath;
				if (this.fs.existsSync(filePath)) {
					var img = this.fs.readFileSync(filePath);
					res.contentType(file.mimeType);
					return res.send(img);
				}else{
					// no file
					// data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
					var img = Buffer.from("R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", 'base64');		//empty image
					res.contentType("image/gif");
					res.send(img);
				}
			}else{
				// no file
				var img = Buffer.from("R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", 'base64');		//empty image
				res.contentType("image/gif");
				res.send(img);
			}
		} catch (e) {
			console.log(e);
			res.send('An error occurred while downloading the file.');
			return;
		}
	}
	
	
	/**
	 * file download
	 */
	/** @RequestMapping('/download/:fileId',get) */
	download(req,res,next){
		var fileId = req.params.fileId; // ex) /upload/files/sample.txt
		
		try {
			const file = this.fileManagerService.getFileInfo(fileId);	//get file
			const filePath = this.constants._upload.path + file.filePath;
			// file exist
			
			if (this.fs.existsSync(filePath)) {
				res.setHeader('Content-disposition', 'attachment; filename=' + file.fileName); //set download file name
				res.setHeader('Content-type', file.mimeType);
				var filestream = this.fs.createReadStream(filePath);
				filestream.pipe(res);
			} else {
				res.send('There is no file.');  
				return;
			}
		} catch (e) {
			console.log(e);
			res.send('An error occurred while downloading the file.');
			return;
		}
	}
	
}
