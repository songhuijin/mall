let baseURL;
switch(process.env.NODE_ENV){
  case 'development':
    baseURL = 'http://dev-mall-pre.sprongboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.sprongboot.cn/api';
    break;
  case 'production':
    baseURL = 'http://pro-mall-pre.sprongboot.cn/api';
    break;
  default:
    baseURL = 'http://dev-mall-pre.sprongboot.cn/api';
    break;
}


export default {
  baseURL
}