const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service{
    async register(user){
        const{ ctx }=this;
        console.log(user,'service');
        //密码不能存明文 单向加密
        user.password=crypto.createHmac('sha256','cxk1728cn')
        .update(user.password)
        .digest('hex');
        const userInfo=await 
        this.ctx.model.User.create(user);
        ctx.body={
            msg:'注册成功',
            useInfo
            // user_id:user.user_id
        }
    }
}
// 本模块向外输出
module.exports = UserService;