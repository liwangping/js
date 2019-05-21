兼容性不行
- scroll-behavior: smooth; 

chrome 支持css,但是其他主流浏览器怎么办？
scroll-behavior 失效
JS写 

scroll-behavior     ie不支持
兼容   hack   ie js window.scroolTo(0, 1/8); ie使用
requestAnimationFrame( 递归函数 ) 反复进行刷新执行函数
浏览器判断
navigator.userAgent.indexOf('Chrome') ! == -1

