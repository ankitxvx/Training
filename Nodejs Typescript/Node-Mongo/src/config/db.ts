import  mongoose ,{connect} from "mongoose";
function connects(){
    return connect('mongodb+srv://ankitcoolzzzz:root@cluster0.hqz7egz.mongodb.net/')
    .then(()=>{
        console.log("db connected")
    }).catch((err:any)=>{
        console.error(err)
    })
}
export {connects}