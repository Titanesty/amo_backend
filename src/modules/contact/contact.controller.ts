import { Controller, HttpCode, Post, Res } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactServices: ContactService) {}

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
