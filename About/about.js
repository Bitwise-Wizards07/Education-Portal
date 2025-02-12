const logoutbtn = document.querySelector(".navbar .logout");

let loggedIn = localStorage.getItem("loggedIn");

if(loggedIn) {
    logoutbtn.innerText = "Logout";
    logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "../Login/login.html";
    });
} else {
    logoutbtn.innerText = "Login";
    logoutbtn.addEventListener("click", () => {
        window.location.href = "../Login/login.html";
    });
    setTimeout(() => {
        alert("You Are Not Logged In, Please Login..!!");
    }, 5000);
}

