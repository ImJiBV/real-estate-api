import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';


import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...userProvider , UserService],
})
export class UserModule {}
