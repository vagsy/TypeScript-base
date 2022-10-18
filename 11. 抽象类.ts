// class Person {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name
//   }
//   get name() {
//     return this._name
//   }
// }

// readonly
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const person = new Person('dell');
// person.name = 'hello';
// console.log(person.name);

// 抽象类- 通用类的东西做封装
// 抽象类只能被继承不能直接被实例化
abstract class Geom {
  width: number;
  getType() {
    return 'Geom';
  }
  abstract getArea(): number;
}
class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}

class Square {}

class Triangle {}

// 接口
interface Person {
  name: string;
}
interface Teacher extends Person {
  teachingAge: number;
}
interface Student extends Person {
  age: number;
}
interface Driver extends Person {
  age: number;
}
const teacher = {
  name: 'dell',
  teachingAge: 3
};
const student = {
  name: 'lee',
  age: 18
};
const getUserInfo = (user: Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
