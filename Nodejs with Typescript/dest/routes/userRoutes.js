"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userController_1 = require("../controllers/userController");
const userRoutes = (req, res) => {
    const { method, url } = req;
    if (url.startsWith('/users')) {
        if (method === 'GET') {
            return (0, userController_1.getUsers)(req, res);
        }
        if (method === 'POST') {
            return (0, userController_1.createUser)(req, res);
        }
        if (method === 'PUT') {
            return (0, userController_1.updateUser)(req, res);
        }
        if (method === 'DELETE') {
            return (0, userController_1.deleteUser)(req, res);
        }
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
};
exports.userRoutes = userRoutes;
