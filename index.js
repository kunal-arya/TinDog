import {Dog} from "./JS/Dogs.js";
import dogs_data from "./JS/data.js";
import dogs from "./JS/data.js";
 
const profile = document.querySelector(".profile");
const profileRender = document.querySelector(".profile-render");
const likeBadge = document.querySelector(".like-badge");
const nopeBadge = document.querySelector(".nope-badge");
const likedBtn = document.querySelector(".heart-icon");
const rejectBtn = document.querySelector(".reject-icon");

let i = 0;
let dog = new Dog(dogs_data[i]);

profileRender.innerHTML += dog.htmlRender();

function nextRender() {
    setTimeout(() => {
        i++;
        if(i == dogs_data.length) {
            i = 0
        }
        dog = new Dog(dogs_data[i]);
        profileRender.innerHTML = dog.htmlRender();
        likeBadge.classList.add("badge-remove");
        nopeBadge.classList.add("badge-remove");
    },1000);


}

function likeBadgeClickHandler() {
    likeBadge.classList.remove("badge-remove");
    nextRender();
}

function rejectBtnClickHandler() {
    nopeBadge.classList.remove("badge-remove");
    nextRender();
}

likedBtn.addEventListener("click", likeBadgeClickHandler);
rejectBtn.addEventListener("click", rejectBtnClickHandler);