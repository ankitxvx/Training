import { rejects } from "assert"
import { resolve } from "path"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { entityManager } from "../config/db"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    gender: string

    @Column({
        type:"datetime",
        default:()=>'NOW()'
    })
    created_at: string
    updated_at: Date
}

const getlist = ()=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let data = await entityManager.find(Users)
            resolve(data)
        }catch(err){
            reject(err)
        }
    })
}

export default {
    getlist
}