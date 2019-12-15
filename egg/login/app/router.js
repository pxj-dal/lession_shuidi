'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 登录用post
  // 大部分网站需要多个模块   /register？  /login/register
  //注册 req(请求) res(响应) 控制器层login里的register方法
  router.post('/login/register',controller.login.register);
  // 登录 post 请求login登录
  router.post('/login',controller.login.loginIn);
};
