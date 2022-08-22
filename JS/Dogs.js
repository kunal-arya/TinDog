// import { dogs } from "./data";

// create a Dog class here
class Dog {
    constructor(data) {
        Object.assign(this,data);
    }

    

    htmlRender() {
        const {name, avatar, age, bio} = this;
        return `<img class="profile-img" src="${avatar}" alt="teddy-image">
        <div class="profile-bio">
            <h3 class="name"><span class="profile-name">${name}</span>, <span class="age">${age}</span></h3>
            <p class="profile-description">${bio}</p>
        </div> `
    }
}

export {Dog};