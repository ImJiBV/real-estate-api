import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Houselisting } from '../entities/houselisting.entity';
import { IsOptional } from 'class-validator';

export class UpdateHouselistingDto extends OmitType(Houselisting, ['createdAt', 'deletedAt']) {
    
    @IsOptional()
    houseImage: string

    @IsOptional()
    houseName: string

    @IsOptional()
    totalCarCapacity: number

    @IsOptional()
    totalBaths: number

    @IsOptional()
    totalPax: number

    updatedAt: Date;

}
