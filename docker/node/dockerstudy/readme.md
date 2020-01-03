- Koa 是最流行的node 轻量级框架
  egg.js 基于koa的二次开发.
- koa new一下->app->listen
  /bin/www
  www文件就是网站项目的启动文件.
  http.createServer(app.callback())
- 模板
    views
    koa-views() 套件
    app.use() 启用views中间件
    模板在哪里? 使用哪种模板引擎->pug
- 路由route
    routes/index.js
    koa-routes()
    .get post
    index.routes
    app.use()
- logger
    引入koa-logger use一下
- 出错模块
    

  