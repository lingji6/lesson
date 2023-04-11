  /*
  * @Author: wzh 
  * @Date: 2021-08-30 09:36:06
  * @Last Modified by: 1521620993@qq.com
  * @Last Modified time: 2021-08-30 09:36:06
  */
var months = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
],
days = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];

function getTime() {
var date = new Date(),
  // - 格式化所需数据
  second = date.getSeconds(),
  minute = date.getMinutes(),
  hour = date.getHours(),
  time = date.toLocaleString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }),
  day = date.getDay(),
  month = date.getMonth(),
  date = months[month] + " " + date.getDate() + " 日 " ,
  // - 总共360度，时分秒每格所相应的角度，负值是因为表值不动表盘旋转
  ds = second * -6,
  dm = minute * -6,
  dh = hour * -30;

// - 根据当前时间对于旋转相应角度
$(".second").css("transform", "rotate(" + ds + "deg)");
$(".minute").css("transform", "rotate(" + dm + "deg)");
$(".hour").css("transform", "rotate(" + dh + "deg)");

// - 显示相应的数字时间
$(".time").text(time);
$(".day").text(days[day]);
$(".date").text(date);
}

// - 在表盘上放置相应刻度值函数
function dailer(selector, size) {
for (var s = 0; s < 60; s++) {
  $(selector).append(
    '<span style="transform: rotate(' +
      6 * s +
      "deg) translateX(" +
      size +
      'px)">' +
      s +
      "</span>"
  );
}
}

dailer(".second", 195);
dailer(".minute", 145);
dailer(".dail", 230);

// - 最内圈小时刻度值
for (var s = 1; s < 13; s++) {
$(".hour").append(
  '<span style="transform: rotate(' +
    30 * s +
    'deg) translateX(100px)">' +
    s +
    "</span>"
);
}

setInterval(getTime, 1000);
getTime();
