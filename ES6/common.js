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
*/
{
	let {a, b} = {a: 1, b: 2};
}

// arrow function
(x, y) => {
	console.log('babel!');
	return(x, y);
}

function f( x, y ) {
	return { x, y };
}