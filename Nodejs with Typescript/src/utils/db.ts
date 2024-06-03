import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://ankitcoolzzzz:root@cluster0.dzib6jp.mongodb.net/';
const dbName = 'users';

let db: MongoClient | null = null;

export const connectDB = async () => {
  if (!db) {
    const client = new MongoClient(url);
    db = await client.connect();
    console.log('Connected to database');
  }
  return db.db(dbName);
};
