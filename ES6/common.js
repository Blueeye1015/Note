/*
	1. let(var声明的变量挂在windows下，而let不是)
	let仅在块内有效，而且不存在变量提升
	防止内层变量覆盖外层变量
	防止变量泄露成全局变量
*/
{
	let a = 10;
}

/*
	2.const
	声明常量
	将对象声明成常量时注意，对象依旧可写，但不能被赋值
*/
{
	const MAX = 5;
}

/*
	3.数组解构赋值
	解构不成功的话变量等于undefined
	let,var,const都可以用
*/
{
	let [a, [[b], c]] = [1, [[2], 3]]; // 解构成功
	let [head, ...tail] = [1, 2, 3, 4];
	let [e, f] = [1]; // 解构失败
	let [x, y] = [1, 2, 3]; // 不完全解构
	let [foo, bar = 'y'] = ['x', undefined]; //使用默认值，必须要写undefined而不能写其他的
}

/*
	4.对象解构赋值
	与数组的区别：顺序不必相同，属性名必须相同
	对一个已经声明的变量(对象)用于解构赋值要小心，见例3
*/
{
	let {a, b} = {a: 1, b: 2};
	var {x, y = 5} = {x: 1}; //这个默认值有点怪
	({foo} = {foo: 1});
}

/*
	5.字符串解构赋值
*/
{
	const [a, b, c, d, e] = 'hello';
}

/*
	6.函数参数的解构赋值

	小结解构赋值用途:
		* 交换变量的值
		* 从函数返回多个值
		* 函数参数的定义
		* 提取JSON数据
		* 遍历MAP结构
		* 输入指定模块方法
*/
{
	function add([x, y]) {
		return x + y;
	}
	add([1, 2]);
}

/*
	7.字符串的扩展
	可以用``来输入字符串模板，并且可以保留空格和缩进
	``内可以调用变量${var}
*/
{
	let a = '\u{20BB7}';
	let s = '吉a';
	let string = 'Hello world!';

	String.fromCodePoint(0x20BB7);

	s.codePointAt(0); // 134071

	'abc'.at(0); // a
	'吉林'.at(0); // 吉

	string.startsWith('Hello');
	string.endsWith('!');
	string.includes('o');

	'haha'.repeat(2); // 'hahahaha'
}

/*
	8.标签模板
*/
{
	let a = 5;
	let b = 10;

	tag`Hello ${a + b} world ${a * b}`;
}

/*
	9.二进制与八进制的表示: 0b, 0o
*/

/*
	10.新增Number对象扩展
	@ Number.isFinite() 判断是否是无穷数
	@ Number.isNaN() 判断是否是NaN
	@ Number.parseInt()
	@ Number.parseFloat()
	@ Number.isInteger() 是否是整数
	@ Number.EPSILON = 2.220446049250313e-16 一个极小的数值，用来检查误差
	@ Number.MAX_SAFE_INTEGER 2^53
	@ Number.MIN_SAFE_INTEGER -2^53
	@ Number.isSafeInteger() 是否在安全整数范围内
*/

/*
	11.新增Math对象常用扩展
	@ Math.trunc() 去除一个数的小数部分
	@ Math.sign() 正数返回+1, 负数返回-1, ±0返回±0, 其他值返回NaN
	@ Math.cbrt() 计算立方根
	@ Math.clz32() 返回一个数的32位无符号整数形式有多少个前导0(二进制)
	@ Math.imul() 返回两个数以32位带符号整数形式相乘的结果
	@ Math.fround() 返回一个数的单精度浮点数形式
	@ Math.hypot() 返回所有参数的平方和的平方根
	@ ES7指数运算符 **
*/

/*
	12.数组的扩展
	@ Array.from() 将类数组(可遍历)对象转换成真正的数组，可接受第二个参数来处理值
	@ Array.of() 将一组值，转换为数组
	@ Array.prototype.copyWithin(target, start = 0, end = this.length)
	@ Array.prototype.find() 参数是一个回调函数，
							 所有数组成员依次执行该回调函数,
							 直到找出第一个返回值为true的成员，然后返回该成员。
							 如果没有符合条件的成员，则返回undefined
	@ Array.prototype.findIndex() 如果没有符合条件的成员，则返回-1
	@ Array.fill() 填充一个数组
	@ Array.keys() 返回一个遍历器对象
	@ Array.values() 同上
	@ Array.entries() 同上
	@ Array.includes() 返回一个布尔值，表示某个数组是否包含给定的值(ES7方法)
					   与indexOf相比，返回布尔值更为直观、其次可以对NaN进行准确的判断
*/
{
	let namesSet = new Set(['a', 'b'])
	Array.from(namesSet) // ['a', 'b']
	Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]

	Array.of(3, 11, 8) // [3,11,8]

	[1, 4, -5, 10].find((n) => n < 0) // -5
	['a', 'b', 'c'].fill(7) // [7, 7, 7]

	for (let index of ['a', 'b'].keys()) {
		console.log(index); // 0 1
	}
}
/*
	13.函数的扩展
*/
// arrow function
(x, y) => {
	console.log('babel!');
	return(x, y);
}

function f( x, y ) {
	return { x, y };
}