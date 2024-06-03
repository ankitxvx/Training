"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const db_1 = require("../utils/db");
const url_1 = require("url");
const mongodb_1 = require("mongodb");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, db_1.connectDB)();
    const users = yield (0, userModel_1.getUserCollection)(db).find().toArray();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, db_1.connectDB)();
        const user = JSON.parse(body);
        const result = yield (0, userModel_1.getUserCollection)(db).insertOne(user);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.ops[0]));
    }));
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pathname } = (0, url_1.parse)(req.url, true);
    const id = pathname.split('/')[2];
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, db_1.connectDB)();
        const user = JSON.parse(body);
        yield (0, userModel_1.getUserCollection)(db).updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: user });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User updated' }));
    }));
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pathname } = (0, url_1.parse)(req.url, true);
    const id = pathname.split('/')[2];
    const db = yield (0, db_1.connectDB)();
    yield (0, userModel_1.getUserCollection)(db).deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User deleted' }));
});
exports.deleteUser = deleteUser;
