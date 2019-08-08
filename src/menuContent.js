const menu = (() => {
    const content = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    content.classList.add("row");
    div1.classList.add("col-md-6");
    div2.classList.add("col-md-6");

    const img1 = document.createElement("img");
    img1.setAttribute("src", "./img/img1.jpg");
    img1.classList.add("img-fluid", "mb-4");
    
    const img2 = document.createElement("img");
    img2.setAttribute("src", "./img/img2.jpg");
    img2.classList.add("img-fluid", "mb-4");
    
    const img3 = document.createElement("img");
    img3.setAttribute("src", "./img/img3.jpg");
    img3.classList.add("img-fluid", "mb-4");
    
    const img4 = document.createElement("img");
    img4.setAttribute("src", "./img/img4.jpg");
    img4.classList.add("img-fluid", "mb-4");
    
    div1.appendChild(img1);
    div1.appendChild(img2);

    div2.appendChild(img3);
    div2.appendChild(img4);

    content.appendChild(div1);
    content.appendChild(div2);

    return { content };
})();

export default menu;