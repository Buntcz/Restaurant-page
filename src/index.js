import { homeContent } from './Home.js'
import { menuContent } from './Menu.js';
import { aboutPage } from './About.js';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

function clear() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function homeAgain() {
    clear();
    homeContent();
}

function menuAgain() {
    clear();
    menuContent();
}

function aboutAgain() {
    clear();
    aboutPage();
}

homeBtn.addEventListener('click', homeAgain);
menuBtn.addEventListener('click', menuAgain);
aboutBtn.addEventListener('click', aboutAgain);


homeContent();