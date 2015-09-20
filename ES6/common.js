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

// arrow function
(x, y) => {
	console.log('babel!');
	return(x, y);
}

function f( x, y ) {
	return { x, y };
}