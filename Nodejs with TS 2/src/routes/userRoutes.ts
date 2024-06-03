import { IncomingMessage, ServerResponse } from 'http';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controller/userController';
import { parse } from 'url';

const userRoutes = async (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);
  const id = parsedUrl.pathname?.split('/')[2];

  switch (req.method) {
    case 'GET':
      if (id) {
        await getUserById(req, res, id);
      } else {
        await getUsers(req, res);
      }
      break;
    case 'POST':
      await createUser(req, res);
      break;
    case 'PUT':
      if (id) {
        await updateUser(req, res, id);
      }
      break;
    case 'DELETE':
      if (id) {
        await deleteUser(req, res, id);
      }
      break;
    default:
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
};

export { userRoutes };
