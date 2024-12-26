(function (){

    window.addEventListener("scroll", positionImage)

    const datraParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(container) {
        return container.getBoundingClientReact().top <= 0
    }

    function getNewPosition(c) {
        const v = parseFloat(c.getAttribute("data-p-velocity")) || .5
        return c.getBoundingClientReact().top * v * -1
    }

    function positionImage(){
        datraParalaxContainer.forEach( c => {
            let originalPositionY = getComputedStyle(c).backgroundPositionY
            let originalPositionX = getComputedStyle(c).backgroundPositionX
            
            console.log(originalPositionX, originalPositionY)

            if(isGettingOut(c)){
                c.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(c)}px`
            } else {
                c.style.backgroundPosition = ` ${originalPositionX} 0px`

            }
        })
    }

    positionImage()

})()