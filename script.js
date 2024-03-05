// STEP 1: getElementById
const changeImageButton = document.getElementById('changeImageButton');

const imageElement = document.getElementById('image');

const sepiaRange = document.getElementById('sepiaRange');
const grayScaleRange = document.getElementById('grayScaleRange');
const blurRange = document.getElementById('blurRange');
const brightnessRange = document.getElementById('brightnessRange');
const contrastRange = document.getElementById('contrastRange');
const saturateRange = document.getElementById('saturateRange');

const toggleFilter = document.getElementById('toggleFilter')

// STEP 2: variabili
let isActive = true;

// STEP 3: eventi
changeImageButton.addEventListener('click', changeImage);
sepiaRange.addEventListener('input', updateFilters);
grayScaleRange.addEventListener('input', updateFilters);
blurRange.addEventListener('input', updateFilters);
brightnessRange.addEventListener('input', updateFilters);
contrastRange.addEventListener('input', updateFilters);
saturateRange.addEventListener('input', updateFilters);
toggleFilter.addEventListener('change', switchFilters);

// STEP 4: funzioni
function changeImage() {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    const imageUrl = `https://picsum.photos/id/${randomImageId}/640/480`;
    imageElement.src = imageUrl;
    isActive = true;
    toggleFilter.checked = false
    // aggiungerlo dopo aver creato il metodo resetFilters
    resetFilters();
}

function updateFilters() {
    const sepiaValue = sepiaRange.value;
    const grayScaleValue = grayScaleRange.value;
    const blurValue = blurRange.value;
    const brightnessValue = brightnessRange.value;
    const contrastValue = contrastRange.value;
    const saturateValue = saturateRange.value;

    const filters = `sepia(${sepiaValue}%) grayscale(${grayScaleValue}%) blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) saturate(${saturateValue}%)`

    // STEP 5: Condizioni - attenzione al ternario!!!
    imageElement.style.filter = isActive ? filters : 'none';
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


function switchFilters() {
    isActive = !isActive;
    updateFilters();
}

changeImage()