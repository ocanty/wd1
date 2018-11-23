
window.onload = () => {   
    
    document.documentElement.style.setProperty("--p1-yscale","0px")

    let toggle_nav = document.querySelector("header span")
    let nav = document.querySelector("nav")
    let header = document.querySelector("header")

    toggle_nav.addEventListener("click", (event) => {
        if(nav.hasAttribute('extended')) {
            nav.removeAttribute('extended')
            header.removeAttribute('extended')
        }
        else {
            nav.setAttributeNode(document.createAttribute('extended'))
            header.setAttributeNode(document.createAttribute('extended'))
        }
    })
}

/* linear interpolate a,b with ratio r in range [0,1] */
let lerp = (a,b,r) => {
    return a + r * (b - a)
}

let lastScroll = -1

let parallax = () => { 
    // only cause a DOM update if we have to, if they have changed their scroll position
    if(lastScroll != document.documentElement.scrollTop)
    {
        lastScroll = document.documentElement.scrollTop

        var prop = document.documentElement.style.getPropertyValue("--p1-yscale")
        var cur = parseInt(prop.slice(0,prop.length-2)) // remove 'px' from end of str
        var target = document.documentElement.scrollTop*0.97
        
        var lerped = target // lerp(cur,target, 0.05) // smooth cur to target, prevent jitter
    
        document.documentElement.style.setProperty(
            '--p1-yscale',
            lerped + "px"
        )

        document.documentElement.style.setProperty(
            '--percent-scrolled',
            (document.documentElement.scrollTop/document.documentElement.scrollHeight)*100 + "%"
        )
    }

    window.requestAnimationFrame(parallax)
}

// update before every paint
window.requestAnimationFrame(parallax)