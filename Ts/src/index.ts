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
// type fnType = (a: number, b: number) => number;
// let fn: fnType = (a,b) =>a+b;

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
// const cccc: typeof a = a;，

// 🐀，🐂，🐅，🐇，🐉，🐍，🐎，🐏，🐒，🐓，🐕，🐖
// function sort(arr:number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1+i; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }

//     }
// }
// const arr = [5, 3, 1, 4, 2]
// sort(arr)
// console.log(arr)
// const atext = 101
// let ab :100 = 100
// let ae :100 | 101 = 101
// let af :string | number = '100'
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

// enum Color {
//     Red = '红色',
//     Green = '绿色',
//     Blue = '蓝色'
// }
// function getColor(color: string) {
//     if (color === Color.Red) {
//         return '红色';
//     } else if (color === Color.Green) {
//         return '绿色';
//     } else if (color === Color.Blue) {
//         return '蓝色';
//     }
// }
// // 调用getColor函数
// const res = getColor('红色');
// console.log(res);
// function fn4(): undefined {
//     console.log('fn4');
//     // return;
// }
// function fn5(): void {
//     console.log('fn5');
// }
// //可选属性
// type Person = {
//     name: string;
//     age?: number;
//     sex?: string;
//     address: {
//         city: string;
//         street?: string;
//         zipcode?: number;
//     }
// }

// const user1: Person = {
//     name: '张三',
//     age: 18,
//     sex: '男',
//     address: {
//         city: '北京',
//         street: '长安街',
//         zipcode: 100000
//     }
// };

// //属性索引
// type Obj = {
//     [index: string]: number | string;
// }
// const obj: Obj = {
//     a: 1,
//     b: '2',
//     c: 3
// }
// type T = keyof Obj;
// const an: T = 'a';

// type C = {
//     name: string,
//     age: number,
// }
// //使用keyof in ,把C类型属性变成可选属性
// type D = {
//     [K in keyof C]?: C[K]
// }
// const d: D = {
//     name: '张三',
//     age: 18
// }
// //Partial<T>
// type E = Partial<C>
// const e: E = {
//     name: '张三'
// }
// //Required<T>
// type F = Required<C>
// const f: F = {
//     name: '张三',
//     age: 18
// }
// //Readonly<T>
// type G = Readonly<C>
// const g: G = {
//     name: '张三',
//     age: 18
// }
// //函数重载
// function fn1(a: number, b: number): number;
// function fn1(a: string, b: string): string;
// function fn1(a: any, b: any): any {
//     return a + b;
// }

// //定义购物车的商品类型
// type CartItem = {
//     id: number;
//     name: string;
//     price: number;
//     count: number;
//     isChecked: boolean;
//     changeCount?:(type:'+'|'-',count:number)=>void
// }

// type Cart = {
//     prodList:CartItem[]
//     getIsChecked:() => boolean;
//     setIsChecked:(status:boolean)=>void
// }
// const cart: Cart = {
//     prodList: [
//         { id: 1, name: '手机', price: 1000, count: 1, isChecked: true },
//         { id: 2, name: '电脑', price: 2000, count: 1, isChecked: false },
//     ],
//     getIsChecked() {
//         return this.prodList.some((item) => item.isChecked)
//     },
//     setIsChecked(status) {
//         this.prodList.forEach((item) => item.isChecked = status)
//     }
// }



// class Animal {
//     name: string = '动物';//实例属性
//     age: number = 0;
//     static cate = '动物';//静态属性
//     //构造函数,初始化类的属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     //静态访问方法
//     static move(distance: number = 0) {
//         console.log(`$ moved ${distance}m.`)
//     }
//     //get 访问器 获取数据
//     get AnimalName() {
//         if (this.name == "tiger") {
//             return "老虎";
//         } else if (this.name == "cat") {
//             return "猫";
//         }
//         return "未知动物"

//     }
//     //set 修改数据
//     set AnimalAge(age: number) {
//         if (age < 0) {
//             throw new Error("年龄不能为负数")
//         }
//         this.age = age;
//     }
// }
// //实例化类
// let a = new Animal("cat");
// a.AnimalAge = 10;
// console.log(a.AnimalName);
// console.log(a.age);
// //静态方法
// Animal.move(10);
// //静态属性
// console.log(Animal.cate);


// class Product {
//     //public 公共属性，可以在类的内部和外部访问
//     //private 私有属性，只能在类的内部访问
//     //protected 受保护的属性，只能在类的内部和子类中访问
//     //修饰类的成员，成员的作用域会受限制
//     protected name: string = '';
//     protected price: number = 0;
//     run(){
//         console.log(this.name,this.price);
//     }



// }
// class SubProduct extends Product {
//     test(){
//         console.log(this.name,this.price);      
//     }
// }
// let p = new Product();
// p.name = "手机";
// p.price = 1000;
// p.run();
// let s = new SubProduct();
// s.name = "电脑";
// s.price = 2000;
// s.test();
// s.run();


//接口：定义类的结构，定义类的成员
// 接口中的所有属性都不能有实际的值，只能定义生命函数
// interface Person {
//     run(): void;//定义函数
//     name: string;//属性

