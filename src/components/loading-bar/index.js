import createInstance from "./instance";

let loadingBarInstance;//实例全局只返回一个
let color = 'primary';
let duration = 800;
let failedColor = 'error';
let height = 2;
let timer;


function getInstance() {
  loadingBarInstance = loadingBarInstance || createInstance({
    color: color,
    failedColor: failedColor,
    height: height
  });
  //getInstance函数只返回上面定义的loadingBarInstance 这样保证所有的操作都是同一个实例
  return loadingBarInstance;
}

function update(options) {
  let instance = getInstance();

  instance.update(options);
}

function hide() {
  setTimeout(() => {
    update({
      show: false
    });
    setTimeout(() => {
      update({
        percent: 0
      });
    }, 200);
  }, duration);
}

function clearTimer() {
  if (timer) { //上面全局timer
    clearInterval(timer);
    timer = null;
  }
}

export default {
  start() {
    if (timer) return; //上面全局，如果有正在运行的loadingBar 直接return
    let percent = 0;
    update({
      percent: percent,
      status: 'success',
      show: true
    });

    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 1);//随机产生1~3整数
      if (percent >= 90) {
        //如果大于90清除定时器定格在一刻模拟网速慢的情况，如果请求成功就直接finish
        clearTimer(timer)
      }
      update({
        percent: percent,
        status: 'success',
        show: true
      });
    }, 200)
  },
  finish() {
    if (timer) return;
    update({
      percent: 100,
      status: 'success',
      show: true
    });
    hide()
  }
}