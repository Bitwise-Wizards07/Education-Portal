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
    }, 6000);
}

document.getElementById("add-review-btn").addEventListener("click", () => {
    const reviewForm = document.getElementById("review-form");
    const offset = 100;
    window.scrollTo({
        top: reviewForm.offsetTop - offset,
        behavior: "smooth"
    });
});

let currentIndex = 0;

const showReview = (index) => {
    const reviews = document.querySelector(".comments-container");
    const totalReviews = document.querySelectorAll(".comment").length;
    
    if (index < 0) {
        currentIndex = totalReviews - 1;
    } else if (index >= totalReviews) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; 
    reviews.style.transform = `translateX(${offset}%)`;
};

const prevReview = () => {
    showReview(currentIndex - 1);
};

const nextReview = () => {
    showReview(currentIndex + 1);
};

showReview(currentIndex);

document.querySelector(".submit").addEventListener("click", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let review = document.getElementById("review").value.trim();
    let rating = document.querySelector("input[name='rating']:checked");

    if (name === "" || review === "" || rating === null) {
        alert("Please fill all fields before submitting.");
        return;
    }

    let newReview = {
        name: name,
        review: review,
        rating: rating.value
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.unshift(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();

    document.querySelector(".rform").style.display = "none";
    document.querySelector(".add").style.display = "none";

    setTimeout(() => {
        const offset = 120;
        window.scrollTo({
            top: document.querySelector(".rev").offsetTop - offset,
            behavior: "smooth"
        });
    }, 400);
});

const displayReviews = () => {
    let commentsContainer = document.querySelector(".comments-container");
    // commentsContainer.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // if (reviews.length === 0) {
    //     reviews = [
    //         { name: "John Doe", review: "This is an amazing product!", rating: 5 },
    //         { name: "Alice Smith", review: "Good quality, but could be improved.", rating: 4 }
    //     ];
    //     localStorage.setItem("reviews", JSON.stringify(reviews));
    // }

    reviews.forEach(review => {
        let newReview = document.createElement("div");
        newReview.classList.add("comment");
        newReview.innerHTML = `
            <p class="cmt">${review.review}</p>
            <p class="star">${"🌟".repeat(review.rating)}</p>
            <p class="name">${review.name}</p>
        `;
        commentsContainer.prepend(newReview);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);

