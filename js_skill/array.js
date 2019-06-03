//使用Object.prototype.toString配合闭包，这样子可以设立函数isArray来判断一个传入值是否为Array
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array') //注意传入的type参数时首字母大写
console.log(isArray([]))//true



