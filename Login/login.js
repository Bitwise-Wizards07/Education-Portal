// const inputs = document.querySelectorAll("input");
// const name = document.querySelector(".name input");
// const email = document.querySelector(".email input");
// const password = document.querySelector(".password input");
// const viewPass = document.querySelectorAll(".inp i");
// const confirmPass = document.querySelector(".confirmpass input");
// const submit = document.querySelector(".submit button");
// const signupbtn = document.querySelector(".signup a");

// const validateForm = (event) => {
//     const isSignUp = submit.innerText === "Sign Up";

//     if(name.value === "" || name.value === null) {
//         alert("Please, Enter Your Name!!");
//         name.focus();
//         event.preventDefault();
//         return false;
//     } else if(email.value === "" || email.value === null) {
//         alert("Please, Enter Your Email!!");
//         email.focus();
//         event.preventDefault();
//         return false;
//     } else if(password.value === "" || password.value === null) {
//         alert("Please, Enter PassWord!!");
//         password.focus();
//         event.preventDefault();
//         return false;
//     } else if(password.value.includes(" ")) {
//         alert("Password CANNOT Contain Spaces!");
//         password.focus();
//         event.preventDefault();
//         return false;
//     } else if(isSignUp) {
//         if(confirmPass.value === "" || confirmPass.value === null) {
//             alert("Please, Enter Confirm PassWord!!");
//             confirmPass.focus();
//             event.preventDefault();
//             return false;
//         } else if(confirmPass.value !== password.value) {
//             alert("PassWord and Confirm PassWord Are NOT Same!!");
//             confirmPass.focus();
//             event.preventDefault();
//             return false;
//         }
//     } else {
//         return true;
//     }
// };

// inputs.forEach(input => {
//     input.addEventListener("focus", () => {
//         input.parentElement.classList.add("focus");
//     });
//     input.addEventListener("blur", () => {
//         input.parentElement.classList.remove("focus");
//     });
// });

// viewPass.forEach(pass => {
//     pass.addEventListener("click", () => {
//         const input = pass.previousElementSibling; 
        
//         if (input.type === "password") {
//             input.type = "text";
//             pass.classList.remove("fa-eye");
//             pass.classList.add("fa-eye-slash");
//         } else {
//             input.type = "password";
//             pass.classList.remove("fa-eye-slash");
//             pass.classList.add("fa-eye");
//         }
//     });
// });

// submit.addEventListener("click", (event) => {
//     event.preventDefault();

//     const isSignUp = submit.innerText === "Sign Up";

//     if(validateForm(event)) {
//         if(isSignUp) {
//             let user = document.querySelector("#name").value;
//             let mail = document.querySelector("#email").value;
//             let pass = document.querySelector("#password").value;

//             if(user && email && pass) {
//                 localStorage.setItem("user", user.trim());
//                 localStorage.setItem("mail", mail.trim());
//                 localStorage.setItem("pass", pass.trim());
//                 alert("Sign Up Successful!! Now Log In..");
//                 // location.reload();
//             } else {
//                 validateForm(event);
//             }
//         } else {
//             let user = document.querySelector("#name").value;
//             let mail = document.querySelector("#email").value;
//             let pass = document.querySelector("#password").value;

//             if(user.trim() === localStorage.getItem("user") &&
//                mail.trim() === localStorage.getItem("mail") &&
//                pass.trim() === localStorage.getItem("pass")) {
//                 localStorage.setItem("loggedIn", true);
//                 window.location.href = "../index.html";
//             } else {
//                 alert("You Are Not Signed Up.. So Sign Up first.. OR Check Credentials again..");
//             }
//         }
//     }
// });

// signupbtn.addEventListener("click", () => {
//     if (submit.innerText === "Login") {
//         submit.innerText = "Sign Up";
//         document.querySelector(".heading h1").innerText = "Sign Up";
//         document.querySelector(".signup p").innerText = "Already have an account? ";
//         document.querySelector(".signup a").innerText = "Login";
//         document.querySelector(".container").style.height = "85vh";
//         document.querySelector(".container").style.width = "27vw";
//         document.querySelector(".confirmpass").classList.remove("hide");
//     } else {
//         submit.innerText = "Login";
//         document.querySelector(".heading h1").innerText = "Login";
//         document.querySelector(".signup p").innerText = "Don't have an account? ";
//         document.querySelector(".signup a").innerText = "Sign Up";
//         document.querySelector(".container").style.height = "72vh";
//         document.querySelector(".container").style.width = "25vw";
//         document.querySelector(".confirmpass").classList.add("hide");
//     }
// });

