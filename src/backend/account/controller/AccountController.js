/**
 * 
 */
/** @Controller */
/** @RequestMapping ('/account') */
export class AccountController{

    constructor(){
        /** @Inject ('AccountService') */
        this.accountService;
    }


    /** @RequestMapping ('/login', get) */
	login(req,res,next){
        res.render('account/login');
    }
    

    /** @RequestMapping ('/postLogin', post) */
	login_post(req,res,next){
        try{
            let id = req.body.id;
            let pass = req.body.pass;

            this.accountService.checkIdAndPass(id, pass);
                
            res.status(200).json({result:"SUCCEED"});
            
        }catch(e){
            res.status(500).json({result:e});
        }
    }

    /** @RequestMapping ('/join', get) */
	join(req,res,next){
        res.render('account/join');
    }
    

    /** @RequestMapping ('/postJoin', post) */
	join_post(req,res,next){
        try{
            let id = req.body.id;
            let pass = req.body.pass;
            let nickName = req.body.nickName;
            console.log(id, pass, nickName);
            this.accountService.postJoin(id, pass, nickName);

            //res.status(200).json({result:"SUCCEED"});   //put:201
            res.redirect('/account/login');
        }catch(e){
            res.status(500).json({result:e});
        }
    }


}