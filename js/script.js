function dropdownSelect(){
    document.querySelector(".dropdown-content").classList.toggle("dropdown-select-js")
}


document.querySelector(".dropdown-select").addEventListener("click", dropdownSelect)

document.querySelector(".services-categories").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")
})


// -----------------------------------------------------FIRST SERVICE-----------------------

// IMAGE TRANSLATE
function imgTranslate(){
    document.querySelector(".translate-image").classList.add("image-transition");
}  
function event(){
    imgTranslate()
}

document.querySelector(".translate-image").addEventListener("mouseover", imgTranslate);



// IMG QUICK VIEW

// ICON -1

var imgAtttributeSet = "./assets/img/carrot-" + 3 + ".png";

function imgQuickview(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSet)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickview)




// ICON - 2

var imgAtttributeSetTwo = "./assets/img/carrot-" + 2 + ".png";

function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetTwo)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewTwo)




// QUICK VIEW DISPLAY

function eagleClick(){
    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.body.style.overflow = "hidden";
}

document.querySelector(".eagle-eye-main").addEventListener("click", eagleClick);




// EAGLE NON DISPLAY

// 
function eagleNonDisplay(){
    document.querySelector(".quick-eye").classList.remove("eagle-display");
    document.querySelector(".overlay").classList.remove("eagle-display");
    document.body.style.overflow = "visible";
}

document.querySelector(".cancel-eagle").addEventListener("click", eagleNonDisplay);
document.querySelector(".overlay").addEventListener("click", eagleNonDisplay);



// -----------------------------------------------------SECOND SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwo(){
    document.querySelector(".translate-image-2").classList.add("image-transition");
}  
function event(){
    imgTranslateTwo()
}

document.querySelector(".translate-image-2").addEventListener("mouseover", imgTranslateTwo);

// QUICK VIEW DISPLAY

function eagleClickTwo(){
    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.body.style.overflow = "hidden";
}

document.querySelector(".eagle-eye-main-2").addEventListener("click", eagleClickTwo);







