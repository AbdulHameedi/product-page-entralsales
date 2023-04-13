function dropdownSelect(){
    document.querySelector(".dropdown-content").classList.toggle("dropdown-select-js")
}


document.querySelector(".dropdown-select").addEventListener("click", dropdownSelect)

document.querySelector(".services-categories").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")
})


// MODAL FOR QUICK EYE

var modal = document.querySelector(".overlay")


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
    document.querySelector(".overlay").classList.add("eagle-display");
    modal.style.display = "block"
}

document.querySelector(".eagle-eye-main").addEventListener("click", eagleClick);




// EAGLE NON DISPLAY

// 
function eagleNonDisplay(){
    modal.style.display = "none"
    document.body.style.overflow = "visible";
}

document.querySelector(".cancel-eagle").addEventListener("click", eagleNonDisplay);


window.onclick = function(event){
    if (event.target == modal){
            modal.style.display = "none";
    }
}



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
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Onions are a good source of several B vitamins, including pyridoxine."
    document.getElementById("text-short-quickview").innerHTML = "Onions can be stored in a cool, dry place for several weeks, making them a long-lasting staple";
    document.getElementById("amount-quickview").innerHTML = '7,000.00';
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

document.querySelector(".translate-image-3").addEventListener("mouseover", imgTranslateThree);


// QUICK VIEW DISPLAY

function eagleClickThree(){


    var imgAtttributeSetFourA = "./assets/img/ginger-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Ginger is a popular spice with a warm, pungent flavor and a long history of use in traditional medicine."
    document.getElementById("text-short-quickview").innerHTML = "Ginger can be used fresh, dried, powdered, and it is a common ingredient around the world.";
    document.getElementById("amount-quickview").innerHTML = '5,000.00';
    //  
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
    document.getElementById("icon-quickview-2").classList.add("font-bold")
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
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
    imgTranslateFour()
}
document.querySelector(".translate-image-4").addEventListener("mouseover", imgTranslateFour);


// QUICK VIEW DISPLAY

function eagleClickFour(){


    var imgAtttributeSetFourA = "./assets/img/garlic-" + 1 + ".png";
    modal.style.display = "block"
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



// -----------------------------------------------------FIFTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateFive(){
    document.querySelector(".translate-image-5").classList.add("image-transition");
}  
function event(){
    imgTranslateFive()
}
document.querySelector(".translate-image-5").addEventListener("mouseover", imgTranslateFive);


// QUICK VIEW DISPLAY

function eagleClickFive(){


    var imgAtttributeSetFourA = "./assets/img/tumeric-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Turmeric is a spice that is commonly used in Middle Eastern, and Southeast Asian cuisine."
    document.getElementById("text-short-quickview").innerHTML = "The active ingredient in turmeric is known for its powerful anti-inflammatory and antioxidant properties.";
    document.getElementById("amount-quickview").innerHTML = '10,000.00';
    document.getElementById("icon-quickview").classList.remove("text-[#FFD700]")
    document.getElementById("icon-quickview").classList.remove("font-bold")
    document.getElementById("review-quickview").innerHTML = '(3) Reviews';
   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/tumeric-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-5").addEventListener("click", eagleClickFive);



// -----------------------------------------------------SIXTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateSix(){
    document.querySelector(".translate-image-6").classList.add("image-transition");
}  
document.querySelector(".translate-image-6").addEventListener("mouseover", imgTranslateSix);


// QUICK VIEW DISPLAY

function eagleClickSix(){


    var imgAtttributeSetFourA = "./assets/img/dates-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Dates can provide a quick burst of energy during a long day of fasting"
    document.getElementById("text-short-quickview").innerHTML = "Dates are rich in fiber, which can help to promote digestive health and prevent constipation, a common issue during Ramadan.";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/dates-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-6").addEventListener("click", eagleClickSix);






// -----------------------------------------------------SEVENTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateSeven(){
    document.querySelector(".translate-image-7").classList.add("image-transition");
}  

document.querySelector(".translate-image-7").addEventListener("mouseover", imgTranslateSeven);


// QUICK VIEW DISPLAY

