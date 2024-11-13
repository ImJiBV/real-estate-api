import { DataSource } from 'typeorm';
import { Houselisting } from './entities/houselisting.entity';
import { DATA_SOURCE, HOUSE_REPOSITORY } from 'src/core/constant/constant';

export const listingProvider = [
  {
    provide: HOUSE_REPOSITORY,
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(Houselisting),
    inject: [DATA_SOURCE],
  },
];