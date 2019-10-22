import { Injectable } from '@nestjs/common';
import { Message } from '@crytid-new/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
