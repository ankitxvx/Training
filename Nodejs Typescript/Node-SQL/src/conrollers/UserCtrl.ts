import express,{Request,Response} from "express"
import User  from "../models/User"

const userInfo = {
    getList: async (req:Request,res:Response)=>{
        let mydata = await User.getlist();
        res.json({data:mydata})
    }
}

export default userInfo