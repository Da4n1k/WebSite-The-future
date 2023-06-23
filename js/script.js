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

function playMainVideo(){
    let boxVideo = document.getElementsByClassName("box_shadow_video")[0]

    if(boxVideo.style.display != "flex"){
        boxVideo.style.display = "flex"
    }else{
        boxVideo.style.display = "none"
    }

}

document.querySelector("#clickNavBar").addEventListener("click", () => {
    let menu = document.getElementsByClassName("menu")[0]
    if(menu.style.maxHeight == "240px"){
        menu.style.maxHeight = "0px";
    }else{
        menu.style.maxHeight = "240px";
    }
})


// videoplayer (beta)
let areaVideo = document.querySelector(".video_block")
let videoPlayer = document.getElementById("videoPlayer")
let bntPlayVideo = document.getElementById("play")
let bntStopVideo = document.getElementById("stop")
let bntReplayVideo = document.getElementById("replay")

// btn_play video
bntPlayVideo.addEventListener("click", () => {
    videoPlayer.play()
    bntPlayVideo.style.display = "none"
    bntStopVideo.style.display = "block"
})

// btn_stop video
bntStopVideo.addEventListener("click", () => {
    videoPlayer.pause()
    bntStopVideo.style.display = "none"
    bntPlayVideo.style.display = "block"
})
// btn_replay video
bntReplayVideo.addEventListener("click", () => {
    videoPlayer.play()
    bntReplayVideo.style.display = "none"
    bntStopVideo.style.display = "block"
})

// ended video
videoPlayer.addEventListener("ended", () =>{
    bntStopVideo.style.display = "none"
    bntReplayVideo.style.display = "block"
})

// show btn on area with video
areaVideo.addEventListener("mouseenter", () => {
    let btnArea = areaVideo.querySelectorAll("button")
    for(let i = 0; i < btnArea.length; i++){
        btnArea[i].style.opacity = "1"
    }
  });
  
areaVideo.addEventListener("mouseleave", () => {
    let btnArea = areaVideo.querySelectorAll("button")
    for(let i = 0; i < btnArea.length; i++){   
        if(videoPlayer.paused){
            btnArea[i].style.opacity = "1"
        }else{
            btnArea[i].style.opacity = "0"
        }
    }
  });