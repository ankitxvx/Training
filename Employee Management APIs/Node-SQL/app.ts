import express,{Request,Response} from "express"
import DB from './src/config/db'
import {router} from "./src/routes/routes"
const app = express();

const PORT = 8012
DB();
app.use(router)
app.get("/mytest",(req:Request,res:Response)=>{
    res.json({data:"yes done"})
})

app.listen(PORT,():void=>{
    console.log(`Server running on ${PORT}`)
})

db.employees.aggregate([
    {
        $lookup:{
            from:"department",
            localField:"dept",
            foreignField:"name",
            as : "myData"
        },{
            $project:{
                _id:0,name:1,mydata:{code:1}
            }
        }
    }
])