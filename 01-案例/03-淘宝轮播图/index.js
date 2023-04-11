/*
  * @Author: wzh 
  * @Date: 2023-04-11 20:06:06
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2023-04-11 20:06:06
  */
var slideWidth = 520
var slides = document.querySelector('.slides')
var slidess = document.querySelectorAll('.slide')
var currentIndex = 1
var showcase = document.querySelector('.showcase')
var prevTime = 0
var timer
var spots = document.querySelectorAll('.spot')

/* 设置轮播图区域函数 */
function setSlides() {
  slides.style.width = slideWidth * slidess.length + 'px'
  slides.style.left = '-' + slideWidth * currentIndex + 'px'
  spots[0].classList.add('active')
}
/* 过渡移动函数 */
function transitionMove() {
  slides.style.left = '-' + slideWidth * currentIndex + 'px'
  slides.style.transition = 'left 1s'
}
/* 定时器移动函数 */
function timeoutMove() {
  slides.style.left = '-' + slideWidth * currentIndex + 'px'
  slides.style.transition = 'none' /* 取消第7幅图的过渡效果 */
}

/* 展示下一幅图片的函数 */
function showNextSlide() {
  currentIndex++
  transitionMove()
  if(currentIndex == slidess.length - 1) {
    currentIndex = 1
    /* 写处理边界问题的代码，也就是无缝轮播的代码 */
    setTimeout(function() { /* 等待第6幅图的过渡效果 */
      timeoutMove()
    }, 1000)
  }
  setSpotActive()
}

/* 展示上一幅图片的函数 */
function showPrevSlide() {
  currentIndex--
  transitionMove()
  if(currentIndex == 0) {
    currentIndex = slidess.length - 2
    /* 写处理边界问题的代码，也就是无缝轮播的代码 */
    setTimeout(function() { /* 等待第6幅图的过渡效果 */
      timeoutMove()
    }, 1000)
  }
  setSpotActive()
}

/* 所有的事件绑定函数 */
function eventBind() {
  showcase.addEventListener('click', function(e) {
    if(e.target.classList.contains('next')) {
      // showNextSlide()
      throttle(showNextSlide, 1300)
    } else if(e.target.classList.contains('prev')) {
      // showPrevSlide()
      throttle(showPrevSlide, 1300)
    } else if(e.target.classList.contains('spot')) {
      var index = Array.prototype.indexOf.call(spots, e.target)
      currentIndex = index + 1
      transitionMove()
      setSpotActive()
    }
  })
  showcase.addEventListener('mouseover', function() {
    pausePlay()
  })
  showcase.addEventListener('mouseout', function() {
    autoPlay()
  })
}

/* 自动轮播函数 */
function autoPlay() {
  timer = setInterval(function(){
    showNextSlide()
  }, 1100);
}
/* 暂停轮播函数 */
function pausePlay() {
  clearInterval(timer)
}

/* 防抖节流函数 */
function throttle(fn, delay) {
  var now = Date.now()
  if(now - prevTime >= delay) {
    fn()
    prevTime = Date.now()
  }
}
/* 设置小圆点选中函数 */
function setSpotActive() {
  for(var i = 0; i < spots.length; i++) {
    if(i == currentIndex - 1) {
      spots[i].classList.add('active')
    } else {
      spots[i].classList.remove('active')
    }
  }
}
/* 初始化函数 */
function init() {
  setSlides()
  eventBind()
  autoPlay()
}
init()