import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { userRoutes } from './routes/userRoutes';

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);

  if (parsedUrl.pathname?.startsWith('/users')) {
    await userRoutes(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
