const buttons = (() => {
    const div = document.createElement("div");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    menuBtn.classList.add("mr-3", "btn", "btn-primary");
    div.classList.add("my-3");
    contactBtn.classList.add("btn", "btn-primary");

    menuBtn.setAttribute("id", "menu");
    contactBtn.setAttribute("id", "contact");


    menuBtn.innerText = "Our Menu";
    contactBtn.innerText = "Contact Us";

    div.appendChild(menuBtn);
    div.appendChild(contactBtn);

    return { div, menuBtn }
})();

export { buttons as default };