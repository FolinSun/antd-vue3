/* eslint-disable @typescript-eslint/no-var-requires */
const bodyParser = require('body-parser');
const mockServer = require('./mock/mock-server');

const { VUE_APP_PORT, NODE_ENV, VUE_APP_MOCK, VUE_APP_BASE_URL } = process.env;

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  // 设置为true时，此选项将绕过主机检查。不建议这样做，因为不检查主机的应用容易受到DNS重新绑定攻击的攻击。
  // disableHostCheck: false,
  devServer: {
    port: VUE_APP_PORT || 9527,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: function (app) {
      // 本地开发环境使用 mock 模拟数据
      if (NODE_ENV === 'development' && VUE_APP_MOCK) {
        // simulation data
        app.use(bodyParser.json());
        // create application/x-www-form-urlencoded parser
        app.use(bodyParser.urlencoded({ extended: false }));
        mockServer(app);
      }
    },
    // 开发代理
    proxy: {
      [VUE_APP_BASE_URL]: {
        target: `http://localhost:${VUE_APP_PORT}`,
        // target是域名的话，需要这个参数
        changeOrigin: true,
        // 设置支持https协议的代理
        secure: false,
        // '^/api'
        // pathRewrite: { [`^${VUE_APP_BASE_URL}`]: '' },
      },
    },
  },
  css: {
    loaderOptions: {
      // vue.config.js for less-loader@5.0.0
      less: {
        //lessOptions: {
        modifyVars: {
          'primary-color': '#311be8',
          'link-color': '#311be8',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true,
        //},
      },
    },
  },
};
