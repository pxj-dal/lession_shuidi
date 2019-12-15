- 工作流
     scripts 强化我们的开发
     dev 启动我们的HTTP协议 "dev": "live-server" 
     styl stylus 编译为css "styl": "stylus -w common.styl -o common.css"
     json-server 商家信息
     npm run命令可以找到插件并运行它。npm run api
- dom api 是过去式
    MVVM {{}} js->data: {{}}里是页面信息
    历史 切图仔 php/Java+ html/css 10年前 <%=message%> 前端不需要了解数据后端
    js 8年前 web 2.0 fetch / ajax js 主动请求数据前后端分庭抗礼 Dom/ api
    4年前 vue/react + noxide + flutter(客户端）+ go + docker 时代 MVVM时代 连数据也要处理

小程序和vue 都是一样的，
mvvm 优秀的地方在于 简单
- 天生集成数据驱动，data字段，输出内容：绑定属性--data{{}}:src
- 页面是响应式的，数据变即页面变


- inline-block 考点
    inline没有设置宽高 兄弟间相安无事
    block 兄弟间会换行
    两列式布局 inline-block 副作用：兄弟间产生间隙 
    浏览器实现inline-block的天坑 
    1.换行\n  font-size  父元素 font-size 0
    2.换行元素首尾相连 但是影响结构的可读性

- stylus 向css提供了函数功能
    利用返回值的叫函数
    要复用的css代码 完成了css模块化 mixin 混合

- 图片 手机的屏幕像素
    @media(media选择器) 条件 (-webkit-min-device-pixel-ration:3) 选择最小设备像素比例：3
    图片的命名  ...@2x.png ...@3x.png



