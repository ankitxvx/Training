"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = exports.usersCollection = void 0;
const mongodb_1 = require("mongodb");
Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function () { return mongodb_1.ObjectId; } });
const url = 'mongodb+srv://ankitcoolzzzz:root@cluster0.dzib6jp.mongodb.net/';
const dbName = 'testdb';
const client = new mongodb_1.MongoClient(url);
client.connect().then(() => {
    console.log('connected to DB');
}).catch((err) => {
    console.error(err);
});
const db = client.db(dbName);
const usersCollection = db.collection('users');
exports.usersCollection = usersCollection;
