// console.log("Hello World");
// let b: string = "Hello";
// let d: any = "Hello";
// let e: unknown = "Hello";
// let g: undefined = undefined;
// let h: void = undefined;
// let i: never
// let j: object = { name: "John", age: 30 };
// //函数定义类型,函数没有return值，返回类型为void
// function add(a: number, b: number): void {
//     console.log(a + b);
// }
// add(1, 2);
// function add2(a: number, b: number): number {
//     return a + b;
// }
// const num: number = add2(1, 2);
// console.log(num);
// // [number,number] = [...number[]] = number[] = Array<number>;
// let arr: [number, number] = [1, 2];
// let arr1: [...number[]] = [1, 2];
// let arr2: number[] = [1, 2];
// let arr3: Array<number> = [1, 2];
// let arr4: any[] = [1, 2];
// let arr5: (1 | 2)[] = [1, 2];
// // let arr6: string[] = ["1", "2"];
// type MyType = Object;//object类型
// type MyType1 = { name: string, age: number }
// type MyType2 = { [key: string]: any }
// type MyType3 = Record<string, any>;
// //字面量类型 （数值、字符串、布尔）
// let a: 1 = 1;
// let a1: "Hello" = "Hello";
// let a2: true = true;
// //联合类型
// let a3: 1 | "Hello" | true = true;
// let a4: string | number | boolean = "Hello";
// //交叉类型
// type A = { name: string };
// type B = { age: number };
// type C = A & B;
// let c: C = { name: "Hello", age: 18 };
// //类型别名


// let fn2: (a: number, b: number) => string = (a, b) => (a + b).toString();
// type D = { name: string };
// type E = { age: number };
// type F = D | E;
// let f: F = { name: "Hello", age: 18 };
// //类型的缩减 存在父子级别 会合并
// const ccc: 'str1' | 'str2' | string & {} = ""
// //&{}取消类型的缩减
// //never类型
// function error(message: string): never {
//     throw new Error(message);
// }
// const cccc: typeof a = a
// //ts 函数，指定参数类型范围[0,1,2,3]并且返回值类型对应参数类型
// function fn(a: 0 | 1 | 2 | 3): { name: string } | { age: number } | { sex: string } | { test: boolean } {
//     switch (a) {
//         case 0:
//             return { name: 'John' };
//         case 1:
//             return { age: 25 };
//         case 2:
//             return { sex: 'Male' };
//         case 3:
//             return { test: true };
//         default:
//             // 这里理论上不会执行，因为 a 的类型已经限定
//             throw new Error('Unexpected input');
//     }
// }
// // 函数 a参数 为数组，b参数为0或1，为0时返回数组求和，为1时返回字符串拼接的字符串
// function fn2(a: number[], b: 0 | 1): number | string {
//     if (b === 0) {
//         return a.reduce((a, b) => a + b, 0);
//     } else {
//         return a.join('');
//     }
// }
// // 为 Array 原型添加自定义 myMap 方法
// (<any>Array.prototype).myMap = function <T, U>
// (back: (item: T, index: number, array: T[]) => U): U[] {
//     const result: U[] = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(back(this[i], i, this));
//     }
//     return result;
// };
// //调用函数
// const ar:number[] = [1, 2, 3, 4];
// const result = (<any>ar).myMap((item:number) => item * 2);
// let _a; // 类型为 any,隐式类型
// _a = '当时法国'
// _a = 100;
// _a = {
//     name: 'John',
//     age: 25,
//     concat(a:any) {
//         return a
//     }
// }
// // const uu = _a.concat('111');
// // console.log(uu);
// let _b:any = '11';//类型为 any,显式类型，可以赋值任意类型，
// _b = 100;
// const _c = _b.concat('111');
// let _d: unknown; // 类型为 undefined
// // _d.concat('111'); // 报错，undefined 上没有 concat 方法
// //解决方法，使用类型断言
// (_d as string).concat('111');
// (<string> _d).concat('111');
// //泛型 
// function fn3<T>(a: T): T {
//     return a;
// }
// //元组 (元素不一致)
// const rar: [number, string, boolean] = [1, '2', true];
//枚举(数值枚举、字符串枚举、常量枚举)
var Color;
(function (Color) {
    Color["Red"] = "\u7EA2\u8272";
    Color["Green"] = "\u7EFF\u8272";
    Color["Blue"] = "\u84DD\u8272";
})(Color || (Color = {}));
function getColor(color) {
    if (color === Color.Red) {
        return '红色';
    }
    else if (color === Color.Green) {
        return '绿色';
    }
    else if (color === Color.Blue) {
        return '蓝色';
    }
}
// 调用getColor函数
var res = getColor('红色');
console.log(res);
function fn4() {
    console.log('fn4');
    // return;
}
function fn5() {
    console.log('fn5');
}
var user1 = {
    name: '张三',
    age: 18,
    sex: '男',
    address: {
        city: '北京',
        street: '长安街',
        zipcode: 100000
    }
};
var obj = {
    a: 1,
    b: '2',
    c: 3
};
var an = 'a';
function fn6(a, b) {
    return a + b;
}
