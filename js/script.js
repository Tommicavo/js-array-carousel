console.log("js ok");
// recupero gli elementi dal dom
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const imgContainer = document.getElementById("img_container");
const thumbnails = document.getElementById("thumbnails");
//lista source immagini
const listImages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// creo i tag per le immagini grandi
for (let i = 0; i < listImages.length; i++){
    const image = document.createElement("img");
    image.src = listImages[i];
    image.alt = image.title = `image_${i + 1}`;
    image.classList.add("hideImg");
    imgContainer.appendChild(image);
}
// creo i tag per le immagini thumbnails
for (let i = 0; i < listImages.length; i++){
    const thumbImg = document.createElement("img");
    thumbImg.src = listImages[i];
    thumbImg.alt = thumbImg.title = `image_${i + 1}`;
    thumbImg.classList.add("blackImg");
    thumbnails.appendChild(thumbImg);
}
// le mettiamo negli array per nodi
const images = document.querySelectorAll("#img_container img");
const thumbImges = document.querySelectorAll("#thumbnails img");

// init
let currentIdx = 0;
images[currentIdx].classList.remove("hideImg");
images[currentIdx].classList.add("showImg");
thumbImges[currentIdx].classList.remove("blackImg");
thumbImges[currentIdx].classList.add("whiteImg");
// pulsante next
nextButton.addEventListener("click", function(){
    images[currentIdx].classList.remove("showImg");
    images[currentIdx].classList.add("hideImg");
    thumbImges[currentIdx].classList.remove("whiteImg");
    thumbImges[currentIdx].classList.add("blackImg");
    if (currentIdx == listImages.length - 1){
        currentIdx = 0;
    } else currentIdx += 1;
    images[currentIdx].classList.remove("hideImg");
    images[currentIdx].classList.add("showImg");
    thumbImges[currentIdx].classList.remove("blackImg");
    thumbImges[currentIdx].classList.add("whiteImg");
    
});
// pulsante prev
prevButton.addEventListener("click", function(){
    images[currentIdx].classList.remove("showImg");
    images[currentIdx].classList.add("hideImg");
    thumbImges[currentIdx].classList.remove("whiteImg");
    thumbImges[currentIdx].classList.add("blackImg");
    if (currentIdx == 0){
        currentIdx = listImages.length - 1;
    } else currentIdx -= 1;
    images[currentIdx].classList.remove("hideImg");
    images[currentIdx].classList.add("showImg");
    thumbImges[currentIdx].classList.remove("blackImg");
    thumbImges[currentIdx].classList.add("whiteImg");
});
