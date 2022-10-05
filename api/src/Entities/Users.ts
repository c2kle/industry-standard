import { BaseEntity, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;
    
    @Column()
    password!: string;

    @CreateDateColumn()
    date!: Date
}