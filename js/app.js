//carousel
const slides = document.querySelectorAll(".slide-fade");
const dots = document.querySelectorAll(".dot");

document.addEventListener("DOMContentLoaded", function () {
  dots[0].addEventListener("click", function () {
    slides[0].hidden = false;
    slides[1].hidden = true;
    slides[2].hidden = true;
    slides[3].hidden = true;
  });
  dots[1].addEventListener("click", function () {
    slides[1].hidden = false;
    slides[0].hidden = true;
    slides[2].hidden = true;
    slides[3].hidden = true;
  });
  dots[2].addEventListener("click", function () {
    slides[2].hidden = false;
    slides[0].hidden = true;
    slides[1].hidden = true;
    slides[3].hidden = true;
  });
  dots[3].addEventListener("click", function () {
    slides[3].hidden = false;
    slides[0].hidden = true;
    slides[1].hidden = true;
    slides[2].hidden = true;
  });
});

document.addEventListener("DOMContentLoaded", createCard);

//card generation
const cards = document.querySelector("#cards");
const reviews = window.reviews;

function createCard() {
  reviews.forEach(function (review) {
    let card = document.createElement("section");
    let cardImg = document.createElement("img");
    let cardName = document.createElement("p");
    let cardDate = document.createElement("p");
    let cardRate = document.createElement("div");
    let cardReview = document.createElement("p");
    //let star = document.createElement("span");

    card.setAttribute("class", "card");
    cardImg.setAttribute("src", `${review.imgSrc}`);
    cardName.setAttribute("class", "card-name");
    cardName.innerText = `${review.username}`;
    cardDate.setAttribute("class", "card-date");
    cardDate.innerHTML = `<time datetime="${review.date}">${review.date}</time>`;
    cardRate.setAttribute("class", "card-rating");
    cardReview.setAttribute("class", "card-review");
    cardReview.innerText = `"${review.reviewText}"`;
    //star.setAttribute("class", "material-symbols-outlined");
    //star.innerText = " grade ";

    cards.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardName);
    card.appendChild(cardDate);
    card.appendChild(cardRate);
    for (let i = 0; i < review.rating; i++) {
      const star = document.createElement("span");
      star.setAttribute("class", "material-symbols-outlined");
      star.innerText = " grade ";
      cardRate.appendChild(star);
    }
    card.appendChild(cardReview);
  });
}

//review creation
const reviewBtn = document.querySelector("#create-review");
const reviewForm = document.querySelector("#review-form");

document.addEventListener("DOMContentLoaded", function () {
  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const date = document.querySelector("#date").value;
    const rating = document.querySelector("#rating").value;
    const review = document.querySelector("#review-text").value;

    let obj = {};
    obj.username = username;
    obj.date = date;
    obj.rating = rating;
    obj.reviewText = review;
    obj.imgSrc = "./media/default_face.jpg";

    reviews.push(obj);

    //debugger;
    cards.innerHTML = "";
    createCard();
  });
});
