console.log("js ok");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const listImages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const imgContainer = document.querySelector(".gallery .img_container");

for (let i = 0; i < listImages.length; i++){
    const image = document.createElement("img");
    image.src = listImages[i];
    image.alt = image.title = `image_${i + 1}`;
    image.classList.add("hideImg");
    imgContainer.appendChild(image);
}

const images = document.querySelectorAll(".img_container img");

let currentIdx = 0;
images[currentIdx].classList.remove("hideImg");
images[currentIdx].classList.add("showImg");

nextButton.addEventListener("click", function(){
    images[currentIdx].classList.remove("showImg");
    images[currentIdx].classList.add("hideImg");
    if (currentIdx == listImages.length - 1){
        currentIdx = 0;
    } else currentIdx += 1;
    images[currentIdx].classList.remove("hideImg");
    images[currentIdx].classList.add("showImg");
});

prevButton.addEventListener("click", function(){
    images[currentIdx].classList.remove("showImg");
    images[currentIdx].classList.add("hideImg");
    if (currentIdx == 0){
        currentIdx = listImages.length - 1;
    } else currentIdx -= 1;
    images[currentIdx].classList.remove("hideImg");
    images[currentIdx].classList.add("showImg");
});
