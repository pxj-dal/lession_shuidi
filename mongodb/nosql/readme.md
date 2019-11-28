- NOSQL
    MYAQL 关系型数据库，
    database->table->fields
    NOSQL 不需要写SQL
    JSON object{} .save()
    find({})
    碎片化的，结构型并不是很良好的数据存储
    Mongodb 云开发数据库就是线上版的
    npm init -y 得到package.json文件
    npm install mongodb 安装得到node_modules
-       MYSQL             MONGODB
     关系型数据库;         NOSQL  Facebook 文档型;
     show databases;      show dbs;
                 use db;
     tables;              collections;
     SQL;                 JS 语法的面向对象api;

- 连接mongodb
    url mongodb://
- db.creatColllection('site',
funtion(err,res){
    //err 出错
    //异步的，耗时的，
    js里执行的代码不会阻塞
    db.close();
})
代码顺序
1. creatCollection
2. db.close() 在外面
执行顺序
1. create->去到mongodb->create->回来和我说
2. 接着往下执行


- 数据库，后端开发框架
    express
    node,后端就是app
    app.get('/',(req,res)=>
    res.send('hello world'))//定义路由
    app.listen(3000,)

     

