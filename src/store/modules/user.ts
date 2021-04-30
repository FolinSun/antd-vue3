import { Mutation, Action } from 'vuex';
import { StoreModuleType } from '@/utils/store';
import { ResponseData } from '@/utils/request';
import { userTest } from '@/api/user';
import { removeToken } from '@/utils/auth';

// 当前用户信息必有字段
export interface CurrentUser {
  id: number;
  name: string;
  avatar: string;
}

// 定义 State
export interface StateType {
  currentUser: CurrentUser;
}

export interface ModuleType extends StoreModuleType<StateType> {
  state: StateType;
  mutations: {
    SET_CURRENT_USER: Mutation<StateType>;
  };
  actions: {
    GetUserInfo: Action<StateType, StateType>;
    Logout: Action<StateType, StateType>;
  };
}

// state
const initState: StateType = {
  currentUser: {
    id: 0,
    name: '',
    avatar: '',
  },
};

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'user',
  state: {
    ...initState,
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = {
        ...initState.currentUser,
        ...payload,
      };
    },
  },
  actions: {
    async GetUserInfo({ commit }) {
      try {
        const response: ResponseData = await userTest();
        const { data } = response;
        commit('SET_CURRENT_USER', data || {});
        return true;
      } catch (error) {
        return false;
      }
    },
    async Logout({ commit }) {
      try {
        await removeToken();
        commit('SET_CURRENT_USER', { ...initState.currentUser });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default StoreModel;
