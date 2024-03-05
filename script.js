const changeImageButton = document.getElementById('changeImageButton');

const imageElement = document.getElementById('image');


const sepiaRange = document.getElementById('sepiaRange');
const grayScaleRange = document.getElementById('grayScaleRange');
const blurRange = document.getElementById('blurRange');
const brightnessRange = document.getElementById('brightnessRange');
const contrastRange = document.getElementById('contrastRange');
const saturateRange = document.getElementById('saturateRange');
const toggleButton = document.getElementById('toggleFilter')

let isActive = true;

changeImageButton.addEventListener('click', changeImage);
sepiaRange.addEventListener('input', updateFilters);
grayScaleRange.addEventListener('input', updateFilters);
blurRange.addEventListener('input', updateFilters);
brightnessRange.addEventListener('input', updateFilters);
contrastRange.addEventListener('input', updateFilters);
saturateRange.addEventListener('input', updateFilters);
toggleButton.addEventListener('click', switchFilters);

function changeImage() {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    const imageUrl = `https://picsum.photos/id/${randomImageId}/640/480`;
    imageElement.src = imageUrl;
    resetFilters();
}

function resetFilters() {
    sepiaRange.value = 0;
    grayScaleRange.value = 0;
    blurRange.value = 0;
    brightnessRange.value = 100;
    contrastRange.value = 100;
    saturateRange.value = 100;
    imageElement.style.filter = 'none';
}

function updateFilters() {
    const sepiaValue = sepiaRange.value;
    const grayScaleValue = grayScaleRange.value;
    const blurValue = blurRange.value;
    const brightnessValue = brightnessRange.value;
    const contrastValue = contrastRange.value;
    const saturateValue = saturateRange.value;

    const filters = `sepia(${sepiaValue}%) grayscale(${grayScaleValue}%) blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) saturate(${saturateValue}%)`

    imageElement.style.filter = isActive ? filters : '';
}

function switchFilters() {
    isActive = !isActive;

    updateFilters();
}

changeImage()