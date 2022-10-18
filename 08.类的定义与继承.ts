class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

const person = new Person();

console.log(person.getName());

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    // 重写父类方法
    return super.getName() + 'lee'; // 调用父类 super.getName()
    // return 'lee';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
