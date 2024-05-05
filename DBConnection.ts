import {DataSource} from 'typeorm';

export const dbConnection=new DataSource({

    type:"mysql",
    host:"todolist.cpygkmakwokt.eu-north-1.rds.amazonaws.com",
    port:3306,
    password:"pritiraju",
    username:"root",
    database:"node_todo_list",
    synchronize:true,
    entities:[
       './Entity/*.ts'
    ]
})

