import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { HouselistingService } from './houselisting.service';
import { CreateHouselistingDto } from './dto/create-houselisting.dto';
import { UpdateHouselistingDto } from './dto/update-houselisting.dto';
import { HouseListingPagination } from './dto/pagination-houselisting.dto';
import { GETUSER } from 'src/core/decorators/user.decorators';
import { extname } from 'path';

@Controller('houselisting')
export class HouselistingController {
  constructor(private readonly houselistingService: HouselistingService) {}

    @Post()
	@UseInterceptors(
		FileInterceptor('houseImage', {
			storage: diskStorage({
				destination: './upload/images',
				filename: (req, file, callback) => {
					const uniqueSuffix = `${Date.now()}${extname(file.originalname)}`;
					callback(null, `${file.originalname}-${uniqueSuffix}`);
				},
			}),
		}),
	)
    create(@Body() createDto: CreateHouselistingDto, @GETUSER() user: string, @UploadedFile() file: any) {
        const filePath = `upload/images/${file.filename}`;
        return this.houselistingService.create(createDto, user, filePath);
    }

    @Get()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    findAllWithPagination(@Query() pagination: HouseListingPagination) {
        return this.houselistingService.findAllWithPagination(pagination);
    }
   
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.houselistingService.findOne(id);
    }

    
    @Patch(':id')
    @UseInterceptors(
		FileInterceptor('houseImage', {
			storage: diskStorage({
				destination: './upload/images',
				filename: (req, file, callback) => {
					const uniqueSuffix = `${Date.now()}${extname(file.originalname)}`;
					callback(null, `${file.originalname}-${uniqueSuffix}`);
				},
			}),
		}),
	)
    update(@Param('id') id: string, @Body() update: UpdateHouselistingDto, @GETUSER() user: string, @UploadedFile() file: any) {
        console.log('test')
        const filePath = `upload/images/${file.filename}`;
        return this.houselistingService.update(id, update, user, filePath);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.houselistingService.softDelete(id);
    }
}
