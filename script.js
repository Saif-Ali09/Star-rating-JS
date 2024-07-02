let container = document.getElementById("star_container");
let count = document.getElementById("count");
let allStars = document.querySelectorAll(".star");
container.addEventListener("click", function(e){
    let Target = e.target;
    let isIndex = Target.getAttribute("idx");
    if(isIndex){
        fillstars(isIndex);
    }else{
        return;
    }
    // fillstars(e.target);
})

container.addEventListener("mouseover", function(e){
    let Target = e.target;
    let isIndex = Target.getAttribute("idx");
    if (isIndex) {
      changeStarsColour(isIndex);
    } else {
      return;
    }
})

container.addEventListener("mouseleave", function(e){
    let countNode = document.getElementById("count");
    let countNum = countNode.innerText;
    changeStarsColour(countNum);
})

function fillstars(cIdx){
    count.innerText = cIdx;
    changeStarsColour(cIdx);
}

function changeStarsColour(cIdx){
    for(let i = 0; i < allStars.length; i++){
        allStars[i].classList.remove("yellow");
    }
    for (let i = 0; i < cIdx; i++) {
        allStars[i].classList.add("yellow");
    }
}