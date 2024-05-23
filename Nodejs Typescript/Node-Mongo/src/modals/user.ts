import {Schema,model,Document, Model} from "mongoose"
import { userInfo } from "os";
export interface UserDocument extends Document{
    name:string,
    dept:string
}
interface User{
    name:string;
    dept:string;
}
interface UserModel extends Model<User>{
    myNewStaticFn():number
}
const schema = new Schema<User,UserModel>({
    name:{
        type:String,
        required: true
    },
    dept:{
        type:String,
        required:true
    }
})
schema.static('myNewStaticFn',function myNewStaticFn(){
    return 150
})
const UserModel = model<User,UserModel>('User',schema)

export default UserModel