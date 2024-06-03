import { IncomingMessage, ServerResponse } from 'http';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

export const userRoutes = (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;

  if (url!.startsWith('/users')) {
    if (method === 'GET') {
      return getUsers(req, res);
    }
    if (method === 'POST') {
      return createUser(req, res);
    }
    if (method === 'PUT') {
      return updateUser(req, res);
    }
    if (method === 'DELETE') {
      return deleteUser(req, res);
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
};
