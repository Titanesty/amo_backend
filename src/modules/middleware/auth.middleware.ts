import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(public http: HttpService) {}

  public async getAuth() {
    console.log(process.env.AUTH_URL);
    return this.http.axiosRef.get(process.env.AUTH_URL, {
      headers: {
        'X-Client-Id': process.env.CLIENT_ID,
      },
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const response = await this.getAuth();
    res.locals.domain = response.data?.base_domain;
    res.locals.token = response.data?.access_token;
    next();
  }
}
