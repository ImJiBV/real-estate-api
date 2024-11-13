import { Body, Controller, HttpCode, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/core/decorators/public.decorators';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor (
        private readonly authService : AuthService 
    ) {}

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    authenticate(@Body(new ValidationPipe()) authDto: AuthDto){
       return this.authService.authenticate(authDto);
    }

}
