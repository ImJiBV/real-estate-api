import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';

import { HouselistingService } from './houselisting.service';
import { HouselistingController } from './houselisting.controller';
import { listingProvider } from './houselisting.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [HouselistingController],
    providers: [...listingProvider, HouselistingService],
  
})
export class HouselistingModule {}
