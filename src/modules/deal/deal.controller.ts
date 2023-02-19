import { Controller, HttpCode, Post, Res } from '@nestjs/common';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {
  constructor(private readonly contactServices: DealService) {}

  @Post()
  @HttpCode(201)
  async createContact(@Res() res) {
    try {
      const baseDomain = res.locals?.domain;
      const accessToken = res.locals?.token;
      const response = await this.contactServices.create(
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
