const image_src = ["image/IMG_0725.JPG","image/S__7774225.jpg"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 1){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("myimage").src = image_src[num];
}
 
setInterval(slideshow_timer, 3000);
