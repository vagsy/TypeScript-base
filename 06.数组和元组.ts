// 数组
const numberArr: number[] = [1, 2, 3]; // 数组类型，每个值必须是 number 类型

const arr: (number | string)[] = [1, '2', 3];

const stringArr: string[] = ['a', 'b', 'c'];

const undefinedArr: undefined[] = [undefined];

// type alias 类型别名
const objectArr: { name: string; age: number }[] = [
  {
    name: 'dell',
    age: 18
  }
];

type User = {
  name: string;
  age: number;
};

const objectArr1: User[] = [
  {
    name: 'dell',
    age: 18
  }
];

class Teacher {
  name: string;
  age: number;
}

const objectArr2: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 18
  }
];

// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];

// csv
// dell, male, 18
// sun, female, 26
// jeny, female, 38
const teacherList: [string, string, number][] = [
  ['dell', 'male', 18],
  ['sun', 'female', 26],
  ['jeny', 'female', 38]
];
