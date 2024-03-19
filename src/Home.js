import image from './images/Restaurant.png';
import './Style.css';


function homeContent() {

    const content = document.getElementById('content');

    const header = document.createElement("h1");
    header.textContent = 'The Crusty Crab';

   const myImage = document.createElement('img');
   myImage.src = image;

    const desc = document.createElement('p');
    desc.textContent = 'The best restaurant in Bikini Bottom. Chum Bucket #1 hater.'

    content.appendChild(header);
    content.appendChild(myImage);
    content.appendChild(desc);

    return content;
}



export { homeContent };