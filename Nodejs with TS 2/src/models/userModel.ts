import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb+srv://ankitcoolzzzz:root@cluster0.dzib6jp.mongodb.net/';
const dbName = 'testdb';
const client = new MongoClient(url);

client.connect().then(()=>{
    console.log('connected to DB');
}).catch((err)=>{
    console.error(err);
})
const db = client.db(dbName);
const usersCollection = db.collection('users');

interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  age: number;
}

export { usersCollection, User, ObjectId };
