import { menuCreate } from "./menu";
import { createHome } from "./index";
import { contactCreate } from "./contact";

let main = document.getElementById("content");
let status = false;

let createNav = () =>{
    let head = document.createElement("div");
    main.appendChild(head);
    head.classList.add("header");

    let logo = document.createElement("div");
    let nav = document.createElement("ul");
    let home = document.createElement("li");
    let menu = document.createElement("li");
    let contact = document.createElement("li");
    head.appendChild(logo);
    head.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    logo.classList.add("logo");
    nav.classList.add("nav");
    home.classList.add("navButt", "home");
    menu.classList.add("navButt", "menu");
    contact.classList.add("navButt", "contact");
    logo.textContent="Demeter's Cafe";
    home.textContent="Home";
    menu.textContent="Menu";
    contact.textContent="Contact us";

    contact.style.backgroundColor = "white";
    contact.style.color = "gray";
    home.style.backgroundColor = "gray";
    home.style.color = "white";
    menu.style.backgroundColor = "white";
    menu.style.color = "gray";
}

let create = () =>{
    //Instantiating main boxes for the basic page layout
    let content = document.createElement("div");
    createNav();
    main.appendChild(content);
    content.classList.add("middle");

    //Customizing and adding to header/nav bar


    //Customizing and adding content to main image/center of page
    let container = document.createElement("div");
    let midCont1 = document.createElement("div");
    let midCont2 = document.createElement("div");
    let midButt = document.createElement("div");
    content.appendChild(container);
    container.appendChild(midCont1);
    container.appendChild(midCont2);
    container.appendChild(midButt);
    container.classList.add("midCont");
    midCont1.classList.add("midText", "text1");
    midCont2.classList.add("midText", "text2");
    midButt.classList.add("midButt");
    midCont1.textContent = "From Harvest to Table.";
    midCont2.textContent = "\"The best food around since Kronos\" - The Olympus Times";
    midButt.textContent = "Visit the Menu";

    //Status of home page being rendered
    status = true;
    let menu = document.querySelector(".menu");
    menu.addEventListener("click", menuCreate);
    let home = document.querySelector(".home");
    home.addEventListener("click", createHome);
    let contact = document.querySelector(".contact");
    contact.addEventListener("click", contactCreate);
}
let check = () =>{
    if(status)
        return true;
    else
        return false;
}

let clearPage = () =>{
    main.innerHTML = "";
}
export { create, createNav, check, clearPage };