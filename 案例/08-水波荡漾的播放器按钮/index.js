/*
  * @Author: wzh 
  * @Date: 2021-06-16 21:36:26 
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2021-06-16 21:36:26
  */
var circleBtn = document.querySelector('.circle__btn')
var play = document.querySelector('.fa-play')
var pause = document.querySelector('.fa-pause')
var wave1 = document.querySelector('.circle__wave1')
var wave2 = document.querySelector('.circle__wave2')

circleBtn.addEventListener('click', function(e) {
  e.preventDefault()
  circleBtn.classList.toggle('shadow')
  play.classList.toggle('visibility')
  pause.classList.toggle('visibility')
  wave1.classList.toggle('paused')
  wave2.classList.toggle('paused')
})