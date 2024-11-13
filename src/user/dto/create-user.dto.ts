import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto {

    userNo: string

    @IsNotEmpty()
    roleNo: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    middleName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    password: string;

    createdAt: Date;

}
