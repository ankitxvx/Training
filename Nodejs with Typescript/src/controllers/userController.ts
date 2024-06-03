import { IncomingMessage, ServerResponse } from 'http';
import { getUserCollection, User } from '../models/userModel';
import { parse } from 'url';
import { ObjectId } from 'mongodb';

export const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
  const userCollection = await getUserCollection();
  const users = await userCollection.find().toArray();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
};

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const userCollection = await getUserCollection();
    const user: User = JSON.parse(body);
    const result = await userCollection.insertOne(user);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
};

export const updateUser = async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = parse(req.url!, true);
  const id = pathname!.split('/')[2];

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const userCollection = await getUserCollection();
    const user: Partial<User> = JSON.parse(body);
    await userCollection.updateOne({ _id: new ObjectId(id) }, { $set: user });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User updated' }));
  });
};

export const deleteUser = async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = parse(req.url!, true);
  const id = pathname!.split('/')[2];

  const userCollection = await getUserCollection();
  await userCollection.deleteOne({ _id: new ObjectId(id) });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'User deleted' }));
};
