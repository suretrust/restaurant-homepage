const header = (() => {
    const div = document.createElement("div");

    const h1 = document.createElement("h2");
    h1.classList.add("py-3", "text-primary", "mb-0", "font-weight-bolder", "uppercase");
    h1.innerHTML = "Restaurant";

    const para = document.createElement("p");
    para.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

    div.appendChild(h1);
    div.appendChild(para);
    return { div }
})();

export { header as default };