// 防抖
let debounce=function(fn,delay){
  let timeout,_this,args;
  return function(){
    clearTimeout(timeout)
    _this=this;
    args=arguments;
    timeout=setTimeout(()=>{
      fn.apply(_this,args);
    },delay)
  }
}
