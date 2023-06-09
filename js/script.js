let loadMore = document.querySelector(".load-more") 
let showCategory = document.querySelector(".show-category")
let showCategoryTwo = document.querySelector(".show-category-two")
let dropdownContent = document.querySelectorAll(".dropdown-content p")
let allProducts = document.querySelector(".all-products")
let categoryOne = document.querySelector(".category-one")
let categoryTwo = document.querySelector(".category-two")
let categoryThree = document.querySelector(".category-three")
let categoryFour = document.querySelector(".category-four")
let active = document.querySelector(".active")
let pepper = document.getElementById("pepper")
let rawFoods = document.getElementById("rawfoods")
let fish = document.getElementById("fish")
let nylon = document.getElementById("nylon")
let roots = document.getElementById("roots")
let all = document.getElementById("all")


function dropdownSelect(){
    document.querySelector(".dropdown-content").classList.toggle("dropdown-select-js")
}


document.querySelector(".dropdown-select").addEventListener("click", dropdownSelect)

document.querySelector(".services-categories").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")
}
)

categoryTwo.onclick = function(){
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")

}

categoryThree.onclick = function(){
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")

}

categoryFour.onclick = function(){
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")

}

all.onclick = function(){
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")
}

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




// -----------------------------------------------------THIRTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateThirteen(){
    document.querySelector(".translate-image-13").classList.add("image-transition");
}  

document.querySelector(".translate-image-13").addEventListener("mouseover", imgTranslateThirteen);


// QUICK VIEW DISPLAY

function eagleClickThirteen(){

    var imgAtttributeSetFourA = "./assets/img/driedyam-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Dried yam is a popular food ingredient that has been used for centuries in West African cuisine. I"
    document.getElementById("text-short-quickview").innerHTML = "It is also rich in vitamins and minerals, including potassium, calcium, and vitamin C.";
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

var imgAtttributeSetFourB = "./assets/img/driedyam-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-13").addEventListener("click", eagleClickThirteen);





// -----------------------------------------------------FOURTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateFourteen(){
    document.querySelector(".translate-image-14").classList.add("image-transition");
}  
document.querySelector(".translate-image-14").addEventListener("mouseover", imgTranslateFourteen);


// QUICK VIEW DISPLAY

function eagleClickFourteen(){


    var imgAtttributeSetFourA = "./assets/img/cassavaflour-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Cassava flour is versatile and can be used in a wide range of recipes"
    document.getElementById("text-short-quickview").innerHTML = "Cassava flour is rich in dietary fiber, which can help regulate blood sugar levels";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/cassavaflour-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-14").addEventListener("click", eagleClickFourteen);




// -----------------------------------------------------FIFTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateFifteen(){
    document.querySelector(".translate-image-15").classList.add("image-transition");
}  
document.querySelector(".translate-image-15").addEventListener("mouseover", imgTranslateFifteen);


// QUICK VIEW DISPLAY

function eagleClickFifteen(){


    var imgAtttributeSetFourA = "./assets/img/rice-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "White rice supports energy and restores glycogen levels after exercise"
    document.getElementById("text-short-quickview").innerHTML = "Rice is an affordable and versatile ingredient that can be used in a variety of dishes, from savory to sweet. ";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

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

var imgAtttributeSetFourB = "./assets/img/rice-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-15").addEventListener("click", eagleClickFifteen);



// -----------------------------------------------------SIXTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateSixteen(){
    document.querySelector(".translate-image-16").classList.add("image-transition");
}  
document.querySelector(".translate-image-10").addEventListener("mouseover", imgTranslateSixteen);


// QUICK VIEW DISPLAY

function eagleClickSixteen(){


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



document.querySelector(".eagle-eye-main-16").addEventListener("click", eagleClickSixteen);




// -----------------------------------------------------SEVENTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateSeventeen(){
    document.querySelector(".translate-image-17").classList.add("image-transition");
}  
document.querySelector(".translate-image-17").addEventListener("mouseover", imgTranslateSeventeen);


// QUICK VIEW DISPLAY

