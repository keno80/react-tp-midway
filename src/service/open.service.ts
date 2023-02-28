import { Provide, makeHttpRequest } from '@midwayjs/core';
import { IOneSentenceRes } from '../interface';

@Provide()
export class OpenService {
  async getOneSentence(): Promise<IOneSentenceRes> {
    const result: any = await makeHttpRequest('https://v1.hitokoto.cn/?c=d', {
      dataType: 'json',
    });

    return {
      id: result.data.id,
      hitokoto: result.data.hitokoto,
      type: result.data.type,
      from_who: result.data.from_who,
      commit_from: result.data.commit_from,
    };
  }
}
