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


// 节流,结合时间戳和定时器两种方式,出发立即执行，停止出发后再执行一次
let th=function(fn,delay){
  let _this,args,timeout,start;
  return function(){
    _this=this;
    args=arguments;
    let now=Date.now();
    let leftTime=delay-(now-start);
    if(left<0){
      start=now;
      if(timeout){
        clearTimeout(timeout);
        timeout=null;
      }
      fn.apply(_this,args);
    }else if(!timeout){
      timeout=setTimeout(()=>{
        fn.apply(_this,args);
      },delay)
    }
  }
}

// 浅拷
let shalowCopy=function(obj){
  if(typeof obj !=='object' || !obj) return obj;
  let res=Array.isArray(obj)?[]:{};
  for(key in obj){
    if(obj.hasOwbProperty(key)){
      res[key]=obj[key]；
    }
  }
  return res;
}

// 深拷贝,或者直接使用JSON.parse(),JSON.stringtify()
let deepCopy=function(obj){
  if(typeof obj !=='object' || !obj) return obj;
  let res=Array.isArray(obj)?[]:{};
  for(key in obj){
    if(obj.hasOwbProperty(key)){
      if(typeof obj[key] ==='object'){
        res[key]=deepCopy(obj[key]);
      }else{
        res[key]=obj[key]
      }
    }
  }
  return res
}

// 金额格式化
let toCurrency=function(str){
  if(isNaN(str)) return str;
  let arr=(str+'').split('.');
  let intNum=arr[0].replace(/\d(?=(\d{3})+$)/g,'$&,');
  return intNum+(arr[1]?'.'+arr[1]:'');
}
