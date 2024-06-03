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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const utils_1 = require("../utils");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.usersCollection.find().toArray();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
});
exports.getUsers = getUsers;
const getUserById = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.usersCollection.findOne({ _id: new userModel_1.ObjectId(id) });
    if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield (0, utils_1.getRequestBody)(req);
    const newUser = JSON.parse(body);
    const result = yield userModel_1.usersCollection.insertOne(newUser);
    const insertedUser = yield userModel_1.usersCollection.findOne({ _id: result.insertedId });
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(insertedUser));
});
exports.createUser = createUser;
const updateUser = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield (0, utils_1.getRequestBody)(req);
    const updatedUser = JSON.parse(body);
    const result = yield userModel_1.usersCollection.updateOne({ _id: new userModel_1.ObjectId(id) }, { $set: updatedUser });
    if (result.matchedCount > 0) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User updated successfully' }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userModel_1.usersCollection.deleteOne({ _id: new userModel_1.ObjectId(id) });
    if (result.deletedCount > 0) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User deleted successfully' }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
});
exports.deleteUser = deleteUser;
