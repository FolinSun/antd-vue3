const Mock = require('mockjs');
const { VUE_APP_BASE_URL } = process.env;
const mock = {};


mock[`GET ${VUE_APP_BASE_URL || ''}/menu`] = (req, res) => {
  res.send({
    code: 0,
    msg: 'ok',
    data: [
      {
        id: Mock.mock('@id'),
        name: '驾驶舱',
        menu: [
          {
            key: 'home',
            name: '综合看板',
            icon: 'icon-1',
          },
          {
            key: 'task',
            name: '工作任务',
            icon: 'icon-2',
          },
        ],
      },
      {
        id: Mock.mock('@id'),
        name: '双重预防',
        menu: [
          {
            key: 'hidden_trouble',
            name: '隐患排查',
            icon: 'icon-1',
          },
          {
            key: 'risk_control',
            name: '风险控制',
            icon: 'icon-2',
          },
        ],
      },
    ],
  });
};

module.exports = {
  ...mock,
};
