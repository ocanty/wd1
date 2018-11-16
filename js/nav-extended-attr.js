
window.onload = () => {    
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
