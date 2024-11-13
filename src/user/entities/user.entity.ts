import { Exclude } from "class-transformer";

import { Entity, PrimaryColumn, Column, CreateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    userNo: string

    @Column()
    roleNo: string;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column({ default: null })
    middleName: string;

    @Column()
    lastName: string;

    @Column('longtext')
    @Exclude()
    password: string;

    @Column()
    createdBy: string;

    @Column({ default: null })
    updatedBy: string;

    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: Date;

}
