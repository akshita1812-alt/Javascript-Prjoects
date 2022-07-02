<!DOCTYPE html>
  <html>
  <head>
  <title>Digital CLock</title>
<style>
    body{
      background-color : black;
    }
.Clock{
  position : absolute;
  color : lime;
  top : 50%;
  left : 50%;
  transform : translateX(-50%) translateY(-50%);
  font-size : 60px;
  font-family : Orbitron;
  Letter-spacing : 7px;
}
</style>
</head>
  <body>
    <div id = "DigitalClock" class = "Clocl" >
    </div>
<script type = "text/javascript">
  function showTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
 var session = "AM";
if(h == 0){
  h = 12; //12h format
}
  if( h > 12){
    h = h - 12;
    session = "PM";
  }
 if(h < 10){
   h = "0" + h;
 }
  if(m < 10){
   m = "0" + m;
 }
  if(s < 10){
   s = "0" + s;
 }
   
document.getElementById("DigitalClock").innerHTML = h + ":" + m + ":" + s ;
  
  setTimeout(showTime,1000);
}
showTime();
</script>
</body>

  </html>
