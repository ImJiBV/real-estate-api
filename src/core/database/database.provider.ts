import { DataSource } from 'typeorm';

// Entities
import { User } from 'src/user/entities/user.entity';
import { Houselisting } from 'src/houselisting/entities/houselisting.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mariadb',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectTimeout: 10000,
        entities: [
          User, Houselisting
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];