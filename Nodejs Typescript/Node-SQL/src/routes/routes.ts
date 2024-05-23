import express,{Request,Response} from "express"
 import UserCtrl from "../models/User"
const router = express.Router();

 router.get('/about',(res:Request,req:Request)=>{
    res.body({
        message:"about page"
    })
})

router.get('/home',UserCtrl.getlist)

export {
    router
}