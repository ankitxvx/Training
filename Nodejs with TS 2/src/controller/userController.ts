import { IncomingMessage, ServerResponse } from 'http';
import { usersCollection, User, ObjectId } from '../models/userModel';
import { parse } from 'url';
import { getRequestBody } from '../utils';

const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
  const users = await usersCollection.find().toArray();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
};

const getUserById = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });
  if (user) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

const createUser = async (req: IncomingMessage, res: ServerResponse) => {
  const body = await getRequestBody(req);
  const newUser: User = JSON.parse(body);
  const result = await usersCollection.insertOne(newUser);
  const insertedUser = await usersCollection.findOne({ _id: result.insertedId });
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(insertedUser));
};

const updateUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  const body = await getRequestBody(req);
  const updatedUser: User = JSON.parse(body);
  const result = await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedUser });
  if (result.matchedCount > 0) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User updated successfully' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

const deleteUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount > 0) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User deleted successfully' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
