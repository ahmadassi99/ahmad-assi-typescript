import express,{Application,Request,Response} from 'express';
import fs from 'fs';
import data from'../books.json';
const app:Application=express();
let books:{name:string,author:string,isbn:number}[]=data.books;

//:{name:string,author:string,isbn:number}
//  :{name:string,author:string,isbn:number}[]

app.get('/', (req:Request,res:Response)=>{
    // use 'as' as type assertion to set the value  as string.
    let name=req.query.name as string;
    // check if the string is not provided.
    if(!name){
        res.status(404).send("Starting name not found!, Try Again use (name=)");
        return;
    }
    //check the string if any book start with it.
    var book =books.filter((a)=>a.name.startsWith(name!));
    // check if there is no matched.
    if(book.length==0){
        res.send(`there is no any book starting with "${name}",Try Another`);
        return;
    }
    // if there is matche return these books.
    res.send(book);
})
app.listen(3000,()=>{
    console.log('connected on port 3000!');
})