/**
 * 类的继承
 */
class MMD{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log('啊啊啊啊！');
    }
}

class ZSR extends MMD{
    constructor(name,age,sex){
        //父类中的构造器，子类中的super()就是父类中构造器的引用；
        super(name,age);
        this.sex=sex;
    }

}
const a=new ZSR('zsr',23,'male');
console.log(a);
a.say();

class LH extends MMD{

}
const b=new LH('lh',23);
console.log(b);
b.say();

