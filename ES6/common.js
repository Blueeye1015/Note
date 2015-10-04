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
	@ 函数参数的默认值:
		* 定义了默认值的参数，必须是函数的尾部参数
		* 参数传入null被赋值为null, 参数传入undefined传入则引用默认值
		* (function()).length 返回没有指定默认值的参数的个数，不会包括rest参数
		* 具有默认值的参数，在其作用域内不可被重新声明(let, const)
	@ rest参数：用于获取函数的多余参数
		* rest参数后不可以有其他参数
	@ 扩展运算符：三个点... 将一个数组转为用逗号分隔的参数序列(可以很好地代替apply)
	@ name属性 返回函数的属性名
	@ 箭头函数
		* 函数内this对象，绑定定义时所在的对象(固定的this对象)
		* 不可以当作构造函数(不可以new)
		* 不能使用arguments对象，要使用rest参数
		* 不可以使用yield命令
	@ 函数绑定(ES7)
	@ 尾调用优化、尾递归
*/
{
	function foo(x = 5, y = 6){ // 参数默认值
		console.log(x,y);
	}

	function add(...values) { // rest参数
		let sum = 0;

		for (var val of values) {
			sum += val;
		}

		return sum;
	}

	add(2, 5, 3) // 10

	console.log(...[1, 2, 3]) // 1 2 3
	console.log([..."hello"]) // [ "h", "e", "l", "l", "o" ]

	(x, y) => {
		console.log('babel!');
		return(x, y);
	}

	foo::bar; // bar.call(foo);
}
/*
	14.对象的扩展
	@ 直接写入变量和函数，作为对象的属性和方法
	@ 允许字面量定义对象时，用表达式作为对象的属性名
	@ Object.is() 用来判断两个值是否严格相等，与===基本一致(区别：NaN等于自身，+0不等于-0)
	@ Object.assign(target, source) 将源对象（source）的所有可枚举属性，复制到目标对象（target）
	  如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
		* 为对象添加属性
		* 为对象添加方法
		* 克隆对象
		* 合并多个对象
		* 为属性指定默认值
	@ Object.setPrototypeOf()
	@ Object.getPrototypeOf()
	@ Object.observe() 监听对象的变化,目前支持6种变化
		* 添加属性
		* 属性值的变化
		* 删除属性
		* 设置原型setPrototypeOf
		* 属性的attributes对象发生变化
		* 对象被禁止扩展
	@ Object.unobserve()
*/
{
	var o = {
		method() {
			return "Hello!";
		}
	};

	var a = {
		'first word': 'hello',
		[lastWord]: 'world'
	};
}
/*
	15.Symbol => 新的数据类型
	@ 用Symbol值作为对象的key，不会被常规方法遍历得到。可以作用于一些非私有，但只希望用于内部的方法
	@ Symbol值生成方式：let s = Symbol();
	@ 相同参数的Symbol函数的返回值是不相等的,切不能与其它类型的值进行运算
	@ Symbol可以作为属性名，能保证不会出现同名的属性(Symbol值作为对象属性名时，不能用点运算符)
	@ Object.getOwnPropertySymbols(obj) 返回一个包含所有Symbol属性名的数组(其他方式取不到Symbol属性名)
	@ Reflect.ownKeys(obj) 返回所有常规属性名和Symbol属性名的数组
	@ Symbol.for() 重新使用同一个Symbol值
	@ Symbol.keyFor() 获取 symbol 注册表中与某个 symbol 关联的键
*/
{
	var s1 = Symbol('foo');

	a[s1] = 'Hello!';

	let obj = {
		[s1](arg) {
			console.log(arg);
		}
	};

	var objectSymbols = Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

	var globalSym = Symbol.for("foo");
	Symbol.keyFor(globalSym); // "foo"

	obj[s1](123);
}
/*
	16.Proxy & Reflect
*/
{

}
/*
	17.二进制数组
*/
{

}
/*
	18.Set & Map
	@ Set类似于数组，但是成员的值都是唯一的 Set()本身是一个构造函数
		* Set.prototype.constructor() 默认就是Set函数
		* Set.prototype.size() 返回Set实例的成员总数
		* Set.add() 添加某个值，返回Set结构本身
		* Set.delete() 删除某个值，返回一个布尔值，表示删除是否成功
		* Set.has() 返回一个布尔值，表示该值是否为Set的成员
		* Set.clear() 清除所有成员，没有返回值
		* Set.keys() 返回一个键名的遍历器
		* Set.values() 返回一个键值的遍历器
		* Set.entries() 返回一个键值对的遍历器
		* Set.forEach() 使用回调函数遍历每个成员，没有返回值(类似于map)
	@ WeakSet与Set的区别
		* WeakSet的成员只能是对象，而不能是其他类型的值。
		* WeakSet中的对象都是弱引用，WeakSet是不可遍历的(没有size()和forEach()方法)
		* WeakSet.prototype.add() 向WeakSet实例添加一个新成员。
		* WeakSet.prototype.delete() 清除WeakSet实例的指定成员。
		* WeakSet.prototype.has() 返回一个布尔值，表示某个值是否在WeakSet实例之中。
	@ Map提供类似于“值—值”的对应
		* Map大部分成员方法与Set类似
		* Map也可以接受一个数组作为参数，数组的成员是一个个表示键值对的数组。
	@ WeakMap与Map唯一的区别是它只接受对象作为键名
*/
{
	var s = new Set();
	var set = new Set([1, 2, 3, 4, 4]) // [...set] = [1, 2, 3, 4]

	[2,3,5,4,5,2,2].map(x => s.add(x)) // 2 3 5 4

	// 数组元素去重
	let arr = [3, 5, 2, 2, 5, 5];
	let unique = [...new Set(arr)]; // [3, 5, 2]
	set = new Set([...set].map(x => x * 2)); // 将数组的方法作用于Set

	var map = new Map([["name", "张三"], ["title", "Author"]]);

	// WeakMap的使用例子，记录DOM节点点击状态
	// 一旦DOM节点删除，对应状态就会自动消失，不存在内存泄漏风险
	let myElement = document.getElementById('logo');
	let myWeakmap = new WeakMap();

	myWeakmap.set(myElement, {timesClicked: 0});

	myElement.addEventListener('click', function() {
		let logoData = myWeakmap.get(myElement);
		logoData.timesClicked++;
		myWeakmap.set(myElement, logoData);
	}, false);
}
/*
	19.Iterator & for...of
	@ Iterator主要就是为了给for...of使用
	@ Array, Set, Map, 字符串都具有原生的Iterator接口
*/
{
	let set = new Set().add('a').add('b').add('c');

	let [x,y] = set; // x='a'; y='b'

	let [first, ...rest] = set; // first='a'; rest=['b','c'];

	const arr = ['red', 'green', 'blue'];

	for(let v of iterator) {
		console.log(v); // red green blue
	}
}
