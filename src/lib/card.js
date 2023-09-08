export let calculateAngle = function(e, item, parent, glare, cardBack){
    let dropShadowColor = `rgba(255, 255, 255, 0.3)`

    let x = Math.abs(item.getBoundingClientRect().x - e.clientX)
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY)

    // console.log(x, y)

    let halfWidth  = item.getBoundingClientRect().width / 2
    let halfHeight = item.getBoundingClientRect().height / 2

    // console.log(halfWidth, halfHeight)

    let calcAngleX = (x - halfWidth) / 6
    let calcAngleY = (y - halfHeight) / 14

    // console.log(calcAngleX, calcAngleY)

    let gX = (1 - (x / (halfWidth * 2))) * 100
    let gY = (1 - (y / (halfHeight * 2))) * 100

    glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`
    parent.style.perspective = `${halfWidth * 6}px`
    item.style.perspective = `${halfWidth * 6}px`

    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`
    cardBack.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`

    let calcShadowX = (x - halfWidth) / 3
    let calcShadowY = (y - halfHeight) / 6

    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`
}