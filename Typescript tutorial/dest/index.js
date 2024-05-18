"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'hello'];
//tuple
let person = [1, 'Brad', true];
//tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'jill']
];
//union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "UP";
    Direction2["down"] = "DOWN";
    Direction2["left"] = "LEFT";
    Direction2["right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 4));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered `;
    }
}
const brad = new Person1(1, 'ankit');
const mike = new Person1(2, 'rahul');
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered `;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'Shawn', 'Developer');
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 3, 3, 4]);
let strArray = getArray(['asfs', 'asfsd', 'sfsdfs']);
numArray.push(1);
