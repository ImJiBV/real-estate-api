import { IsDateString, IsInt, IsNotEmpty, IsOptional } from "class-validator";


export class CreateHouselistingDto {

    @IsNotEmpty()
    houseImage: string

    @IsNotEmpty()
    houseName: string

    @IsNotEmpty()
    totalCarCapacity: number

    @IsNotEmpty()
    totalBaths: number

    @IsNotEmpty()
    totalPax: number

    createdAt: Date;
}
