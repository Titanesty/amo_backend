import { Controller, HttpCode, Post, Res } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyServices: CompanyService) {}

  @Post()
  @HttpCode(201)
  async createCompany(@Res() res) {
    try {
      const baseDomain = res.locals?.domain;
      const accessToken = res.locals?.token;
      const response = await this.companyServices.create(
        baseDomain,
        accessToken,
      );
      res.send({
        response: response.data?._embedded,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
