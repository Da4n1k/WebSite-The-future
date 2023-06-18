let indexSlide = 1

function nextClick(){
    slider(indexSlide += 1) // now slide + 1 = nexy slide
}

function lastClick(){
    slider(indexSlide += 1) // now slide - 1 = last slide
}

function slider(n){
    let slides = document.getElementsByClassName("item")

    if(n < 1){
        indexSlide = slides.length
    }

    if (n > slides.length){
        indexSlide = 1
    }

    let btnNext = document.getElementById("last")
    if(indexSlide == 1){
        btnNext.style.display = "none"
    }else{
        btnNext.style.display = "flex"
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    slides[indexSlide - 1].style.display = "block"

}


slider(indexSlide)