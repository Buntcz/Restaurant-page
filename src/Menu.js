import img1 from './images/Krabby_Patty.jpg';
import img2 from './images/Kelp_fries.jpg';
import img3 from './images/Krabby_Menu.jpeg';
import img4 from './images/Kelp_Shake.jpg';
import './Style.css';

function menuContent() {
    const content = document.getElementById('content')
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "The best resturant in the seven seas also has the best menu."
   const menuHeader2 = document.createElement('h2');
    menuHeader2.textContent = "Check it out:";

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuHeader2);

    const firstContainer = document.createElement('div');
    firstContainer.classList.add('firstMenuItem')
    const burgerImage = document.createElement('img');
    burgerImage.src = img1;
    const burgerName = document.createElement('h3');
    burgerName.textContent = "Krabby patty";
    const burgerDesc = document.createElement('p');
    burgerDesc.textContent = "The best burger in the seven seas, you won't regret trying it. Made by the best burger chef in the world, spongebob."
   
    firstContainer.appendChild(burgerImage);
    firstContainer.appendChild(burgerName);
    firstContainer.appendChild(burgerDesc);

    const secondContainer = document.createElement('div');
    secondContainer.classList.add('secondContainer');
    const friesImage = document.createElement('img');
    friesImage.src = img2;
    const friesName = document.createElement('h3');
    friesName.textContent = 'Kelp fries';
    const friesDesc = document.createElement('p');
    friesDesc.textContent = "The best fries you have ever tried, freshly harvested from the bikini bottom kelp reef."

    secondContainer.appendChild(friesImage);
    secondContainer.appendChild(friesName);
    secondContainer.appendChild(friesDesc);

    const thirdContainer = document.createElement('div');
    thirdContainer.classList.add('thirdContainer');
    const sodaImage = document.createElement('img');
    sodaImage.src = img4;
    const sodaName = document.createElement('h3');
    sodaName.textContent = "Kelp Shake";
    const sodaDesc = document.createElement('p');
    sodaDesc.textContent = 'There is nothing better than a cold fresh shake made from the best kelp in the seven seas, comes in different flavours too!'

    thirdContainer.appendChild(sodaImage);
    thirdContainer.appendChild(sodaName);
    thirdContainer.appendChild(sodaDesc);

    const fourthContainer = document.createElement('div');
    fourthContainer.classList.add('fourthContainer');
    const menuImage = document.createElement('img');
    menuImage.src = img3;
    const menuName = document.createElement('h3');
    menuName.textContent = "Krabby Menu";
    const menuDesc = document.createElement('p');
    menuDesc.textContent = "You wanted all the 3 above but your order would soung too long, fear no more with the KRABBBBY MENUUUUUUUUUU, all 3 above in 1, + sauce of course."

    fourthContainer.appendChild(menuImage);
    fourthContainer.appendChild(menuName);
    fourthContainer.appendChild(menuDesc)

    content.appendChild(menuContainer);
    content.appendChild(firstContainer);
    content.appendChild(secondContainer);
    content.appendChild(thirdContainer);
    content.appendChild(fourthContainer);
}

export { menuContent }