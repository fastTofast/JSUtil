// 防抖
let debounce = function (fn, delay) {
  let timeout, _this, args;
  return function () {
    clearTimeout(timeout)
    _this = this;
    args = arguments;
    timeout = setTimeout(() => {
      fn.apply(_this, args);
    }, delay)
  }
}


// 节流,结合时间戳和定时器两种方式,出发立即执行，停止出发后再执行一次
let th = function (fn, delay) {
  let _this, args, timeout, start;
  return function () {
    _this = this;
    args = arguments;
    let now = Date.now();
    let leftTime = delay - (now - start);
    if (left < 0) {
      start = now;
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      fn.apply(_this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(_this, args);
      }, delay)
    }
  }
}

// 浅拷
let shalowCopy = function (obj) {
  if (typeof obj !== 'object' || !obj) return obj;
  let res = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    if (obj.hasOwbProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

// 深拷贝,或者直接使用JSON.parse(),JSON.stringtify()
let deepCopy = function (obj) {
  if (typeof obj !== 'object' || !obj) return obj;
  let res = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    if (obj.hasOwbProperty(key)) {
      if (typeof obj[key] === 'object') {
        res[key] = deepCopy(obj[key]);
      } else {
        res[key] = obj[key]
      }
    }
  }
  return res
}

// 金额格式化
let toCurrency = function (str) {
  if (isNaN(str)) return str;
  let arr = (str + '').split('.');
  let intNum = arr[0].replace(/\d(?=(\d{3})+$)/g, '$&,');
  return intNum + (arr[1] ? '.' + arr[1] : '');
}

// 平铺多维数组
let flatten = function (arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    return arr;
  }
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

// 平铺到制定深度
let flatAnyDepth = function (arr, depth) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    return arr;
  }
  return depth != 1 ? arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatAnyDepth(b) : b), [])
    : arr.reduce((a, b) => { a.concat(b) }, [])
}

// 乱序(概率有问题，不够随机)
let shuffle = function (arr) {
  return arr.sort((a, b) => {
    return Math.random() - 0.5
  })
}
// 乱序(彻底乱序)
let shuffle = function (arr) {
  for (let i = arr.length; i; i--) {
    let x = Math.floor(Math.random() * i);
    [arr[i - 1], arr[x]] = [arr[x], arr[i - 1]];// 当前元素和前面的随机一个元素互换
  }
  return arr;
}