// }
//类接口：类实现接口
//类要实现接口，必须实现接口中的所有属性和方法
// class Student implements Person {
//     name: string = "张三";
//     run(): void {
//         console.log("run");
//     }
//     Roll(): void {
//         console.log("Roll");
//     }
// }
// function fn1(p : Person) {
//    p.run();
// }
//接口是不能被实例化的，new Person()是错误的
//传递的实参，是接口实现的类的对象
// fn1(new Student());
// fn1(new Product());

//父类引用子类，调用父类里面的函数，实际调用的是子类里面的函数，多态
//继承|多态|封装
// const ppp : Person = new Student();
// ppp.run();

//抽象类：提供其他类继承的基类，不能直接被实例化
// 介于类和接口之间，既可以定义成员，也可以定义抽象成员
//抽象类中的抽象方法，不包含具体实现，必须在子类中实现
//类 -> 完全实现 -> 实例化
//抽象类 -> 部分实现 ，不实现需要声名的抽象方法 -> 实例化
//接口 -> 完全不实现 -> 实例化
// abstract class Animal {
//     test(){
//         console.log("test");
//     }
//     abstract eat(): void;//不实现的，需要声名为抽象的
// }
// // 和接口一样，抽象类不能被实例化，只能被继承
// class Dog extends Animal {// 继承抽象类
//     eat(): void {
//         console.log("dog eat");
//     }
// }
// function text(a: Animal) {
//     a.eat();
// }
// text(new Dog());

//多态
//ts type interface  有什么区别
// 1.type 类型别名 ；interface 接口 约束类的公共行为
// 2.type不能够声名重复类型，但是接口可以，会把多个同名的接口合并，合并到一个接口里面去
// 3.type 可以声明基本类型，联合类型，元组，但是接口不行
// 4.type 是不能够继承和实现的，但是接口可以，也可以互相继承

//函数重载
// class A{
//     run(a:number):number
//     run(b:string):string
//     run(a:number | string):number|string{
//         if (typeof a == 'number') {
//             return a+1
//         }else{
//             return a+'string'
//         }
//     }
//     juge(){
//         console.log("juge");

//     }
// }
// const a:A = new A();
// a.run(1);
// a.run('1');
// //重写 override
// class B extends A{
//     override juge(){
//         console.log("重写");
//     }

// }
// const b:A = new B();
// // b.juge();
// //泛型
// function fn<X>(a:X):void{
//     console.log(a);
// }
// fn<string>('哥哥好厉害哟~')
// fn<number>(1)

// class A<X,Y,Z>{//泛型类
//     a:X[]=[]
//     b:Y[]=[]
//     c:Z[]=[]
//     add(a:X,b:Y,c:Z){
//         this.a.push(a)
//         this.b.push(b)
//         this.c.push(c)
//     }
//     fn(){
//         console.log(this.a,this.b,this.c);
//     }

// }
// const a:A<string,number,boolean> = new A();
// a.add('1',1,true)
// a.fn()

// interface IPerson<T>{
//     eat(fruit:T):void
// }
// class Person<T extends Cake | Fruit> implements IPerson<T>{
//     eat(fruit:T):void{
//         console.log(fruit.name);
//     }
// }
// class Cake{
//     name:string='蛋糕'

// }
// class Fruit{
//     name:string='水果'
// }
// class Dog{
//     name:string='狗'
// }
// const pDog:IPerson<Dog> = new Person<Dog>();
// const pFruit:IPerson<Fruit> = new Person<Fruit>();
// const pCake:IPerson<Cake> = new Person<Cake>();
// pDog.eat(new Dog())
// pFruit.eat(new Fruit())
// pCake.eat(new Cake())



// type F<T> = T extends (infer R)[] ? R : T;
// type A = F<string[]>;
// type B = F<number[]>;


// class SingleTon{
//     private constructor(){

//     }
//     static instance:SingleTon | null = null;
//     static getInstance(){
//         if(!SingleTon.instance){
//             SingleTon.instance = new SingleTon();
//         }
//         return SingleTon.instance;
//     }
// }
// const s11 = SingleTon.getInstance();
// const s22 = SingleTon.getInstance();
// console.log(s11 === s22);


// type ApiParameter = {
//     url :string;
//     method: 'get' | 'post' | 'put' | 'delete';
//     params:{[key:string]:string},
//     headers:{[header:string]:string}
// }
//只读属性
// type ReadonlyApiParameter = Readonly<ApiParameter>
// type PA = {
//     readonly name:string;
// }
// const a2:PA = {
//     name:'张三'

// }
// a2.name = '李四'

// Ts 类型辅助函数
// type PartialApiParameter = Partial<ApiParameter>
// type ReadonlyApiParameter = Readonly<ApiParameter>
// type RequiredApiParameter = Required<ApiParameter>
// type PickApiParameter = Pick<ApiParameter,'url'|'method'>
// type RecordApiParameter = Record<'a'|'b',ApiParameter>
// type ExcludeApiParameter = Exclude<'get'|'post'|'put'|'delete','get'>
// type OmitApiParameter = Omit<ApiParameter,'url'|'method'>
// type ParametersApiParameter = Parameters<(params:{name:string;age:number})=>void>
// type ReturnTypeApiParameter = ReturnType<(params:{name:string;age:number})=>void>
// class Ctest {
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// type InstanceTypeApiParameter = InstanceType<typeof Ctest>
// type ConstructorParametersApiParameter = ConstructorParameters<typeof Ctest>
//
abstract class Animal{
    abstract eat():void;
}


