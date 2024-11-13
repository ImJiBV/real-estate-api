import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto extends OmitType(User, ['createdAt', 'deletedAt']) {
    
    @IsEmail()
    @IsOptional()
    email: string;

    @IsOptional()
    firstName: string;

    @IsOptional()
    middleName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    password: string;
    
    @IsNotEmpty()
    updatedBy: string;

    updatedAt: Date;
}

