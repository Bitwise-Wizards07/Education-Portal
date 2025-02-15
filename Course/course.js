// const logoutbtn = document.querySelector(".navbar .logout");

// let loggedIn = localStorage.getItem("loggedIn");

// if(loggedIn) {
//     logoutbtn.innerText = "Logout";
//     logoutbtn.addEventListener("click", () => {
//         localStorage.removeItem("loggedIn");
//         window.location.href = "../Login/login.html";
//     });
// } else {
//     logoutbtn.innerText = "Login";
//     logoutbtn.addEventListener("click", () => {
//         window.location.href = "../Login/login.html";
//     });
//     setTimeout(() => {
//         alert("You Are Not Logged In, Please Login..!!");
//     }, 5000);
// }

// if(!localStorage.getItem("coins")) {
//     localStorage.setItem("coins", "10000");
// }

// if(!localStorage.getItem("purchased")) {
//     localStorage.setItem("purchased", JSON.stringify({}));
// }

// const updateCoins = () => {
//     document.querySelector(".title .coins").textContent = "Coins: " + localStorage.getItem("coins");
// };

// updateCoins();

// const courseClick = (name, price, topics) => {
//     let coins = parseInt(localStorage.getItem("coins"));
//     let purchased = JSON.parse(localStorage.getItem("purchased"));

//     if (!purchased[name] && (price === 0 || coins >= price)) {
//         if (price > 0) localStorage.setItem("coins", coins - price);
//         purchased[name] = new Array(topics.length).fill(false);
//         localStorage.setItem("purchased", JSON.stringify(purchased));
//     }
//     showCoursePopup(name, topics);
// };

// const showCoursePopup = (name, topics) => {
//     let progress = JSON.parse(localStorage.getItem("purchased"))[name];
//     let overlay = document.createElement("div");
//     overlay.id = "coursePopup";
//     overlay.innerHTML = `
//         <div class='popup-content'>
//             <h2>${name} Progress</h2>
//             ${topics.map((t, i) => `<label><input type='checkbox' ${progress[i] ? "checked" : ""} onclick='updateProgress(${i}, "${name}", ${topics.length})'> ${t}</label><br>`).join('')}
//             <div class="progress-bar-container">
//                 <div id="progress-${name}" class="progress-bar"></div><p id="percentage-${name}">0%</p>
//             </div>
//             <button onclick='closePopup()'>Close</button>
//         </div>
//     `;
//     document.body.appendChild(overlay);
//     updateProgressBar(name, topics.length);
// };

// const closePopup = () => {
//     document.querySelector("#coursePopup").remove();
// };

// const updateProgress = (i, name, totalTopics) => {
//     let purchased = JSON.parse(localStorage.getItem("purchasedCourses"));
//     purchased[name][i] = !purchased[name][i];
//     localStorage.setItem("purchased", JSON.stringify(purchased));
//     updateProgressBar(name, totalTopics);
// };

// const updateProgressBar = (name, totalTopics) => {
//     let progress = JSON.parse(localStorage.getItem("purchased"))[name];
//     let completedTopics = progress.filter(Boolean).length;
//     let percentage = Math.round((completedTopics / totalTopics) * 100);
//     let percentageBar = document.getElementById(`percentage-${name}`);
//     let progressBar = document.getElementById(`progress-${name}`);
//     if (progressBar && percentageBar) {
//         let pr = 0;
//         if(percentage != 0) {
//             pr = percentage - (percentage/7);
//         }
//         progressBar.style.width = pr + "%";
//         percentageBar.textContent = percentage + "%";
//     }
// };

// document.querySelector("#searchBar").addEventListener("keyup", () => {
//     let query = document.getElementById("searchBar").value.toLowerCase();
//     document.querySelectorAll(".box").forEach(course => {
//         let courseName = course.getAttribute("data-name").toLowerCase();
//         course.style.display = courseName.includes(query) ? "block" : "none";
//     });
// });

// const sortCourses = (order) => {
//     let container = document.querySelector(".container");
//     let courses = [...container.children];

//     courses.sort((a, b) => 
//         order === "A-Z"
//             ? a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")) 
//             : b.getAttribute("data-name").localeCompare(a.getAttribute("data-name"))
//     );

//     container.innerHTML = "";
//     courses.forEach(course => container.appendChild(course));
// };

// document.querySelector("#sortOptions").addEventListener("change", (event) => {
//     sortCourses(event.target.value);
// });

// const courseButtons = () => {
//     document.querySelectorAll(".box").forEach(course => {
//         let price = parseInt(course.getAttribute("data-price"));
//         let name = course.getAttribute("data-name");
//         let topics = JSON.parse(course.getAttribute("data-topics"));
        
