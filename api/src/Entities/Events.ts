import { BaseEntity, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Events extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    code!: string;
    
    @CreateDateColumn()
    date!: Date
}