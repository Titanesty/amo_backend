import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { AuthMiddleware } from './modules/middleware/auth.middleware';
import { HttpModule } from '@nestjs/axios';
import { ContactModule } from './modules/contact/contact.module';
import { DealModule } from './modules/deal/deal.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CompanyModule,
    ContactModule,
    DealModule,
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
