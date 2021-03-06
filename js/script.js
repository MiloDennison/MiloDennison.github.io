let alt = true;

const header =  document.querySelector("#landing-header");
const buttons = document.querySelectorAll("button");

/**
 * 
 * @param {string} color the color assigned to the button that will set the gradient when hovered over
 */
function hoverImage(color) {

    if (alt) {
        header.classList.add(`gradient-${color}`);
    }

    else{
        header.classList.remove(`gradient-${color}`);
    }
    alt = !alt;
}

buttons.forEach(button => {

    button.addEventListener("mouseover", function() {
        hoverImage("teal");
    });

    button.addEventListener("mouseout", function() {
        hoverImage("teal");
    });

});