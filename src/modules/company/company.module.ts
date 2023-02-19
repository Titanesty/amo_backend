import { Module } from '@nestjs/common';
import { CompanyController } from './сompany.controller';
import { CompanyService } from './company.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
