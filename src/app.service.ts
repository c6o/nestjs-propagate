import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // make outbound call via any http library
    // expect specific headers to propagate
    const result = await axios.get('https://manytools.org/http-html-text/http-request-headers/');
    return result.data;
  }
}
