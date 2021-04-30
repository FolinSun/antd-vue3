/**
 * Store utils
 */
import { Module, ModuleTree } from 'vuex';

/**
 * 自定义项目 Store Module 类型
 * 为自动导入的 store 做类型限制
 * [@/store/modules文件夹下定义的 store] 必须继承此类型
 */
export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true;
  name: string;
}

/**
 * 自动导入 Store
 */
export function importAllStore<S>(): ModuleTree<S> {
  const modules: ModuleTree<S> = {};
  try {
    // 导入 @/store/modules 下文件
    const requireContext: __WebpackModuleApi.RequireContext = require.context(
      '../store/modules',
      false,
      /\.ts$/
    );
    requireContext.keys().forEach((fileName) => {
      // 获取内容
      const modulesConent = requireContext(fileName);
      if (modulesConent.default) {
        const { name, ...module } = modulesConent.default;
        // 获取 PascalCase 命名
        const modulesName = name || fileName.replace(/^\.\/(.*)\.\w+$/, '$1');

        modules[modulesName] = { ...module };
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return modules;
}
