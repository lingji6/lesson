/*
  * @Author: wzh 
  * @Date: 2021-07-08 19:06:06
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2021-07-08 19:06:06
  */
/* 
  TODO: 1、currentIndex
  TODO: 2、三个进度条块 lis
  TODO: 3、小卡片 steps
  TODO: 4、main block
*/
var currentIndex = 0
var lis = document.querySelectorAll('.bar li')
var steps = document.querySelectorAll('.step')
var main = document.querySelector('.main')

/* 设置进度条状态函数 */
function setBarStatus() {
  for(var i = 0; i < lis.length; i++) {
    if(i <= currentIndex) {
      lis[i].classList.add('active')
    } else {
      lis[i].classList.remove('active')
    }
  }
}

/* 设置步骤小卡片状态函数 */
function setStepStatus() {
  for(var i = 0; i < steps.length; i++) {
    if(i == currentIndex) {
      steps[i].style.display = 'block'
    } else {
      steps[i].style.display = 'none'
    }
  }
}

/* 渲染函数 */
function render() {
  setBarStatus()
  setStepStatus()
}

/* 下一步函数 */
function next() {
  if(currentIndex == 2) return // 处理边界值
  currentIndex++
  render()
  nextAnimation(currentIndex)
}
/* 下一步动画 */
function nextAnimation(i) {
  steps[i - 1].style.display = 'block'
  steps[i - 1].style.opacity = '0'
  steps[i - 1].style.transform = 'scale(0.8)'

  steps[i].style.opacity = '0'
  steps[i].style.left = '50%'
  document.body.clientHeight /* 触发浏览器渲染 */
  steps[i].style.opacity = '1'
  steps[i].style.left = '0%'
}

/* 上一步函数 */
function prev() {
  if(currentIndex == 0) return // 处理边界值
  currentIndex--
  render()
  prevAnimation(currentIndex)
}
/* 上一步动画 */
function prevAnimation(i) {
  steps[i + 1].style.display = 'block'
  steps[i + 1].style.left = '50%'
  steps[i + 1].style.opacity = '0'
  
  steps[i].style.transform = 'scale(0.8)'
  steps[i].style.opacity = '0'
  document.body.clientHeight /* 触发浏览器渲染 */
  steps[i].style.transform = 'scale(1)'
  steps[i].style.opacity = '1'

}

/* 初始化函数 */
function init() {
  render()
  main.style.display = 'block'
  /* 事件委托 */
  main.addEventListener('click', function(e){
    if(e.target.classList.contains('next')) {
      next()
    } else if(e.target.classList.contains('prev')) {
      prev()
    }
  })
}
init()