function eagleClickSeventeen(){


    var imgAtttributeSetFourA = "./assets/img/croaker-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Croaker is a great seafood option for anyone looking to boost their immune system"
    document.getElementById("text-short-quickview").innerHTML = "Croaker a good source of protein, vitamins, and minerals, and is low in fat and calories. ";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/croaker-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-17").addEventListener("click", eagleClickSeventeen);




// -----------------------------------------------------EIGHTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateEighteen(){
    document.querySelector(".translate-image-18").classList.add("image-transition");
}  

document.querySelector(".translate-image-18").addEventListener("mouseover", imgTranslateEighteen);


// QUICK VIEW DISPLAY

function eagleClickEighteen(){


    var imgAtttributeSetThreeA = "./assets/img/hake-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Hake is a good source of potassium, which helps to regulate blood pressure."
    document.getElementById("text-short-quickview").innerHTML = "Hake is a nutritious and delicious fish that is rich in protein, vitamins, and minerals";
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

var imgAtttributeSetThreeB = "./assets/img/hake-" + 2 + ".png";

function imgQuickviewThree(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetThreeA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewThree)
}



document.querySelector(".eagle-eye-main-18").addEventListener("click", eagleClickEighteen);




// -----------------------------------------------------NINETTEEN SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateNineteen(){
    document.querySelector(".translate-image-19").classList.add("image-transition");
}  

document.querySelector(".translate-image-19").addEventListener("mouseover", imgTranslateNineteen);


// QUICK VIEW DISPLAY

function eagleClickNineteen(){


    var imgAtttributeSetFourA = "./assets/img/mackerel-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Mackerel is a nutrient-dense fish that is packed with essential vitamins and minerals. "
    document.getElementById("text-short-quickview").innerHTML = "One of the great benefits of mackerel is that it is a low-calorie, high-protein food..";
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

var imgAtttributeSetFourB = "./assets/img/mackerel-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-19").addEventListener("click", eagleClickNineteen);




// -----------------------------------------------------TWENTY SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwenty(){
    document.querySelector(".translate-image-20").classList.add("image-transition");
}  
document.querySelector(".translate-image-20").addEventListener("mouseover", imgTranslateTwenty);


// QUICK VIEW DISPLAY

function eagleClickTwenty(){


    var imgAtttributeSetFourA = "./assets/img/titus-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Titus fish are also a good source of protein, vitamins, and minerals"
    document.getElementById("text-short-quickview").innerHTML = "Titus fish are also a good source of protein, vitamins, and minerals, making them a healthy addition to any diet.";
    document.getElementById("amount-quickview").innerHTML = '10,000.00';
    //  
   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/titus-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-20").addEventListener("click", eagleClickTwenty);



// -----------------------------------------------------TWENTY-ONE SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwentyOne(){
    document.querySelector(".translate-image-21").classList.add("image-transition");
}  
document.querySelector(".translate-image-21").addEventListener("mouseover", imgTranslateTwentyOne);


// QUICK VIEW DISPLAY

function eagleClickTwentyOne(){


    var imgAtttributeSetFourA = "./assets/img/tomato-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "The vitamin C found in tomatoes can help improve skin health"
    document.getElementById("text-short-quickview").innerHTML = "Tomatoes are a great source of vitamins A, C, and K, as well as potassium and folate. ";
    document.getElementById("amount-quickview").innerHTML = '9,000.00';

   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/tomato-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-21").addEventListener("click", eagleClickTwentyOne);




// -----------------------------------------------------    TWENTY TWO SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwentyTwo(){
    document.querySelector(".translate-image-22").classList.add("image-transition");
}  

document.querySelector(".translate-image-22").addEventListener("mouseover", imgTranslateTwentyTwo);


// QUICK VIEW DISPLAY

function eagleClickTwentyTwo(){


    var imgAtttributeSetThreeA = "./assets/img/tatashe-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Yoruba tatashe pepper is rich in vitamins and minerals, including vitamin C"
    document.getElementById("text-short-quickview").innerHTML = "Tatashe pepper is also known for its anti-inflammatory properties, which can help reduce inflammation and pain in the body.";
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

var imgAtttributeSetThreeB = "./assets/img/tatashe-" + 2 + ".png";

function imgQuickviewThree(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetThreeA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewThree)
}



document.querySelector(".eagle-eye-main-22").addEventListener("click", eagleClickTwentyTwo);