function eagleClickSeven(){


    var imgAtttributeSetFourA = "./assets/img/sweetpotato-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Sweet potatoes are a nutritious and versatile root vegetable that are often used in cooking."
    document.getElementById("text-short-quickview").innerHTML = "Sweet potatoes are typically orange or purple and have a sweet, creamy flesh that can be roasted.";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

    //  
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
    document.getElementById("icon-quickview-2").classList.add("font-bold")
    document.getElementById("icon-quickview-2").classList.add(" text-[#FFD700]")
    document.getElementById("review-quickview").innerHTML = '(5) Reviews';
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/sweetpotato-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-7").addEventListener("click", eagleClickSeven);


// -----------------------------------------------------EIGHT SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateEight(){
    document.querySelector(".translate-image-8").classList.add("image-transition");
}  
document.querySelector(".translate-image-8").addEventListener("mouseover", imgTranslateEight);


// QUICK VIEW DISPLAY

function eagleClickEight(){


    var imgAtttributeSetFourA = "./assets/img/sugar-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Sugar cravings are common, but can be satisfied with healthier options."
    document.getElementById("text-short-quickview").innerHTML = "The sugar industry employs millions of people worldwide in cultivation and processing.";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/sugar-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-8").addEventListener("click", eagleClickEight);




// -----------------------------------------------------NINTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateNine(){
    document.querySelector(".translate-image-9").classList.add("image-transition");
}  
document.querySelector(".translate-image-9").addEventListener("mouseover", imgTranslateNine);


// QUICK VIEW DISPLAY

function eagleClickNine(){


    var imgAtttributeSetFourA = "./assets/img/garri-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Garri's nutrients are essential and can help prevent deficiencies that can lead to illness."
    document.getElementById("text-short-quickview").innerHTML = "Garri is rich in vitamins and minerals, including vitamin C, vitamin B6, iron, and magnesium. ";
    document.getElementById("amount-quickview").innerHTML = '20,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/garri-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-9").addEventListener("click", eagleClickNine);



// -----------------------------------------------------TENTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTen(){
    document.querySelector(".translate-image-10").classList.add("image-transition");
}  
document.querySelector(".translate-image-10").addEventListener("mouseover", imgTranslateTen);


// QUICK VIEW DISPLAY

function eagleClickTen(){


    var imgAtttributeSetFourA = "./assets/img/yam.jpg";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "The high fiber content in yam can help improve digestive health"
    document.getElementById("text-short-quickview").innerHTML = "Yam is a highly nutritious tuber that is packed with vitamins, minerals, and fiber";
    document.getElementById("icon-quickview").classList.remove("text-[#FFD700]")
    document.getElementById("icon-quickview").classList.remove("font-bold")
    document.getElementById("review-quickview").innerHTML = '(3) Reviews';
    document.getElementById("amount-quickview").innerHTML = '7,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/yam-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-10").addEventListener("click", eagleClickTen);





// -----------------------------------------------------ELEVENTH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateEleven(){
    document.querySelector(".translate-image-11").classList.add("image-transition");
}  

document.querySelector(".translate-image-11").addEventListener("mouseover", imgTranslateEleven);


// QUICK VIEW DISPLAY

function eagleClickEleven(){


    var imgAtttributeSetFourA = "./assets/img/elubo-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Yoruba elubo is rich in carbohydrates, which makes it an excellent source of energy for the body. "
    document.getElementById("text-short-quickview").innerHTML = "Elubo is a low-fat, low-calorie food that can help with healthy weight management.";
    document.getElementById("amount-quickview").innerHTML = '15,000.00';
    //  
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
    document.getElementById("icon-quickview-2").classList.add("font-bold")
    document.getElementById("icon-quickview-2").classList.add("text-[#FFD700]")
    document.getElementById("review-quickview").innerHTML = '(5) Reviews';
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/elubo-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-11").addEventListener("click", eagleClickEleven);




// -----------------------------------------------------TWELVETH SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwelve(){
    document.querySelector(".translate-image-4").classList.add("image-transition");
}  
document.querySelector(".translate-image-4").addEventListener("mouseover", imgTranslateTwelve);


// QUICK VIEW DISPLAY

function eagleClickTwelve(){


    var imgAtttributeSetFourA = "./assets/img/beans-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Beans are a great source of plant-based protein, fiber, vitamins, and minerals."
    document.getElementById("text-short-quickview").innerHTML = "They also contain resistant starch, which can promote the growth of good bacteria in the gut, improving digestive health.";
    document.getElementById("amount-quickview").innerHTML = '10,000.00';
    //  
   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/beans-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-12").addEventListener("click", eagleClickTwelve);
