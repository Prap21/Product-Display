let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");
let images = ["images/image1.png", "images/image2.png", "images/image3.png"];
let currentIndex = 0;

// Function to update the image and active button
function updateImage(index) {
    productImg.src = images[index];
    for (let bt of btn) {
        bt.classList.remove("active");
    }
    btn[index].classList.add("active");
}

// Initial image setup
updateImage(currentIndex);

// Event listeners for buttons
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        currentIndex = i;
        updateImage(currentIndex);
    };
}

// Event listener for mouse wheel scroll
document.addEventListener("wheel", function(event) {
    if (event.deltaY < 0) {
        // Scroll up
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    } else {
        // Scroll down
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    }
    updateImage(currentIndex);
});
