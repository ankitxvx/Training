import { Db, Collection, ObjectId } from 'mongodb';
import { connectDB } from '../utils/db';

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
}

export const getUserCollection = async (): Promise<Collection<User>> => {
  const db: Db = await connectDB();
  return db.collection<User>('users');
};
