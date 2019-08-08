import header from './header';
import buttons from './buttons';
import menu from './menuContent';


const pageLoad = (() => {
    const content = document.getElementById("content");
    content.classList.add("container", "text-center");

    const getContent = () => {
        content.appendChild(header.div);
        content.appendChild(buttons.div);
        content.appendChild(menu.content);
    };
    return { getContent };
})();

export default pageLoad;