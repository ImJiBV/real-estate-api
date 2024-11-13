import * as bcrypt from 'bcrypt';

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';


import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) { }

    saltOrRounds: number = 10;


    async create(createUserDto: CreateUserDto, user: string) : Promise<UserDto> {
        const count = await this.userRepository.count();

        const data = this.userRepository.create(createUserDto);

        data.userNo = `UN-${(count + 1).toString().padStart(5, '0')}`
        data.password = await bcrypt.hash(data.password, this.saltOrRounds)

        data.createdBy = user || 'UN-00001';


        await this.userRepository.save(data)


        return plainToInstance(UserDto, data);
    }

    getProfile(id: string) {
        const result = this.userRepository.findOne({
            select: {
                "userNo": true, "roleNo": true, "email": true, "lastName": true, "firstName": true, "middleName": true,
            }, where: { userNo: id }
        })

        return result;
    }
   
    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
