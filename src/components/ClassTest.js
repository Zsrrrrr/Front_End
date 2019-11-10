/**
 * 传统实现面向对象
 * @param {*} name 
 * @param {*} age 
 */
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.info='xxx';
Person.prototype.say=function(){
    console.log("这是Person的实例方法！");
}
Person.show=function(){
    console.log("这是Person的静态方法！");
}
/**
 * 1. 在堆上开辟一块内存；
 * 2. 将name=‘zsr’，age=23挂载到内存上；
 * 3. 把内存的指针/引用交给指针p；
 */
const p=new Person('zsr',23);
console.log(p);
console.log(Person.info);
p.say();
Person.show();


console.log('---------------------');

/**
 * 创建一个类：
 */
class MeMeDa{
    //构造器（构造函数）
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static info='hhh';
    say(){
        console.log('类的实例方法！');
    }
    static show(){
        console.log('类的静态方法！');
    }
}

const a=new MeMeDa('lh',23);
console.log(a);
console.log(a.name);
console.log(a.age);
console.log(MeMeDa.info);
a.say();
MeMeDa.show();
