# crossorigin anonymous
link img script
代表要和后端协商跨域
1. anoymous
    在请求头中加上 Origin 属性
    如果拖过后端未设置 Access-control-allow-origin,
    图片就会出错
    script 标签中,如果没有设置 cors ,跨域 js 发生错误,将会向 window.onerror 提供很少的信息,
    通过 crossorigin 可以得到很详细的信息

2. use-credentials
   请求时候会带上 cookie 

# image 标签
1. 通过图片 src 上报日志，不浪费 ajax 资源
    204 No Content，只需要知道返回之后成功，声调多余数据传输

# localStorage
同一个域名共享 localStorage 有大小限制
扩容。
h5.u51.com/
iframe