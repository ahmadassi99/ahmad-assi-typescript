"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_json_1 = __importDefault(require("../books.json"));
const app = (0, express_1.default)();
let books = books_json_1.default.books;
//:{name:string,author:string,isbn:number}
//  :{name:string,author:string,isbn:number}[]
app.get('/', (req, res) => {
    // use 'as' as type assertion to set the value  as string.
    let name = req.query.name;
    // check if the string is not provided.
    if (!name) {
        res.status(404).send("Starting name not found!, Try Again use (name=)");
        return;
    }
    //check the string if any book start with it.
    var book = books.filter((a) => a.name.startsWith(name));
    // check if there is no matched.
    if (book.length == 0) {
        res.send(`there is no any book starting with "${name}",Try Another`);
        return;
    }
    // if there is matche return these books.
    res.send(book);
});
app.listen(3000, () => {
    console.log('connected on port 3000!');
});
