import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { DATA_SOURCE, USER_REPOSITORY } from 'src/core/constant/constant';

export const userProvider = [
  {
    provide: USER_REPOSITORY,
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];