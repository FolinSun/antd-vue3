/**
 * 自定义 token 操作
 */
import localforage from 'localforage';

// 默认名字
const TokenKey = 'AdminCookie';

/**
 * 获取本地Token
 */
export const getToken = async (name?: string): Promise<string | null> => {
  return await localforage.getItem(name ?? TokenKey);
};

/**
 * 设置存储本地Token
 */
export const setToken = async (
  token: string,
  name?: string
): Promise<boolean> => {
  try {
    await localforage.setItem(name ?? TokenKey, token);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 移除本地Token
 */
export const removeToken = async (name?: string): Promise<boolean> => {
  try {
    await localforage.removeItem(name ?? TokenKey);
    return true;
  } catch (error) {
    return false;
  }
};