// -----------------------------------------------------TWENTY-THREE SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwentyThree(){
    document.querySelector(".translate-image-23").classList.add("image-transition");
}  

document.querySelector(".translate-image-23").addEventListener("mouseover", imgTranslateTwentyThree);


// QUICK VIEW DISPLAY

function eagleClickTwentyThree(){


    var imgAtttributeSetFourA = "./assets/img/bawaa-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Bawaa has been shown to reduce inflammation in the body, which can help alleviate pain"
    document.getElementById("text-short-quickview").innerHTML = "One of the most significant benefits of Yoruba bawaa pepper is its ability to boost metabolism and aid in weight loss.";
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

var imgAtttributeSetFourB = "./assets/img/bawaa-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-23").addEventListener("click", eagleClickTwentyThree);


// -----------------------------------------------------TWENTY-FOUR SERVICE-----------------------
// IMAGE TRANSLATE
function imgTranslateTwentyFour(){
    document.querySelector(".translate-image-20").classList.add("image-transition");
}  
document.querySelector(".translate-image-20").addEventListener("mouseover", imgTranslateTwentyFour);


// QUICK VIEW DISPLAY

function eagleClickTwentyFour(){


    var imgAtttributeSetFourA = "./assets/img/rodo-" + 1 + ".png";
    modal.style.display = "block"
    document.querySelector(".quick-eye").classList.add("eagle-display");
    document.querySelector(".overlay").classList.add("eagle-display");
    document.getElementById("text-long-quickview").innerHTML = "Rodo is a potent antioxidant that helps to protect the body against damage from free radicals. "
    document.getElementById("text-short-quickview").innerHTML = "Yoruba rodo pepper is rich in vitamin C, which is a powerful antioxidant that helps to protect the body against damage from free radicals";
    document.getElementById("amount-quickview").innerHTML = '10,000.00';
    //  
   
    document.getElementById('imgforquickview').setAttribute("src" , imgAtttributeSetFourA)


    // ICON -1


function imgQuickviewTwo(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourB)
}

document.querySelector(".icon-arrow").addEventListener("click", imgQuickviewTwo)



// ICON - 2

var imgAtttributeSetFourB = "./assets/img/rodo-" + 2 + ".png";

function imgQuickviewFour(){
    document.querySelector(".main-img-quickview").setAttribute("src", imgAtttributeSetFourA)
}

document.querySelector(".icon-arrow-2").addEventListener("click", imgQuickviewFour)
}



document.querySelector(".eagle-eye-main-24").addEventListener("click", eagleClickTwentyFour);



// --------------------END OF SERVICES





loadMore.onclick = function (){
    loadMore.style.display = 'none'
    showCategory.style.display = 'grid'
    showCategoryTwo.style.display = 'grid'
}   

for (let i = 0; i < dropdownContent.length; i++){
    dropdownContent[i].addEventListener("click" , productNames);
    function productNames(){
        allProducts.textContent = this.textContent;
        // dropdownContent[0].classList.remove("active")
        // this.classList.add("active")

    }
}


pepper.onclick = function(){
    categoryOne.style.display = 'none'
    categoryTwo.style.display = 'none'
    categoryThree.style.display = 'none'
    categoryFour.style.display = 'grid'
    loadMore.style.display = 'none'
    
}

rawFoods.onclick = function(){
    categoryOne.style.display = 'grid'
    categoryTwo.style.display = 'none'
    categoryThree.style.display = 'none'
    categoryFour.style.display = 'none'
    loadMore.style.display = 'none'
    
}

fish.onclick = function(){
    categoryOne.style.display = 'none'
    categoryTwo.style.display = 'none'
    categoryThree.style.display = 'grid'
    categoryFour.style.display = 'none'
    loadMore.style.display = 'none'
    
}

roots.onclick = function(){
    categoryOne.style.display = 'none'
    categoryTwo.style.display = 'grid'
    categoryThree.style.display = 'none'
    categoryFour.style.display = 'none'
    loadMore.style.display = 'none'
}

all.onclick = function(){
    categoryOne.style.display = 'grid'
    categoryTwo.style.display = 'grid'
    categoryThree.style.display = 'grid'
    categoryFour.style.display = 'grid'
}