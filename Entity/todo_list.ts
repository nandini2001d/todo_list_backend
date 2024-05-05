import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class node_todo_list{
     
    @PrimaryGeneratedColumn()
    "id":number;
     
    @Column()
    "title":string;

    @Column()
    "description":string;

    @Column()
    "email":string;

    @Column()
    "status":string;


}