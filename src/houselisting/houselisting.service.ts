import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';


import { CreateHouselistingDto } from './dto/create-houselisting.dto';
import { UpdateHouselistingDto } from './dto/update-houselisting.dto';
import { HouseListingPagination } from './dto/pagination-houselisting.dto';
import { Houselisting } from './entities/houselisting.entity';

@Injectable()
export class HouselistingService {

    constructor(
        @Inject('HOUSE_REPOSITORY')
        private readonly listingRepository: Repository<Houselisting>,
    ) {}



    async create(createDto: CreateHouselistingDto, user: string, filePath: string) {
        const count = await this.listingRepository.createQueryBuilder('entity')
            .withDeleted()
            .getCount();


        const list = this.listingRepository.create(createDto);

        list.hlNo = `HL-${(count + 1).toString().padStart(5, '0')}`;
        list.houseImage = filePath;

        return this.listingRepository.save(list);
    }

    async findAllWithPagination(pagination : HouseListingPagination) : Promise<{ data: Houselisting[]; total: number, start:number, end:number, totalPages: number }> {

        const { page, rowsPerPage } = pagination;
        
         let queryBuilder = this.listingRepository.createQueryBuilder('houselisting')
        .select([
            'houselisting.hlNo',
            'houselisting.houseImage',
            'houselisting.houseName',
            'houselisting.totalCarCapacity',
            'houselisting.totalBaths',
            'houselisting.totalPax',
            'houselisting.createdAt',
        ]);

        const skip = (page - 1) * rowsPerPage

        const [data, total] = await queryBuilder
            .orderBy(`houselisting.hlNo`, 'DESC')
            .skip(skip)
            .take(rowsPerPage)
            .getManyAndCount();

        const totalPages = Math.ceil(total / rowsPerPage);

        const start = total === 0 ? 0 : (page - 1) * rowsPerPage + 1;
        const end = start + ( data.length > 0 ? data.length - 1 : 0 );

        const response = { total, data, page , start, end, totalPages, rowsPerPage }

        return response;

    }


    findOne(id: string) {

        const result = this.listingRepository.findOne({ where: { hlNo : id }})

        return result;
    }


     async update(id: string, update: UpdateHouselistingDto, user: string, filePath: string): Promise<Houselisting> {
        
        let data = await this.listingRepository.findOne({ where : { hlNo: id }});
        
        if (update) {
            Object.keys(update).forEach((key) => {
                data[key] = update[key];
            });
        }     

        data.houseImage = filePath;
        
        return await this.listingRepository.save(data);
    }


    async softDelete(id: string) {
        return await this.listingRepository.softDelete(id);
    }
}
