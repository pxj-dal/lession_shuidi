- npm init -y 项目初始化
    现在希望像Java一样做后端？就是企业级开发框架
    npm init egg(模板) --type=simple 简单的egg.js项目。
    一、Egg.js是什么?
Egg.js 为企业级框架和应用而生，帮助开发团队和开发人员降低开发和维护成本。

- app
    node 应用程序 主要代码
- config就是配置文件夹
- test 测试目录


- egg的架构
    脚手架快速构建项目结构 
    web 开发主要是依靠http协议
    router.js 配置路由->cntroller(ctx上下文环境.request、body)
    ->model

    -D? devDependencies产品上线不需要了，是开发过程帮助开发的 
    开发阶段的依赖  mysql 的处理

    创建表
    执行sql
    sequelize-cli command-line 命令行工具

- sequelize 命令行集锦
    sequelize init 初始化数据库mysql的工作目录
    - config.json
    sequelize db:create
    创建一个表 
