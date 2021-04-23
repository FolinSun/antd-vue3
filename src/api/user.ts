import request from '@/utils/request';

// export async function queryCurrent(): Promise<any> {
//   return request({
//       url: '/user/info',
//       method: 'get'
//   });
// }

export const queryCurrent = (params: any): Promise<any> => {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  });
};
