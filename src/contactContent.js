const contact = (() => {
    const content = document.createElement("div");
    content.classList.add("text-center");

    const para = document.createElement("p");
    para.innerHTML = `<p>Address: 1234 Avenue, Block 5678, Nigeria.</p>
                      <p>Email: order@restaurant.com</p>
                      <p>Phone Number: (807)-8500-581</p>`

    content.appendChild(para);

    return { content };
})();

export { contact as default };