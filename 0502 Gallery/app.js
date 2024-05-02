document.addEventListener('DOMContentLoaded', () => {
    const showGalleryB = document.querySelector('#showGallery');
    const showRandomizeB = document.querySelector('#showRandomize');
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', ]
    const galleryCont = document.querySelector('.galleryCont')

    showRandomizeB.style.display = 'none';

    for(let i = 0; i < images.length; i++){
        const img = document.createElement('img');
        img.src = images[i];
        galleryCont.appendChild(img);
        img.addEventListener('dblclick', () => {
            doubleClickImg(img);
        });
    }

    showGalleryB.addEventListener('click', () => {
        showRandomizeB.style.display = 'block';
        showGalleryB.style.display = 'none';
    });

    showRandomizeB.addEventListener('click', () => {
        galleryCont.innerHTML = '';
        randomizeImg();
    })

    galleryCont.addEventListener('dblclick', (event) => {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'IMG') {
            doubleClickImg(clickedElement);
        }
    });

    function randomizeImg(){
        const shufArray = shuffleArray(images)
        for(let i = 0; i < images.length; i++){
            const img = document.createElement('img');
            img.src = shufArray[i];
            galleryCont.appendChild(img);
        };
    }

    function shuffleArray(array) { //good randomizer
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function doubleClickImg(img){
        img.src = 'images/1.jpg';
        console.log('AAAAAAAAAAAA');
    }
});