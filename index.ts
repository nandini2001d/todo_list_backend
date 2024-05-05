import express,{Request,Response} from "express";
import {dbConnection} from './DBConnection';
import { node_todo_list } from "./Entity/todo_list";

const cors = require('cors');

const app=express();
const PORT=7531;

//midalware to cross origin
app.use(cors());
app.use(express.json());

dbConnection.initialize().then(()=>{
    console.log("Database Connect");
}).catch((errer)=>{
    console.log("errer");
})

const repository=dbConnection.getRepository(node_todo_list);

//get all by email
  app.get('/todolists/email/:email',async(req:Request,res:Response)=>{

      let data = await repository.find({
        where:[{
            email:req.params.email
        }]
      })
      res.send(data);
  });

//get all by status
  app.get('/todolists/status/:status/:email',async(req:Request,res:Response)=>{

     let data = await repository.find({
        where:[{
            status:req.params.status,
            email:req.params.email
        }]
     })
      res.send(data);
  });

//get all by title
 app.get('/todolists/title/:title',async(req:Request,res:Response)=>{

     let data = await repository.find({
        where:[{
            title:req.params.title
        }]
     })
     res.send(data);
 });

//post todo-list
app.post('/todolists',async(req:Request,res:Response)=>{

    let data = await repository.save(req.body);
    res.send(data);

})

//update status by id
app.put('/todolists/status/:id', async (req:Request,res:Response)=>{

    let data = await repository.update(req.params.id,req.body);
    res.send(data);

})


app.listen(PORT,():void=>{
    console.log("Server Is Start");
})