import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

import { Repository } from 'typeorm';

// Dto
import { AuthDto } from './dto/auth.dto';

// Entity
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {


    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}
    
    saltOrRounds: number = 10;

    async authenticate(authDto: AuthDto ) : Promise<{ access_token: string, user: object }> {

        const user = await this.userRepository.findOne({
            select: {
                "userNo": true, "roleNo": true, "password": true,
            },
            where: {
                email: authDto.email
            },
        });          

        if(!user){
            throw new NotFoundException('Incorrect username or password.');
        }

        if (user?.password !== authDto.password) {
            const isMatch = await bcrypt.compare(authDto.password, user?.password);
            
            if (!isMatch) {
                throw new NotFoundException('Incorrect username or password.');
            }

            const payload = { role: user.roleNo, no: user.userNo };

            return {
                access_token: await this.jwtService.signAsync(payload),
                user: { 
                    no: user.userNo,
                    role: user.roleNo,
                }
            };
        }
    }
    



}
