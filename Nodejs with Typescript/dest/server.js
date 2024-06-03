"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const userRoutes_1 = require("./routes/userRoutes");
const server = (0, http_1.createServer)((req, res) => {
    (0, userRoutes_1.userRoutes)(req, res);
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
