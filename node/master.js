//主進程
const cp=require('child_process');
//__dirname返回物理路徑
const child_process=cp.fork(__dirname+'/child.js');
//公司 天下沒有難做的生意
//18人 員工
child_process.send('hah');//有些任务要交给它
child_process.on('message',(str)=>{
    console.log('parent',str);
})