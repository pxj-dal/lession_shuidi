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
- https://img.bosszhipin.com/
- https://www.zhipin.com/job_detail/1c491d20c1ddd7f50nZ409y6GFY~.html?ka=comp_joblist_5
静态资源    服务器端资源
IP?
静态资源
img.bosszhipin.com
1-> dns的解析? -> 网络供应商 列表 
公司会在网络供应商机房里去装一些cdn机器,如果本地没有?去中央服务器里请求一次 缓存到本地.
- koa-static
- 表单提交
    koa-bodyparser
    GET  请求头里 head GET请求->url?a=b&b=2
    POST head url
    body.length + body

# node的发布
    docker 容器化

node 项目->写完后->测试工程师进行测试->(环境?)
docker让项目在不同的机器享用相同的环境,跑起来.前提是装一个docker
    

  