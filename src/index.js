import { create } from "./home";
import { check } from "./home";
import { clearPage } from "./home";
import { menuCreate } from "./menu";
import { contactCreate } from "./contact";

let createHome = () =>{
    clearPage();
    create();
}
create();

let menu = document.querySelector(".menu");
menu.addEventListener("click", menuCreate);
let home = document.querySelector(".home");
home.addEventListener("click", createHome);
let contact = document.querySelector(".contact");
contact.addEventListener("click", contactCreate);

export { createHome };

