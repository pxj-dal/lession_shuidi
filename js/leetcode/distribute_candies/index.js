/**
 * 
 * @param {Array length even} candies
 * @return {number} count 
 */
var distributeCandies = (candies)=>{
    let count = 0;
    // 1.种类数，unique
    // 出现过的？
    let obj = {};//对象字面量
    // candies.forEach(item =>{
    //     console.log(item);
    // })
    for(let item of candies){
        // console.log(item);
        if(!obj[item]){
            obj[item] = 1;
            count++;
        }
    }
    // if(count > candies.length/2){
    //     return candies.length/2;
    // }else{
    //     return count;
    // }
    //三目运算替代if else 右移运算>>1就是/2
    return (count >= candies.length >> 1) ? candies.length >> 1 : count;
    // return count;
}
//可分糖果的最大种类数
console.log(distributeCandies([1,1,2,2,3,3]));