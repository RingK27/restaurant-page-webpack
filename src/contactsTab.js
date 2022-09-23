import { drawHome } from './homeTab';
import { drawMenu } from './menuTab';

function drawContacts() {
    // get content div and empty it
    const content = document.getElementById('content');
    content.innerHTML = '';    
    // create header section and add it to content
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.innerText = 'OBV RESTAURANT';
    content.appendChild(header);
    header.appendChild(title);
    // create menu and add it to header
    const menu = document.createElement('section');
    menu.setAttribute('id', 'menu');
    const button1 = document.createElement('button');
    button1.setAttribute('class', 'btn');
    button1.setAttribute('id', 'btn1');
    button1.innerText = 'HOME';
    menu.appendChild(button1);
    const button2 = document.createElement('button');
    button2.setAttribute('class', 'btn');
    button2.setAttribute('id', 'btn2');
    button2.innerText = 'MENU';
    menu.appendChild(button2);
    const button3 = document.createElement('button');
    button3.setAttribute('class', 'btn');
    button3.setAttribute('id', 'btn3');
    button3.innerText = 'CONTACTS';
    menu.appendChild(button3);
    header.appendChild(menu);
    // create page content section and add it to content
    const pageContent = document.createElement('section');
    pageContent.setAttribute('id', 'page');    
    content.appendChild(pageContent);    
    // create footer and add it to content
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
    button1.style.backgroundColor = '#333';
    button2.style.backgroundColor = '#333';
    button3.style.backgroundColor = '#444';

    const homeBtn = document.getElementById('btn1');
    const menuBtn = document.getElementById('btn2');
    const contactsBtn = document.getElementById('btn3');
    homeBtn.addEventListener('click', drawHome);
    menuBtn.addEventListener('click', drawMenu);
    contactsBtn.addEventListener('click', drawMenu);
}

export { drawContacts };