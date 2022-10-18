function hello() {}

const hello1 = function () {};

const hello2 = () => {};

function add(first: number, second: number): number {
  return first + second;
}

const total = add(1, 2);

function sayHello(): void {
  // void 函数没有返回值
  console.log('hello');
}

function errorEmitter(): never {
  // never 这个函数永远不可能执行到最后
  throw new Error();
  console.log(123);
}

function errorEmitter1(): never {
  // never 这个函数永远不可能执行到最后
  while (true) {}
  console.log(1);
}

function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
  return first;
}

const total1 = add1({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
