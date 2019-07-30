# 知识清单
## Javascript 基础

### 变量和类型
#### 2019/07/30
1. `JavaScript`规定了几种数据类型？

`Javascript`是一种**弱类型**或者说**动态**语言。最新的`ECMAScript`标准定义了**7**种数据类型。
- 6 种原始类型：  `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol`(ES6新定义)
- 还有`Object`.

这里引申出一个疑问：那`function`是不是一种数据类型？

在 js 中，执行如下代码会打印`function`。

```js
typeof function（）{} // function
```

这里需要指出的是，`typeof`只是一个运算符，其返回值不能作为 js 类型系统的依据。因此，按照`spec`，`function`并不算是一种数据类型。`function`比较特殊，`spec`没有把它单独拿出来作为一种数据类型，可能是因为它同样有所有`object`的特性吧。

2. `Javascript`对象的底层数据结构是什么？

在计算机科学中，对象是指内存中的可以被**标识符**引用的一块区域。
在`Javascript`里，对象可以被看作是一组属性的集合。用对象字面量表语法来定义一个对象时，会自动初始化一组属性。

3. `Symbol`类型在实际开发中的应用，可手动实现一个简单的`Symbol`。

- `Symbol`在实际中，可以作为对象的私有属性。如下，

```js
const privateVal = Symbol('Private');
const obj = {
  [privateVal]: 'private',
  other: {}
}
console.log(obj) // {other: {…}, Symbol(Private): "private"}
```
上述代码中，如果外部无法取得`privateVal`变量时，也就无法访问到`obj`里的`Symbol`变量，因此适合用来作为不想被外部访问到的私有变量。

- 防止属性名冲突。

```js
let obj = {
  name: '1',
  name: '2', // 会覆盖前一个同名属性
}
console.log(obj); // {name: "2"}
```

在 js 中，对象属性名冲突，则后一个属性会覆盖前一个同名属性。这在引入一些第三方库的时候，会导致潜在的冲突风险。因此，可以使用`Symbol`防止属性名冲突。如下:

```js
const NAME1 = Symbol('name');
const NAME2 = Symbol('name');
consoel.log(NAME1 == NAME2); // false;
const obj = {
  [NAME1]: '1',
  [NAME2]: '2'
}
console.log(obj); // {Symbol(name): "1", Symbol(name): "2"}
```

4. `Javascript`中变量在内存中的具体表现形式。

5. 基本类型对应的内置对象，以及他们之间的装箱拆箱操作。

#### 2019/07/31


### 题目来源
1. [一名【合格】前端工程师的自检清单](https://juejin.im/post/5cc1da82f265da036023b628)

感谢上述的文章，以此来检验自己的能力与不足。🙏！