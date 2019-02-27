window.onload=function (){

  var fontSize = 16;
  var _w = document.body.clientWidth;
  console.log(_w);
  var font = parseInt(((_w*fontSize)/375)*10)/10 + 'px';
  document.getElementsByTagName('html')[0].style.fontSize = font;

  window.onresize = function(){
    var _w = document.body.clientWidth;
    var font = parseInt(((_w*fontSize)/375)*10)/10 + 'px';
    //获取html标签
    document.getElementsByTagName('html')[0].style.fontSize = font;
  }

}