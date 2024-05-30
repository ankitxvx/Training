import { Request, Response } from "express";
import { createUser, deleteUser, findAndUpdate, findUser } from "../services/users.service";
import UserModel from "../modals/user";

const homeDetails = async (req: Request, res: Response) => {
    const user = UserModel.myNewStaticFn();
    // const newUser = {
    //     name: 'lol',
    //     dept: 'good'
    // }
    // const user = await createUser(newUser).then(()=>{
    //     console.log("created ")
    // }).catch((err)=>{
    //     console.error(err)
    // })
    // const user = await findAndUpdate({_id:"664ec6a6cdccf361e973c58a"},{dept:"bad"},{new:true}).then(()=>{
    //     console.log("updated")
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // const user = await findUser({_id:"664ec6a6cdccf361e973c58a"})
    // const user = await deleteUser({_id:"664ec6a6cdccf361e973c58a"}).
    // then(()=>{
    //     console.log('deleted')
    // }).catch((err)=>console.log(err))
    res.json({
        name:"hello",
        mydata:user
    })
 }

export {
    homeDetails
}
