recycle.addEventListener('drop',function(){//落入这个区域将操作下面的代码
            srcList.parentNode.removeChild(srcList);
        });
        document.addEventListener('dragover',function(event){//要防止默认事件，在经过上面时
            event.preventDefault();
        })