function Person(name,age){
    this.name=name;
    this.age=age;
}

// 覆盖了Object上原有的toString方法--就是多态。
Person.prototype.toString=function(){
    return 'I am a Person,my name is'+this.name;
}

function Man(name,age){
    console.log(arguments,'------');
    //Person是一个类，一个构造函数 先把父类的构造函数执行一下。
    Person.apply(this,arguments);
}
Man.prototype=Object.create(Person.prototype);

//toString 覆盖掉父类toString
Man.prototype.toString=function(){
    return 'I am a 007 ,my name is'+ this.name;
}
var cxc=new Man("陈新初",19);
console.log(cxc+"");


var person=new Person('黄梅',19);
console.log(person+"");//+"" 后，类型转换 调用tostring方法
const arr=['陈新初','陈方闻'];
console.log(Object.prototype.toString.call(arr));
//[object Array]

