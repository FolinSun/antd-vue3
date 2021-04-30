const Mock = require('mockjs');
const { VUE_APP_BASE_URL } = process.env;
const ajaxHeadersTokenKey = 'x-token';
const mock = {};

// 登录接口
mock[`POST ${VUE_APP_BASE_URL || ''}/user/login`] = (req, res) => {
  const { password, username } = req.body;
  const send = { code: 0, data: {}, msg: '' };
  if (username === 'admin' && password === '123456') {
    send['data'] = {
      token: 'admin',
    };
  } else if (username === 'user' && password === '123456') {
    send['data'] = {
      token: 'user',
    };
  } else if (username === 'test' && password === '123456') {
    send['data'] = {
      token: 'test',
    };
  } else {
    send['code'] = 201;
    send['msg'] = 'Wrong username or password';
  }

  res.send(send);
};

// 用户信息
mock[`GET ${VUE_APP_BASE_URL}/user/info`] = (req, res) => {
  const headers = req.headers;
  if (headers[ajaxHeadersTokenKey] === 'admin') {
    res.send({
      code: 0,
      data: {
        id: 1,
        name: 'Admins',
        avatar: '',
        roles: ['admin'],
      },
    });
  } else if (headers[ajaxHeadersTokenKey] === 'user') {
    res.send({
      code: 0,
      data: {
        id: 2,
        name: 'Users',
        avatar: '',
        roles: ['user'],
      },
    });
  } else if (headers[ajaxHeadersTokenKey] === 'test') {
    res.send({
      code: 0,
      data: {
        id: 3,
        name: 'Tests',
        avatar: '',
        roles: ['test'],
      },
    });
  } else {
    res.send({
      code: 10002,
      data: {},
      msg: '未登录',
    });
  }
};

mock[`GET ${VUE_APP_BASE_URL || ''}/user/test`] = (req, res) => {
  res.send({
    code: 0,
    msg: 'ok',
    data: Mock.mock('@integer(0,99)'),
  });
};

module.exports = {
  ...mock,
};
