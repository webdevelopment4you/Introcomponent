let image = document.getElementById("backgroundImage");

let changeBackground = () => {
    if (document.body.offsetWidth < 768) {
        image.src = "images/bg-intro-mobile.png";
        console.log(image.src);
    }
    else {
        image.src = "images/bg-intro-desktop.png";
    }
}

changeBackground()

