const fs = require('fs');
const image = fs.readFileSync('./cp.jpg').toString("base64");
 
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client =new AipOcrClient('17712430','RqrbmWECaouGx5YjauBlqEsw','RB59Egd5VKHWL7A2zRI7kpOqNvgE53mK');

const options = {};
options["multi_detect"] = "true";

client.licensePlate(image,options)
.then(function(result){
    console.log(result);
})