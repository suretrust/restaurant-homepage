import pageLoad from './pageLoad';
import menu from './menuContent';
import contact from './contactContent';

pageLoad.getContent();

let content = document.getElementById("content");

document.addEventListener("click", function(e){
    if (e.target.id == "menu") {
        if (document.contains(contact.content)) {
            content.removeChild(contact.content);
            content.appendChild(menu.content);
        }
    } else if (e.target.id == "contact") {
        content.removeChild(menu.content);
        content.appendChild(contact.content);
    }
});