function err(msg) {
    throw new Error(msg);
}
function sum(a = err('第一个参数为空') , b = err('第二个参数为空')){
    // console.log(arguments[0]);
    // if (arguments[0] == 'undefined' && arguments[1] != 'undefined'){
    //     throw new error("第一个参数为空")
    // }else if(arguments[0] != 'undefined' && arguments[1] == 'undefined'){
    //     throw new error("第二个参数为空")
    // }else {
    // }  
    return a + b;
}

console.log(sum(1, 2))  // 3
console.log(sum(undefined, 10)) //报错，第一个参数为空.
console.log(sum(10))    //报错， 第二个参数为空
// 不允许改写函数体