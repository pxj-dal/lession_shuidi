'use strict';
//predicate 用户自定义函数
//返回符合条件的元素下标 如果没有找到返回-1
function findIndex(array,predicate,context){
    //函数执行时,要考虑他的上下文环境.
    for(var i=0;i<array.length;i++){
        if(predicate.call(context,array[i],i)){
            return i;
        }
    }
    return -1;  
}
console.log(findIndex([1,2,3,4],function(item,i){
    console.log(this);
    if(item==3) return true;
},[1,2,3,4]));