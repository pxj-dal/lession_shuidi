process.on('message',(str)=>{
    console.log('child'+str);
    //子进程把活给干了后，偷偷的跑到另外一个CPU 挂载一个进程 把多核能力运用起来。
    process.send('hehe');
})