/*
	1. let(var声明的变量挂在windows下，而let不是)
	let仅在块内有效，而且不存在变量提升
	防止内层变量覆盖外层变量
	防止变量泄露成全局变量
*/
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _templateObject = _taggedTemplateLiteral(['Hello ', ' world ', ''], ['Hello ', ' world ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
	var a = 10;
}

/*
	2.const
	声明常量
	将对象声明成常量时注意，对象依旧可写，但不能被赋值
*/
{
	var MAX = 5;
}

/*
	3.数组解构赋值
	解构不成功的话变量等于undefined
	let,var,const都可以用
*/
{
	var a = 1;
	// 解构成功
	var b = 2;
	var c = 3;
	var head = 1;
	var tail = [2, 3, 4];
	var _ref = [1];
	// 解构失败
	var e = _ref[0];
	var _f = _ref[1];
	var _ref2 = [1, 2, 3];
	// 不完全解构
	var _x = _ref2[0];
	var _y = _ref2[1];
	var _foo = 'x';
	//使用默认值，必须要写undefined而不能写其他的
	var _undefined = undefined;
	var bar = _undefined === undefined ? 'y' : _undefined;
}

/*
	4.对象解构赋值
	与数组的区别：顺序不必相同，属性名必须相同
	对一个已经声明的变量(对象)用于解构赋值要小心，见例3
*/
{
	var _a$b = { a: 1, b: 2 };
	var a = _a$b.a;
	var b = _a$b.b;
	var _x2 = { x: 1 };
	//这个默认值有点怪
	var x = _x2.x;
	var _x2$y = _x2.y;
	var y = _x2$y === undefined ? 5 : _x2$y;
	var _foo2 = { foo: 1 };
	foo = _foo2.foo;
}

/*
	5.字符串解构赋值
*/
{
	var _hello = 'hello';

	var _hello2 = _slicedToArray(_hello, 5);

	var a = _hello2[0];
	var b = _hello2[1];
	var c = _hello2[2];
	var d = _hello2[3];
	var e = _hello2[4];
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
	var add = function add(_ref3) {
		var _ref32 = _slicedToArray(_ref3, 2);

		var x = _ref32[0];
		var y = _ref32[1];

		return x + y;
	};

	add([1, 2]);
}

/*
	7.字符串的扩展
	可以用``来输入字符串模板，并且可以保留空格和缩进
	``内可以调用变量${var}
*/
{
	var a = '𠮷';
	var s = '吉a';
	var string = 'Hello world!';

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
	var a = 5;
	var b = 10;

	tag(_templateObject, a + b, a * b);
}

// arrow function
(function (x, y) {
	console.log('babel!');
	return (x, y);
});

function f(x, y) {
	return { x: x, y: y };
}
