const logoutbtn = document.querySelector(".navbar .logout");

let loggedIn = localStorage.getItem("loggedIn");

if(loggedIn) {
    logoutbtn.innerText = "Logout";
    logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "Login/login.html";
    });
} else {
    logoutbtn.innerText = "Login";
    logoutbtn.addEventListener("click", () => {
        window.location.href = "Login/login.html";
    });
    setTimeout(() => {
        alert("You Are Not Logged In, Please Login..!!");
    }, 5000);
}

document.querySelector(".thumbnail").addEventListener("click", () => {
    window.location.href = "index.html";
});

let getCol1 = document.querySelector("#circle1");
let getCol2 = document.querySelector("#circle2");
let getCol3 = document.querySelector("#circle3");
let i=0;
 
let interval = setInterval(() => {
    getCol1.style.background="conic-gradient(crimson 0deg,crimson "+i+"deg,white "+i+"deg,white)";
    getCol2.style.background="conic-gradient(yellow 0deg,yellow "+i+"deg,white "+i+"deg,white)";
    getCol3.style.background="conic-gradient(green 0deg,green "+i+"deg,white "+i+"deg,white)";
    i++;
    if(i > 360) {
        clearInterval(interval);
    }
}, 10);

let currNum = 0;
let intervalId;
const inerNum = document.querySelectorAll(".iner");

const updateNumber = () => {
    inerNum.forEach((innum) => {
        innum.innerText = currNum + "+";
    });

    currNum += 2;

    if(currNum > 1000) {
        clearInterval(intervalId);
    }
};

window.onload = () => {
    updateNumber();
    intervalId = setInterval(updateNumber, 7);
};
