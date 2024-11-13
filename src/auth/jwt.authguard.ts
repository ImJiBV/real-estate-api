import {
    ExecutionContext,
    Inject,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

import { Request } from 'express';


import { jwtConstants } from 'src/core/constant/constant';
import { IS_PUBLIC_KEY } from 'src/core/decorators/public.decorators';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
  
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>, 
        private jwtService: JwtService, 
        private reflector: Reflector
    ) {
      super();
    }
  
    async canActivate(context: ExecutionContext): Promise<any> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
            token,
                {
                    secret: jwtConstants.secret
                }
            );

            request['user'] = payload;

            const user = await this.userRepository.findOne({
                select: ['userNo'],
                where: {
                    userNo: request['user'].no
                }}
            );

            
            request.no = request['user'].no; 
        

            if(!user) throw new UnauthorizedException();

        } catch {
            throw new UnauthorizedException();
        }
        
        return super.canActivate(context);
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
  