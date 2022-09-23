import { drawMenu } from './menuTab';

function drawHome() {
    // get content div
    const content = document.getElementById('content');
    content.innerHTML = '';        
    const header = document.createElement('header');
    // create header section and add it to content
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
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'image');
    const image = document.createElement('img');
    image.setAttribute('id','welcome-img');
    image.setAttribute('src', '.\\img\\panzanella.jpg')
    const txtDiv = document.createElement('div');
    txtDiv.setAttribute('id', 'welcome-text');
    txtDiv.innerHTML = '<p class="text">Facciamo piatti della tradizione toscana, li facciamo come in toscana, come i toscani, proprio una roba che guarda ti viene da dire "Boia deh, devo essere in toscana!" Panzanella (quella cosa con il pane seccon bagnato, è anche nella foto qui a sinistra), la Ribollita, quella zuppa cotta, ricotta e stracotta con i fagioli (che poi si tuona), il Caciucco, tipo una zuppa di pesce il cui nome fa ridere, le pappardella al ragù di cinghiale (che diciamocelo, ormai sono animali domestici, ma sono troppo buoni per smettere di mangiarli) e via dicendo. Vi aspettiamo!<br><br> NOTA:<br>non siamo in Toscana, non siamo da nessuna parte, questo sito è finto, è un esercizio per un corso online che sto facendo, quindi niente, se mai aprirò un ristorante vi farò sapere!</p>';
    content.appendChild(pageContent);
    pageContent.appendChild(imgDiv);
    imgDiv.appendChild(image);
    pageContent.appendChild(txtDiv);    
    // create footer and add it to content
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
    button1.style.backgroundColor = '#444';
    button2.style.backgroundColor = '#333';
    button3.style.backgroundColor = '#333';

    const homeBtn = document.getElementById('btn1');
    const menuBtn = document.getElementById('btn2');
    const contactsBtn = document.getElementById('btn3');
    homeBtn.addEventListener('click', drawHome);
    menuBtn.addEventListener('click', drawMenu);
    contactsBtn.addEventListener('click', drawMenu);
}

export { drawHome };