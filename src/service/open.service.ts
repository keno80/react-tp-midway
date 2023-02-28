import { Inject, Provide, makeHttpRequest } from '@midwayjs/core';
import { IOneSentenceRes } from '../interface';
import { RedisService } from '@midwayjs/redis';

@Provide()
export class OpenService {
  @Inject()
  redisService: RedisService;

  async getOneSentence(): Promise<IOneSentenceRes> {
    let data = {} as IOneSentenceRes;

    // 如果redis中有数据则取出返回
    const redis_data = await this.redisService.get('sentence');
    if (redis_data) {
      data = JSON.parse(redis_data);
    } else {
      // 如果没有则请求数据并存入redis
      const result: any = await makeHttpRequest('https://v1.hitokoto.cn/?c=d', {
        dataType: 'json',
      });

      data = {
        id: result.data.id,
        hitokoto: result.data.hitokoto,
        type: result.data.type,
        from_who: result.data.from_who,
        commit_from: result.data.commit_from,
      };

      await this.redisService.set('sentence', JSON.stringify(data));
    }

    return data;
  }
}
