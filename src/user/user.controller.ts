import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { GETUSER } from 'src/core/decorators/user.decorators';

@Controller('user')
export class UserController {
    
  constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body(new ValidationPipe()) createUserDto: CreateUserDto, @GETUSER() user: string) : Promise<UserDto> {
        return this.userService.create(createUserDto, user);
    }

    @Get('profile')
    profile(@GETUSER() user: string) {
        return this.userService.getProfile(user);
    }


    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
