import { createNav } from "./home";
import { clearPage } from "./home";
import { createHome } from "./index";
import { contactCreate } from "./contact";

let menuCreate = () =>{
    let main = document.getElementById("content");
    clearPage();
    createNav();

    let content = document.createElement("div");
    main.appendChild(content);
    content.classList.add("middle");
    let container = document.createElement("div");
    content.appendChild(container);
    container.classList.add("menuCont");
    let list1Container = document.createElement("div");
    let list2Container = document.createElement("div");
    let list3Container = document.createElement("div");
    let list1 = document.createElement("dl");
    let list2 = document.createElement("dl");
    let list3 = document.createElement("dl");
    container.appendChild(list1Container);
    container.appendChild(list2Container);
    container.appendChild(list3Container);
    list1Container.appendChild(list1);
    list2Container.appendChild(list2);
    list3Container.appendChild(list3);
    list1Container.classList.add("list1Container");
    list2Container.classList.add("list2Container");
    list3Container.classList.add("list3Container");
    list1.classList.add("menuItems", "list1");
    list2.classList.add("menuItems", "list2");
    list3.classList.add("menuItems", "list3");

    //List 1 Items
    let list1Title = document.createElement("h1");
    let list11 = document.createElement("dt");
    let list12 = document.createElement("dd");
    let list13 = document.createElement("dt");
    let list14 = document.createElement("dd");
    let list15 = document.createElement("dt");
    let list16 = document.createElement("dd");
    list1.appendChild(list1Title);
    list1.appendChild(list11);
    list1.appendChild(list12);
    list1.appendChild(list13);
    list1.appendChild(list14);
    list1.appendChild(list15);
    list1.appendChild(list16);
    list1Title.textContent = "Entrees:";
    list11.textContent = "Ambrosia";
    list12.textContent = "The food of the gods";
    list13.textContent = "Gnocchi & Marinara";
    list14.textContent = "Closest you're gonna get to Ambrosia if you're mortal";
    list15.textContent = "Mac & Cheese";
    list16.textContent = "Fan Favorite - Certified by Apollo himself";


    //List 2 Items
    let list2Title = document.createElement("h1");
    let list21 = document.createElement("dt");
    let list22 = document.createElement("dd");
    let list23 = document.createElement("dt");
    let list24 = document.createElement("dd");
    let list25 = document.createElement("dt");
    let list26 = document.createElement("dd");
    list2.appendChild(list2Title);
    list2.appendChild(list21);
    list2.appendChild(list22);
    list2.appendChild(list23);
    list2.appendChild(list24);
    list2.appendChild(list25);
    list2.appendChild(list26);
    list2Title.textContent = "Beverages:"
    list21.textContent = "Nectar";
    list22.textContent = "The drink of the gods";
    list23.textContent = "Coca-Cola";
    list24.textContent = "An American classic";
    list25.textContent = "Chocolate Milk";
    list26.textContent = "Arguably better than the Ambrosia";


    //List 3 Items
    let list3Title = document.createElement("h1");
    let list31 = document.createElement("dt");
    let list32 = document.createElement("dd");
    let list33 = document.createElement("dt");
    let list34 = document.createElement("dd");
    list3.appendChild(list3Title);
    list3.appendChild(list31);
    list3.appendChild(list32);
    list3.appendChild(list33);
    list3.appendChild(list34);
    list3Title.textContent = "Dessert:"
    list31.textContent = "Chocolate Chip Cookies";
    list32.textContent = "Fresh from the ovens of Hephaestus";
    list33.textContent = "Root Beer Float";
    list34.textContent = "A Centaur Classic - Chiron";

    let menu = document.querySelector(".menu");
    menu.addEventListener("click", menuCreate);
    let home = document.querySelector(".home");
    home.addEventListener("click", createHome);
    let contact = document.querySelector(".contact");
    contact.addEventListener("click", contactCreate);

    contact.style.backgroundColor = "white";
    contact.style.color = "gray";
    home.style.backgroundColor = "white";
    home.style.color = "gray";
    menu.style.backgroundColor = "gray";
    menu.style.color = "white";
}

export { menuCreate };