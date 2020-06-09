let create = () =>{
    //Instantiating main boxes for the basic page layout
    let main = document.getElementById("content");
    let head = document.createElement("div");
    let content = document.createElement("div");
    let foot = document.createElement("div");
    main.appendChild(head);
    main.appendChild(content);
    main.appendChild(foot);
    head.classList.add("header");
    content.classList.add("middle");
    foot.classList.add("footer");
}

export { create };