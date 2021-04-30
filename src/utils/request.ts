import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'ant-design-vue';

// 返回接口参数定义
export interface ResponseData {
  code: number;
  data?: any;
  msg?: string;
}

// 客户端自定义错误
// const customCodeMessage: { [key: number]: string } = {
//   100: '当前用户登入信息已失效，请重新登入再操作', // 未登陆
// };

const serverCodeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: '服务器发生错误，请检查服务器(Internal Server Error)',
  502: '网关错误(Bad Gateway)',
  503: '服务不可用，服务器暂时过载或维护(Service Unavailable)',
  504: '网关超时(Gateway Timeout)',
};

// 异常处理程序
const errorHandler = (error: any) => {
  const { response, message } = error;
  if (message === 'CustomError') {
    // 自定义错误处理
  } else if (response && response.status) {
    // 服务器端发生错误
    const errorText = serverCodeMessage[response.status] || response.statusText;
    const { status, request } = response;
    notification.error({
      message: `请求错误 ${status}: ${request.responseURL}`,
      description: errorText,
      duration: 3,
    });
  } else if (!response) {
    // 其他错误
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
      duration: 3,
    });
  }

  return Promise.reject(error);
};

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, //  api 的 base_url
  withCredentials: true, // 当跨域请求时发送cookie
  timeout: 0, // 请求超时时间(单位毫秒) 0表示不做限制
});

// request(请求)拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送前做点什么...
    return config;
  }
  // 已在 export default catch
  /* error=> {} */
);

// response (响应)拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res: ResponseData = response.data;
    const { code } = res;

    // 对响应数据做点什么
    if (code !== 0) {
      return Promise.reject({
        response,
        message: 'CustomError',
      });
    }

    return response.data;
  }
  // 已在 export default catch
  /* error => {} */
);

export default function (config: AxiosRequestConfig): AxiosPromise<any> {
  return service(config)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => errorHandler(error));
}
