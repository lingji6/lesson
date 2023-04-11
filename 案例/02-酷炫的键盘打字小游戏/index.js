/*
  * @Author: wzh 
  * @Date: 2021-06-03 21:06:26
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2021-06-03 21:06:26
  */
var words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
/* 随机获取某一个字母的函数 */
function getRandomWord() {
  var key = getRandomNumber(0, words.length - 1)
  return words[key]
}
/* 随机生成指定范围区间的数字的函数 */
function getRandomNumber(min, max) {
  /* 
    Math.random()  [0, 1)
    Math.random() * 10 [0, 10)
    Math.floor(Math.random() * 10 + 1) [0, 10]
    3 ~ 10
    Math.floor(Math.random() * (max - min + 1)) [0, 8)
    Math.floor(Math.random() * (max - min + 1)) + min [3, 10]
  */
  var result = Math.floor(Math.random() * (max - min + 1)) + min
  return result
}
/* 给选中的li添加css样式 */
function selectedLiCss() {
  var word = getRandomWord()
  var li = document.getElementById(word)
  li.classList.add('selected')
}
selectedLiCss()
document.addEventListener('keyup', function(e) {
  var pressWord = e.key.toUpperCase()
  var pressWordEl = document.getElementById(pressWord)
  var selectedWordEl = document.querySelector('.selected')
  if(pressWordEl) {
    pressWordEl.classList.add('press')
    pressWordEl.addEventListener('animationend', function() {
      pressWordEl.classList.remove('press')
    })
  }
  if(selectedWordEl.innerHTML === pressWord) {
    selectedWordEl.classList.remove('selected')
    selectedLiCss()
  }
})