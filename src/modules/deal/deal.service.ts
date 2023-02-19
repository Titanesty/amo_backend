import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DealService {
  constructor(public http: HttpService) {}

  async create(baseDomain: string, accessToken: string): Promise<any> {
    try {
      return await this.http.axiosRef.post(
        `https://${baseDomain}/api/v4/leads`,
        [{ name: 'Новое название компании', request_id: 777 }],
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  }
}
