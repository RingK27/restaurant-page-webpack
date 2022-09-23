import './style.css';
import { drawHome } from './homeTab';
import { drawMenu } from './menuTab';
import { drawContacts } from './contactsTab';


function setButtons() {
    const homeBtn = document.getElementById('btn1');
    const menuBtn = document.getElementById('btn2');
    const contactsBtn = document.getElementById('btn3');
    homeBtn.addEventListener('click', drawHome);
    menuBtn.addEventListener('click', drawMenu);
    contactsBtn.addEventListener('click', drawContacts);
}

drawHome();
setButtons();