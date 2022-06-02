import { BaseEntity, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Guests extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    first_name!: string;
    
    @Column()
    last_name!: string;
    
    @Column()
    instagram!: string;

    @Column()
    age!: string;

    @Column()
    mobile!: string;

    @Column()
    promoter!: string;

    @CreateDateColumn()
    date!: Date
}