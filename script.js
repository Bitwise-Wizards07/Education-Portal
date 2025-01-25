const logout = document.querySelector(".navbar .logout");

logout.addEventListener("click", () => {
    window.location.href = "Login/login.html";
});

document.querySelector(".thumbnail").addEventListener("click", () => {
    window.location.href = "index.html";
});

var getCol1=document.getElementById("circle1");
var getCol2=document.getElementById("circle2");
var getCol3=document.getElementById("circle3");
var i=0;
setInterval(()=>{
    getCol1.style.background="conic-gradient(crimson 0deg,crimson "+i+"deg,white "+i+"deg,white)";
    getCol2.style.background="conic-gradient(yellow 0deg,yellow "+i+"deg,white "+i+"deg,white)";
    getCol3.style.background="conic-gradient(green 0deg,green "+i+"deg,white "+i+"deg,white)";
    i++;
    if(i==360){
        clearInterval(interval);
    }
},10);