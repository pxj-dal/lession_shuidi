//引入
const Koa=require('koa');
const app=new Koa();
const views=require('koa-views');
const logger=require('koa-logger');
const onerror=require('koa-onerror');
const bodyparser=require('koa-bodyparser');
//中间件式
//分层
const index=require('./routes/index')
const fs=require('fs');
app.use(bodyparser({
    enableTypes:['json','form','text']
}));
app.use(require('koa-static')(__dirname+'/public'));
onerror(app);
// app.use(ctx=>{
//     //想要返回的响应体
//     ctx.body=fs.createReadStream('dffaf');
// });


//启用
app.use(logger());
app.use(views(__dirname+'/views',{
    extension:'pug'
}));
app.use(index.routes(),index.allowedMethods())
//模块化,COMMONJS
module.exports=app;

