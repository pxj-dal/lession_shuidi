const Controller= require('egg').Controller;
//java 语言
class LoginController extends Controller{
    async register(){
        //异步 存一条数据
        const { ctx }=this;
        const {password,username,email}=ctx.request.body;
        // service层 负责数据存储业务，和服务器对话
        // ctx.body='hi,egg';
        //分层
        console.log(password,username,email, '---------lgin');
        await ctx.service.user.register({password,username,email});
    }
    async loginIn(){
        const{ ctx }=this;
        //用户名 密码 ctx=req+res
        const { email,password }=ctx.request.body;
        console.log(email,password);
        ctx.body='登录成功'
    }
}
module.exports=LoginController;