import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1677481052686_9199',
  koa: {
    port: 7001,
  },
  redis: {
    client: {
      port: 21517,
      host: 'www.chkai.cn',
      password: 'c@kai123..',
      db: 0,
    },
  },
} as MidwayConfig;
