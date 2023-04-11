/*
 * @Author: wzh 
 * @Date: 2021-06-08 23:27:57 
 * @Last Modified by: 1521620993@qq.com
 * @Last Modified time: 2021-06-09 01:49:21
 */
var eyeR = document.querySelector('#eye-r')
var eyeR2 = document.querySelector('#eye-r2')
document.body.addEventListener('click', function() {
  eyeR.classList.toggle('is-eye-hidden')
  eyeR2.classList.toggle('is-eye-hidden')
  setTimeout(function() {
    eyeR.classList.toggle('is-eye-hidden')
    eyeR2.classList.toggle('is-eye-hidden')
  }, 500)
})