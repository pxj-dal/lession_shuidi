// fileSystem 内置模块
// （定义）引入一个模板fs
const fs = require('fs');
// 引入aip图片分类客户端
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// console.log('hello node');
// base64是图片新格式,把图片字符串化
// 读取时等待数据读完，同步写法
const image = fs.readFileSync("car.jpg").toString("base64");
// console.log(image);

var client = new AipImageClassifyClient('17711763',
'QDCWxmm8N4B9iqXTAqvtf8op',
'4lCeoG2LaGPB2RDayhxZGF2OMNWwA6jq');

client
.carDetect(image)
.then(function(result){
    console.log(result)
})
// AipImageClassifyClient
// 回调函数 取回来再调用 属于异步写法
// 文件在哪？磁盘里 
// js 在哪里运行？内存 I/O操作
// fs.readFile('./text.txt',function(err,data){
//     if(err){
//         return console.error(err);

//     }
//     console.log(data.toString());
// })

