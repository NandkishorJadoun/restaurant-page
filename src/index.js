import { loadPage } from "./page-load";
import { getMenuPage } from "./menu-page";
import { getAboutPage } from "./about-page";

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")
const content = document.querySelector("#content")

loadPage()

home.addEventListener("click", ()=>{
    content.innerHTML = ""
    loadPage()
})

menu.addEventListener("click", () => {
    content.innerHTML = ""
    getMenuPage()
})
about.addEventListener("click", () => {
    content.innerHTML = ""
    getAboutPage()
})



