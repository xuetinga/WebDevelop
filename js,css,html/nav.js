var body = document.getElementsByTagName('body')[0];
var nav2 = document.createElement('div');
var img = document.createElement('img');

nav2.style.width = "2cm";
nav2.style.margin = "0 auto";
nav2.style.height = "2cm";
nav2.style.position = "fixed";
nav2.style.right = "0px";
nav2.style.bottom = "50px";
img.style.width = "1.5cm";
img.style.height = "1.5cm";
img.src = "image/up.png";
nav2.appendChild(img);
nav2.onclick = function(){
    document.documentElement.scrollTop = '0px';
}
body.appendChild(nav2);

