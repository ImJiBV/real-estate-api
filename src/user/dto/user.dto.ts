import { Exclude } from "class-transformer";

export class UserDto {
  
    userNo: string

    roleNo: string;

    email: string;

    firstName: string;

    middleName: string;

    lastName: string;
    
    @Exclude()
    password: string;

    @Exclude()
    createdBy: string;
    
    @Exclude()
    updatedBy: string;

    @Exclude()
    createdAt: Date;
  
    @Exclude()
    updatedAt: Date;

    @Exclude()
    deletedAt: Date;

}
