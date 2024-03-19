import image1 from './images/Spongebob.jpg';
import image2 from './images/Squidward.jpeg';
import image3 from './images/Mr_Krabs.jpg';
import './Style.css';

function aboutPage() {
    const content = document.getElementById('content');

    const aboutContainer_1 = document.createElement('div');
    aboutContainer_1.classList.add('aContainer1');
    const aboutHeader = document.createElement('h1');
    aboutHeader.textContent = 'Here is our staff, the best in the whole ocean.'
    const aboutDesc = document.createElement('h2');
    aboutDesc.textContent = 'Here they are:'
    aboutContainer_1.appendChild(aboutHeader);
    aboutContainer_1.appendChild(aboutDesc);

    const aboutContainer_2 = document.createElement('div');
    aboutContainer_2.classList.add('aContainer2');
    const spongeImg = document.createElement('img');
    spongeImg.src = image1;
    const spongeDesc = document.createElement('p');
    spongeDesc.textContent = 'Meet Spongebob, our best employee, and the best burger chef you`ll ever find, he will give everything for his job, literally.';
    aboutContainer_2.appendChild(spongeImg);
    aboutContainer_2.append(spongeDesc);

    const aboutContainer_3 = document.createElement('div');
    aboutContainer_3.classList.add('aContainer3');
    const squidImage = document.createElement('img');
    squidImage.src = image2;
    const squidDesc = document.createElement('p');
    squidDesc.textContent = "Our polite, kind and loyal cashier, he will happily take your order any time, ignore his sad face, he cannot express a lot, I think.";

    aboutContainer_3.appendChild(squidImage);
    aboutContainer_3.appendChild(squidDesc);

    const aboutContainer_4 = document.createElement('div');
    aboutContainer_4.classList.add('aContainer4');
    const krabImage = document.createElement('img');
    krabImage.src = image3;
    const krabDesc = document.createElement('p');
    krabDesc.textContent = "And here is our faithful boss, Mr.Krabs, he is the best boss always thinking about his customers and workers(not true), and he is DEFINETLY NOT stingy(also not true)."

    aboutContainer_4.appendChild(krabImage);
    aboutContainer_4.appendChild(krabDesc);

    content.appendChild(aboutContainer_1);
    content.appendChild(aboutContainer_2);
    content.appendChild(aboutContainer_3);
    content.appendChild(aboutContainer_4);
}

export { aboutPage }