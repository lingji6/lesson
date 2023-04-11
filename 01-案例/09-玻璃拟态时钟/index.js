/*
  * @Author: wzh 
  * @Date: 2021-06-17 16:36:26
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2021-06-17 16:36:26
  */
var hours = document.querySelector('.hours')
var minutes = document.querySelector('.minutes')
var seconds = document.querySelector('.seconds')

function clock() {
  var today = new Date()
  var h = today.getHours() % 12 + today.getMinutes() / 60
  var m = today.getMinutes() + today.getSeconds() / 60
  var s = today.getSeconds()
  h *= 30
  m *= 6
  s *= 6
  hours.style.transform = 'rotate(' + h + 'deg)'
  minutes.style.transform = 'rotate(' + m + 'deg)'
  seconds.style.transform = 'rotate(' + s + 'deg)'
  setTimeout(clock, 500)
}
clock()
