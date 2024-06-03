import { createServer, IncomingMessage, ServerResponse } from 'http';
import { userRoutes } from './routes/userRoutes';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  userRoutes(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
