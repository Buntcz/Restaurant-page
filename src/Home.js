import image from './images/Restaurant.png';
import './Style.css';


function homeContent() {

    const content = document.getElementById('content');
   
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('homeContainer')

    const header = document.createElement("h1");
    header.textContent = 'The Crusty Crab';

   const myImage = document.createElement('img');
   myImage.src = image;

    const desc = document.createElement('p');
    desc.textContent = 'The best restaurant in Bikini Bottom. Chum Bucket #1 hater.'

    homeContainer.appendChild(header);
    homeContainer.appendChild(myImage);
    homeContainer.appendChild(desc);

    content.appendChild(homeContainer);
}



export { homeContent };