import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HouselistingModule } from './houselisting/houselisting.module';
import { ValidateApiMiddleware } from './middleware/validate-api.middleware';


@Module({
  imports: [ConfigModule.forRoot(), ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'upload'),
			serveRoot: '/upload',
		}), AuthModule, UserModule, HouselistingModule],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ValidateApiMiddleware).forRoutes('*');
	}
}
