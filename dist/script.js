const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-icon");
const links = document.querySelector(".link")

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")
    console.log("click");
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

links.forEach(link => {
    link.addEventListener("click", () => {
        window.open(`http://eshop.ekf.tuke.sk/eshop/688/index.php?route=product/category&path=${link.id}`,"_self");
    })
})