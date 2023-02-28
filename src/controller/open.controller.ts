import { Controller, Get, Inject } from '@midwayjs/core';
import { OpenService } from '../service/open.service';
import { IOneSentenceRes } from '../interface';

@Controller('/open')
export class OpenController {
  @Inject()
  openService: OpenService;

  @Get('/sentence')
  async getOneSentence(): Promise<IOneSentenceRes> {
    return this.openService.getOneSentence();
  }
}
