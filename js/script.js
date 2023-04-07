function dropdownSelect(){
    document.querySelector(".dropdown-content").classList.toggle("dropdown-select-js")
}


document.querySelector(".dropdown-select").addEventListener("click", dropdownSelect)

document.querySelector(".services-categories").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.remove("dropdown-select-js")
})

// IMAGE TRANSLATE SERVICES
function imgTranslate(){
    document.querySelector(".services-grid img").classList.add("image-transition");
}  
function event(){
    imgTranslate()
}

document.querySelector(".services-grid img").addEventListener("mouseover", imgTranslate);

