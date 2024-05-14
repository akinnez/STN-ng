import { MD5 } from 'crypto-js';
function md5(text: any) {
  return MD5(text).toString();
}
export default md5;
