import {flag, sum} from "./aaa.js";

if (flag) {
  console.log(sum(10, 20));
  console.log("aaaaaaa")
}

import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

import {mul, Person} from "./aaa.js";

console.log(mul(10, 20));

var person = new Person();
person.run()

// default不用{} 而且可以随意命名
import addr from "./aaa.js";

console.log(addr)
addr('aaaaa')

// 统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(sum(20, 30));


