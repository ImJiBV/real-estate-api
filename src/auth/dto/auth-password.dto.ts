import { IsNotEmpty } from "class-validator";

export class AuthPasswordDto {
    @IsNotEmpty()
    password: string;
}