const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const viewPass = document.querySelectorAll(".inp i");
const confirmPassInput = document.querySelector("#confirmpass");
const submit = document.querySelector(".submit button");
const signupBtn = document.querySelector(".signup a");

// Validate form before submitting
const validateForm = (event) => {
    const isSignUp = submit.innerText === "Sign Up";

    if (!nameInput.value.trim()) {
        alert("Please, Enter Your Name!!");
        nameInput.focus();
        event.preventDefault();
        return false;
    } else if (!emailInput.value.trim()) {
        alert("Please, Enter Your Email!!");
        emailInput.focus();
        event.preventDefault();
        return false;
    } else if (!passwordInput.value.trim()) {
        alert("Please, Enter Password!!");
        passwordInput.focus();
        event.preventDefault();
        return false;
    } else if (passwordInput.value.includes(" ")) {
        alert("Password CANNOT Contain Spaces!");
        passwordInput.focus();
        event.preventDefault();
        return false;
    } else if (isSignUp) {
        if (!confirmPassInput.value.trim()) {
            alert("Please, Enter Confirm Password!!");
            confirmPassInput.focus();
            event.preventDefault();
            return false;
        } else if (confirmPassInput.value !== passwordInput.value) {
            alert("Password and Confirm Password Do NOT Match!!");
            confirmPassInput.focus();
            event.preventDefault();
            return false;
        }
    }
    return true;
};

// Handle input field focus styles
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.parentElement.classList.add("focus");
    });
    input.addEventListener("blur", () => {
        input.parentElement.classList.remove("focus");
    });
});

// Show/Hide Password
viewPass.forEach(pass => {
    pass.addEventListener("click", () => {
        const input = pass.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            pass.classList.remove("fa-eye");
            pass.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            pass.classList.remove("fa-eye-slash");
            pass.classList.add("fa-eye");
        }
    });
});

// Handle Login / Sign-Up Submission
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const isSignUp = submit.innerText === "Sign Up";

    if (validateForm(event)) {
        let user = nameInput.value.trim();
        let mail = emailInput.value.trim();
        let pass = passwordInput.value.trim();

        if (isSignUp) {
            // Store user credentials in localStorage
            localStorage.setItem("user", user);
            localStorage.setItem("mail", mail);
            localStorage.setItem("pass", pass);
            alert("Sign Up Successful!! Now Log In..");

            // Redirect to Login page
            switchToLogin();
        } else {
            // Check if credentials match stored values
            if (
                user === localStorage.getItem("user") &&
                mail === localStorage.getItem("mail") &&
                pass === localStorage.getItem("pass")
            ) {
                localStorage.setItem("loggedIn", true);
                window.location.href = "../index.html";
            } else {
                alert("You Are Not Signed Up.. So Sign Up First OR Check Credentials Again..");
            }
        }
    }
});

// Switch to Login mode after Sign-Up
function switchToLogin() {
    submit.innerText = "Login";
    document.querySelector(".heading h1").innerText = "Login";
    document.querySelector(".signup p").innerText = "Don't have an account?";
    document.querySelector(".signup a").innerText = "Sign Up";
    document.querySelector(".container").style.height = "72vh";
    document.querySelector(".container").style.width = "25vw";
    document.querySelector(".confirmpass").classList.add("hide");
}

// Handle Sign-Up/Login Toggle
signupBtn.addEventListener("click", () => {
    if (submit.innerText === "Login") {
        submit.innerText = "Sign Up";
        document.querySelector(".heading h1").innerText = "Sign Up";
        document.querySelector(".signup p").innerText = "Already have an account?";
        document.querySelector(".signup a").innerText = "Login";
        document.querySelector(".container").style.height = "85vh";
        document.querySelector(".container").style.width = "27vw";
        document.querySelector(".confirmpass").classList.remove("hide");
    } else {
        switchToLogin();
    }
});

