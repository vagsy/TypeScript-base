// interface 和 type 相类似，但并不完全一致

interface Person {
  // 接口
  // readonly name: string; // readonly 只读
  name: string; // readonly 只读
  age?: number; // age 可有可无
  [propName: string]: any; // 其他属性
  say(): string;
}

interface Teacher extends Person {
  // 接口继承
  teach(): string;
}

interface SayHi {
  // 定义函数的类型声明
  (word: string): string;
}

type Person1 = {
  // 类型别名
  name: string;
};

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  }
};

getPersonName(person);
setPersonName(person, 'lee');

class User implements Person {
  // 类应用 Person 接口, 类里必须存在接口中定义的属性
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};
