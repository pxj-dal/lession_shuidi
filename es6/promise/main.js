const fs = require('fs');
// fs.readFile('./a.txt',
// function(err,res){
//     if(err){
//         console.log(err);
//         return;    
//     }
//     // console.log(res);
//     //返回的是<Buffer 68 65 6c 6c 6f> 文件流
//     console.log(res.toString());
//      //返回的是hello 文件 
// })
function readFile(){
    // fs.readFile('./a.txt',function(err,res){
    //     if(err){
    //         console.log(err);
    //         return;}  
    //     console.log(res.toString());
    //     fs.readFile('./b.txt',function(err,res){
    //             if(err){
    //                 console.log(err);
    //                 return;}
    //             console.log(res.toString());
    //             fs.readFile('./c.txt',function(err,res){
    //                     if(err){
    //                         console.log(err);
    //                         return;}
    //                     console.log(res.toString());
    //                 });
    //         });
    //     });
    const aFile= fs.readFileSync('a.txt');
    console.log(aFile.toString());
    const bFile= fs.readFileSync('b.txt');
    console.log(bFile.toString());
    const cFile= fs.readFileSync('c.txt');
    console.log(cFile.toString());
}
readFile();