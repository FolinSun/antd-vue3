import request from '@/utils/request';

export async function userTest(): Promise<any> {
  return request({
    url: '/user/test',
    method: 'get',
  });
}

export async function getMenu(): Promise<any> {
  return request({
    url: '/menu',
    method: 'get',
  });
}