//         const btn = course.querySelector(".btns .buy");
//         if (btn) {
//             btn.innerText = price === 0 ? "Enroll" : `Buy with Coins`;
//             btn.onclick = () => courseClick(name, price, topics);
//         }
//     });
// };

// document.querySelector("#sortOptions").addEventListener('change', () => {
//     sortCourses(this.value);
// });

// courseButtons();


document.addEventListener("DOMContentLoaded", () => {
    const logoutbtn = document.querySelector(".navbar .logout");

    if (logoutbtn) {
        let loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn) {
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
    }

    if (!localStorage.getItem("coins")) {
        localStorage.setItem("coins", "10000");
    }

    if (!localStorage.getItem("purchased")) {
        localStorage.setItem("purchased", JSON.stringify({}));
    }

    const updateCoins = () => {
        document.querySelector(".title .coins").textContent = "Coins: " + localStorage.getItem("coins");
    };

    updateCoins();

    const courseClick = (name, price, topics) => {
        let coins = parseInt(localStorage.getItem("coins"));
        let purchased = JSON.parse(localStorage.getItem("purchased"));

        if (!purchased[name] && (price === 0 || coins >= price)) {
            if (price > 0) localStorage.setItem("coins", coins - price);
            purchased[name] = new Array(topics.length).fill(false);
            localStorage.setItem("purchased", JSON.stringify(purchased));
        }
        showCoursePopup(name, topics);
    };

    const showCoursePopup = (name, topics) => {
        let progress = JSON.parse(localStorage.getItem("purchased"))[name];
        let overlay = document.createElement("div");
        overlay.id = "coursePopup";
        overlay.innerHTML = `
            <div class='popup-content'>
                <h2>${name} Progress</h2>
                ${topics.map((t, i) => `<label><input type='checkbox' ${progress[i] ? "checked" : ""} onclick='updateProgress(${i}, "${name}", ${topics.length})'> ${t}</label><br>`).join('')}
                <div class="progress-bar-container">
                    <div id="progress-${name}" class="progress-bar"></div><p id="percentage-${name}">0%</p>
                </div>
                <button onclick='closePopup()'>Close</button>
            </div>
        `;
        document.body.appendChild(overlay);
        updateProgressBar(name, topics.length);
    };

    const closePopup = () => {
        document.querySelector("#coursePopup").remove();
    };

    const updateProgress = (i, name, totalTopics) => {
        let purchased = JSON.parse(localStorage.getItem("purchased"));
        purchased[name][i] = !purchased[name][i];
        localStorage.setItem("purchased", JSON.stringify(purchased));
        updateProgressBar(name, totalTopics);
    };

    const updateProgressBar = (name, totalTopics) => {
        let progress = JSON.parse(localStorage.getItem("purchased"))[name];
        let completedTopics = progress.filter(Boolean).length;
        let percentage = Math.round((completedTopics / totalTopics) * 100);
        let percentageBar = document.getElementById(`percentage-${name}`);
        let progressBar = document.getElementById(`progress-${name}`);
        if (progressBar && percentageBar) {
            let pr = percentage !== 0 ? percentage - (percentage / 7) : 0;
            progressBar.style.width = pr + "%";
            percentageBar.textContent = percentage + "%";
        }
    };

    const searchBar = document.querySelector("#searchBar");

    if (searchBar) {
        searchBar.addEventListener("keyup", () => {
            let query = searchBar.value.toLowerCase();
            document.querySelectorAll(".box").forEach(course => {
                let courseName = course.getAttribute("data-name").toLowerCase();
                course.style.display = courseName.includes(query) ? "block" : "none";
            });
        });
    }

    const sortCourses = (order) => {
        let container = document.querySelector(".container");
        let courses = [...container.children];

        courses.sort((a, b) => 
            order === "A-Z"
                ? a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")) 
                : b.getAttribute("data-name").localeCompare(a.getAttribute("data-name"))
        );

        container.innerHTML = "";
        courses.forEach(course => container.appendChild(course));
    };

    document.querySelector("#sortOptions").addEventListener("change", (event) => {
        sortCourses(event.target.value);
    });

    const courseButtons = () => {
        document.querySelectorAll(".box").forEach(course => {
            let price = parseInt(course.getAttribute("data-price"));
            let name = course.getAttribute("data-name");
            let topics = JSON.parse(course.getAttribute("data-topics"));
            
            const btn = course.querySelector(".btns .buy");
            if (btn) {
                btn.innerText = price === 0 ? "Enroll" : `Buy with Coins`;
                btn.onclick = () => courseClick(name, price, topics);
            }
        });
    };

    courseButtons();
});
