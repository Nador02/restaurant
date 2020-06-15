import { createHome } from "./index";

let contactCreate = () =>{
    createHome();
    let home = document.querySelector(".home");
    let menu = document.querySelector(".menu");
    let contact = document.querySelector(".contact");
    let midCont1 = document.querySelector(".text1");
    let midCont2 = document.querySelector(".text2");
    let midButt = document.querySelector(".midButt");
    midCont1.textContent = "Contact Us!"
    midCont2.textContent = "We are available anytime that Hermes is available to take a message."
    midButt.textContent = "Ring Hermes"
    contact.style.backgroundColor = "gray";
    contact.style.color = "white";
    home.style.backgroundColor = "white";
    home.style.color = "gray";
    menu.style.backgroundColor = "white";
    menu.style.color = "gray";

}

export { contactCreate };