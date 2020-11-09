var name = '小明';
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 1 对象
export {
  flag, sum
}

// 2 字段
export var num1 = 1000;
export var height = 1.80;

// 3 导出函数和类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log('在奔跑')
  }
}

// 4 default 同一个模块有且智能有一个
// const address = '广州';
// export default address;

// 导出函数时不需写函数名
export default function (args) {
  console.log(args);
}

