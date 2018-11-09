
window.onload = () => {
    document.querySelector('header').classList.add('parallax1')

    document.documentElement.style.setProperty("--p1-yscale","0px")

    
    let toggle_nav = document.querySelector("header span")
    let nav = document.querySelector("nav")

    toggle_nav.addEventListener("click", (event) => {
        if(nav.hasAttribute('extended')) {
            nav.removeAttribute('extended')
        }
        else {
            let ext = document.createAttribute('extended')
        
            nav.setAttributeNode(ext)
        }
    })
}

/* linear interpolate a,b with ratio r in range [0,1] */
let lerp = (a,b,r) => {
    return a + r * (b - a)
}

let lastScroll = 0

let parallax = () => { 
    // only cause a DOM update if we have to 
    if(lastScroll != document.documentElement.scrollTop)
    {
        lastScroll = document.documentElement.scrollTop

        var prop = document.documentElement.style.getPropertyValue("--p1-yscale")
        var cur = parseInt(prop.slice(0,prop.length-2))
        var target = document.documentElement.scrollTop*0.2
        
        var lerped = lerp(target,cur,0.01) // smooth cur to target, prevent jitter
    
        document.documentElement.style.setProperty(
            '--p1-yscale',
            lerped + "px"
        )
    }

    window.requestAnimationFrame(parallax)
}

window.requestAnimationFrame(parallax)