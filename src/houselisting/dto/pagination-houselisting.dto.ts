import { Transform, Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsPositive } from "class-validator";
import { toNumber } from "src/config/helper/cast.helper";

export class HouseListingPagination {

    
    @IsNotEmpty()
    @Transform(({ value }) => toNumber(value))
    @IsInt()
    @IsPositive()
    @Type(() => Number)
    rowsPerPage: number;

    @IsNotEmpty()
    @Transform(({ value }) => toNumber(value))
    @IsInt()
    @IsPositive()
    @Type(() => Number)
    page: number;

}
