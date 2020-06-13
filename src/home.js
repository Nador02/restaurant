let create = () =>{
    //Instantiating main boxes for the basic page layout
    let main = document.getElementById("content");
    let head = document.createElement("div");
    let content = document.createElement("div");
    main.appendChild(head);
    main.appendChild(content);
    head.classList.add("header");
    content.classList.add("middle");

    //Customizing and adding to header/nav bar
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
    
}

export { create };