let id: number = 5 
let company: string = 'Traversy Media'

let isPublished: boolean = true
let x: any = 'Hello'

let ids : number[] = [1,2,3,4,5,6]
let arr: any[] = [1,true,'hello']
//tuple
let person: [number,string,boolean] = [1,'Brad',true]
//tuple array
let employee: [number,string] []

employee = [
    [1,'Brad'],
    [2,'John'],
    [3,'jill']
]
//union

let pid:string | number
pid = '22'
//Enum
enum Direction1 {
    up = 1,
    down,
    left,
    right
}
console.log(Direction1.up)
enum Direction2 {
    up = 'UP',
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}
//Objects 
type User =  {
    id: number,
    name: string
}

const user: User={
    id: 1,
    name: 'John'
}

//type Assertion

let cid: any = 1;
 
//let customerId = <number>cid

let customerId = cid as number

//Functions
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(3,4))

function log(message: string | number):void{
    console.log(message)
}
//interfaces
interface UserInterfacee  {
    id: number,
    name: string
}
// optional field 
interface UserInterfacee2  {
    id: number,
    name?: string
}
// readonly
interface UserInterfacee3  {
    readonly id: number,
    name: string
}
const user1: UserInterfacee={
    id: 1,
    name: 'John'
}
interface MathFunc {
    (x:number,y: number):number
}
const add : MathFunc = (x: number,y:number)=>x+y
const sub : MathFunc = (x: number,y:number)=>x-y

// Classes

class Person1{
    
      id: number
      name: string
    constructor(id: number,name: string){
        this.id = id
        this.name  = name
    }
    register(){
        return `${this.name} is registered `
    }
}
const brad = new Person1(1,'ankit')
const mike = new Person1(2,'rahul')
interface PersonInterface{
    id:number
    name: string
    register():string
}

class Person implements PersonInterface{
    id: number
      name: string
    constructor(id: number,name: string){
        this.id = id
        this.name  = name
    }
    register(){
        return `${this.name} is registered `
    }
}

class Employee extends Person{
    position: string
    constructor(id: number, name:string,position:string){
        super(id,name)
        this.position= position
    }
    
}
const emp = new Employee(2,'Shawn','Developer')
console.log(emp.register())

//Generics
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,3,3,4])
let strArray = getArray<string>(['asfs','asfsd','sfsdfs'])

numArray.push(1)