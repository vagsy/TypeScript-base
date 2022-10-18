// getter and setter

// class Person {
//   // 私有属性加下划线和get相配合
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' lee';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('dell');
// // person._name;
// console.log(person.name); // 不需要()
// person.name = 'dell lee';
// console.log(person.name);

// 单例模式
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('dell lee');
    }
    return this.instance;
  }
}

// const demo1 = new Demo();
// const demo2 = new Demo();

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
