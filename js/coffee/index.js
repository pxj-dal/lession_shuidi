// 1.构建coffee类
// js面向对象比较特别
var Coffee = function(){//匿名函数 值是函数
    console.log('开始给您泡制咖啡，请稍等');
};
// js中方法 要添加在类的原型prototype上
Coffee.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInput = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function(){
    console.log('加糖和牛奶');
}
// 抽象 隐去一些执行的细节
Coffee.prototype.makeCoffee = function(){
    this.boilWater();
    this.brewCoffeeGriends();
    this.pourInput();
    this.addSugarAndMilk();
    console.log('咖啡做好了，请慢用！');
}

var coffee = new Coffee();
coffee.makeCoffee();
// coffee.boilWater();
// coffee.brewCoffeeGriends();
// coffee.pourInput();
// coffee.addSugarAndMilk();

function Tea(type){
//茶类
   this.type = type;
    console.log('开始给您泡制茶，请稍等');
}
Tea.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Tea.prototype.seepTeaBag = function(){
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup = function(){
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function(){
    console.log('加柠檬');
}
Tea.prototype.makeTea = function(){
    // this指向当前对象
    this.boilWater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('您的茶已经好了，请慢用！');
}
const tea = new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type);
