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


    var imgAtttributeSetThreeA = "./assets/img/onion-" + 1 + ".png";

    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Onions are a good source of several B vitamins, including pyridoxine."
    document.getElementById("text-short-quickview").innerHTML = "Onions can be stored in a cool, dry place for several weeks, making them a long-lasting staple";
    document.getElementById("amount-quickview").innerHTML = '<span class="line-through text-[#999999]">19,000</span> &nbsp; <i class="fa-solid fa-naira-sign"></i> 6, 000.00';
    //  
    document.getElementById("icon-quickview").classList.remove("text-[#FFD700]")
    document.getElementById("icon-quickview").classList.remove("font-bold")
    document.getElementById("review-quickview").innerHTML = '(3) Reviews';
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetThreeA)


    // ICON -1


function imgQuickview(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetThreeB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickview)



// ICON - 2

var imgAtttributeSetThreeB = "./assets/img/onion-" + 2 + ".png";

function imgQuickviewThree(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetThreeA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewThree)
}



document.querySelector(".eagle-eye-main-2").addEventListener("click", eagleClickTwo);







// -----------------------------------------------------THIIRD SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateThree(){
    document.querySelector(".translate-image-3").classList.add("image-transition");
}  
function event(){
    imgTranslateTwo()
}
document.querySelector(".translate-image-3").addEventListener("mouseover", imgTranslateThree);


// QUICK VIEW DISPLAY

function eagleClickThree(){


    var imgAtttributeSetFourA = "./assets/img/ginger-" + 1 + ".png";

    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Ginger is a popular spice with a warm, pungent flavor and a long history of use in traditional medicine."
    document.getElementById("text-short-quickview").innerHTML = "Ginger can be used fresh, dried, powdered, and it is a common ingredient around the world.";
    document.getElementById("amount-quickview").innerHTML = '5,000.00';
    //  
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
    document.getElementById("icon-quickview-2").classList.add("font-bold")
    document.getElementById("icon-quickview-2").classList.add("ftext-[#FFD700]")
    document.getElementById("review-quickview").innerHTML = '(5) Reviews';
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/ginger-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-3").addEventListener("click", eagleClickThree);



// -----------------------------------------------------FOURTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateFour(){
    document.querySelector(".translate-image-4").classList.add("image-transition");
}  
function event(){
    imgTranslateTwo()
}
document.querySelector(".translate-image-4").addEventListener("mouseover", imgTranslateFour);


// QUICK VIEW DISPLAY

function eagleClickFour(){


    var imgAtttributeSetFourA = "./assets/img/garlic-" + 1 + ".png";

    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Garlic is a member of the Allium family, which also includes onions, shallots, and leeks."
    document.getElementById("text-short-quickview").innerHTML = "Garlic can be stored at room temperature for several weeks, or in the refrigerator for up to a month.";
    document.getElementById("amount-quickview").innerHTML = '10,000.00';
    //  
   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/garlic-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-4").addEventListener("click", eagleClickFour);









