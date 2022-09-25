import { BaseEntity, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Events extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    code!: string;

    @Column()
    title!: string;

    @Column()
    label_1!: string;

    @Column()
    label_2!: string;

    @Column()
    label_3!: string;

    @Column()
    label_4!: string;

    @Column()
    label_5!: string;

    @Column()
    label_6!: string;

    @Column()
    label_7!: string;
    
    @CreateDateColumn()
    date!: Date
}