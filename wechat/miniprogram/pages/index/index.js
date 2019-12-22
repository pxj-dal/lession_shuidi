const userUtils=require('../../utils/user.js');
Page({
  commitAccount(e){
    let values=e.detail.value;
    console.log(values);
    
    let {username,password}=values
  // 检测表单完整性 排除空格鍵
  if(!username.replace(/\s+/g,'')) {
    wx.showToast({
      title: '请输入用户名',
      icon: 'none'
    })
    return;
  }
  console.log(password);
    if (!password.replace(/\s+/g,'')) {
    wx.showToast({
      title: '请输入登录密码',
      icon: 'none'
    })
    return;
  }
  const token =this.getToken(username,password);
  console.log(token);
  this.login(token);
},
login(token){
  wx.showLoading({
    title:'正在登陸'
  })
  //將界面和網絡請求分開來
  userUtils
  .signIn(token)
  .then((data)=>{
    console.log(data);
    wx.showToast({
      title:'登錄成功',
      icon:'none'
    })

  })

},
getToken (username, password) {
  const str = username + ':' + password
  return 'Basic ' + wx.arrayBufferToBase64(new Uint8Array([...str].map(char => char.charCodeAt(0))))
}
})