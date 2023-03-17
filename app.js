const image = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
const imageSlider = document.getElementById("slider");
let count = 0;
setInterval(() => {
    if(count === image.length){
        count = 0;
    }
    console.log(image[count]);
    imageSlider.setAttribute('src',image[count]);
    count++;
},2000);