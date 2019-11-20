2019.11.20主题：
- 数据可视化
- 考点：使用requestAnimationFrame 请求运动(自己电脑频率相同的）帧
游戏开发中会使用requestAnimationFrame 来代替setInterval
    使用了一个funtion animstion(){
        console.log('-----');
        requestAnimationFrame(funtion(){//限制自己调用自己的频率
        animation();//如果没有requestAnimationFrame,自己调用自己--递归 会出现内存泄漏
        })
    }
    Animation();

-canvas 是画布
绘制API 画布默认大小？
考点：canvas.styles.width 标准的 要有单位
      canvas.width 设置的是html属性，不接受单位，只接受数值，默认单位是px
      ctx = canvas.getContext('2d');
      ctx = fillStyle = 'red';
      ctx.fillText(2,100,100);
      requestAnimation + clearRect();

