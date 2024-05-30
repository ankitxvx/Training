import express ,{Request,Response} from 'express';
import { homeDetails } from '../controllers/user';
const  router  = express.Router();

router.get('/home',homeDetails)
router.get('/about',(req:Request,res:Response):void=>{
    let data = sumData(213,2313)
    res.json({
        message:"about Page",
        data:data
    })
})

const sumData = (x:number,y:number):number=>{
    return x+y;
}
export{
    router
}