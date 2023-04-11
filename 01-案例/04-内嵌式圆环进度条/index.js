/*
 * @Author: wzh 
 * @Date: 2021-06-08 11:15:12 
 * @Last Modified by: 1521620993@qq.com
 * @Last Modified time: 2021-06-08 13:46:59
 */
var circle = document.getElementById('circle')
var input = document.getElementById('percent')
var number = document.querySelector('.card__number')
var tooltip = document.querySelector('.tooltip')

function circlePercent() {
    var change = 565.2 - 565.2 * input.value / 100
    circle.style.strokeDashoffset = change
}
function isNumberic(event) {
    if(event.keyCode < 48 || event.keyCode > 57) {
        return false
    }
}
function changePercent() {
    if(input.value > 100) {
        tooltip.style.opacity = 1
        tooltip.classList.add('fade-in')
    } else {
        tooltip.style.opacity = 0
        tooltip.classList.remove('fade-in')
        number.innerHTML = Number(input.value) + '%'
        circlePercent()
        input.value = ''
    }
}