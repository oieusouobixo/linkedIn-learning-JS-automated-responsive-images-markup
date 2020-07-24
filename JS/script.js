// 1. capture all image elements
const IMAGES = document.querySelectorAll("img");

// 4. create object, have each of the properties map to different sizes and the value of each of the properties be the actual size's attribute
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",  // image will be full width of the browser until 799px,
    feature: "(max-width: 799px) 100vw, 558px", // otherwise they will be the value in px
    story: "(max-width: 799px) 100vw, 670px",   // expressed after the comma
}

// 3. loop through all image sizes and select the correct one for each case
function makeSrcSet(imgSrc) {
    let markUp = [];
    let width = 400; // 400 is the lowest picture size and also the difference between sizes

    for (let i = 0; i < 5; i++) { // loop will run through the five sizes of each image
        markUp[i] = imgSrc + "-" + width + ".jpg " + width + "w"; // [imgSrc]-[width].jpg [width]w is the template for the srcset html element
        width += 400; // add 400 to the value of width so it loops through all the sizes
    }

    return markUp.join(); // get a comma-separated list
}

// 2. loop through all images source attributes
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8); // slice the resolution number out of the files in the search
    let srcSet = makeSrcSet(imgSrc); // 3. call makeSrcSet function
    IMAGES[i].setAttribute("srcset", srcSet); // 5. grab the current image element and add to srcset attribute with the values generated in script
    console.log(srcSet);

    let type = IMAGES[i].getAttribute("data-type"); //identify the custom attribute 'data-type' for each image
    let sizes =  SIZES[type]; // 4. use type to pull out the correct property from our sizes object
    IMAGES[i].setAttribute("sizes", sizes); // 5. grab the current image element and add to sizes attribute with the values generated in script
    console.log(sizes);
}