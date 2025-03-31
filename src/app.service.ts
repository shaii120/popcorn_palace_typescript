import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!S';
  }

  test(): string {
    return 'test!';
  }
}
