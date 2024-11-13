import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Houselisting {

    @PrimaryColumn()
    hlNo: string

    @Column()
    houseImage: string

    @Column()
    houseName: string

    @Column()
    totalCarCapacity: number

    @Column()
    totalBaths: number

    @Column()
    totalPax: number


    @CreateDateColumn({ name: 'createdAt' }) 
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt' }) 
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: Date;

}
