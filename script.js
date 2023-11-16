const imageContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    imgNum = 10;
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imgNum; index++) {
        const newImg = document.createElement('img');
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainer.appendChild(newImg);
    }
    
}