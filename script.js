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
    }, 6000);
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

let currNum1 = 0;
let currNum2 = 0;
let currNum3 = 0;
let intervalId1, intervalId2, intervalId3;
const inerNum = document.querySelectorAll(".iner");

const updateNumber1 = () => {
    document.querySelector("#iner1").innerText = currNum1 + "+";

    currNum1 += 5;

    if (currNum1 > 1000) {
        clearInterval(intervalId1);
    }
};

const updateNumber2 = () => {
    document.querySelector("#iner2").innerText = currNum2 + "+";

    currNum2 += 1;

    if (currNum2 > 200) {
        clearInterval(intervalId2);
    }
};

const updateNumber3 = () => {
    document.querySelector("#iner3").innerText = currNum3 + "+";

    currNum3 += 20;

    if (currNum3 > 4000) {
        clearInterval(intervalId3);
    }
};

window.onload = () => {
    updateNumber1();
    updateNumber2();
    updateNumber3();

    intervalId1 = setInterval(updateNumber1, 18);
    intervalId2 = setInterval(updateNumber2, 18);
    intervalId3 = setInterval(updateNumber3, 18);
};
