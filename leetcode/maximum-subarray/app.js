//o(n2)->o(n)
function maxSubArray(nums){
    var max =-Number.MAX_VALUE;
    var sum =0;
    for(let num of nums){
        if(sum<0){
            // 加了和没加一样
            sum=0;
        }
        sum+=num;
        max=Math.max(max,sum);//比较
        //加到了什么？让从下一个数开始 什么情况放弃之前加的值
        // 不管最大子和是多少，它都是一

    
    }
    return max;
}
console.log(maxSubArray([1,1,-3,4,-1,2,1,-5,4]));