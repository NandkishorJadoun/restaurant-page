import "./styles.css"
import { loadPage } from "./page-load";
import { getMenuPage } from "./menu-page";
import { getAboutPage } from "./about-page";

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")
const content = document.querySelector("#content")

loadPage()
home.style = "background-color: white; color:black";

home.addEventListener("click", ()=>{
    home.style = "background-color: white; color:black";
    menu.style = "background-color: rgba(255, 255, 255, 0); color:white";
    about.style = "background-color: rgba(255, 255, 255, 0); color:white";

    content.innerHTML = ""
    loadPage()
})

menu.addEventListener("click", () => {
    menu.style = "background-color: white; color:black";
    about.style = "background-color: rgba(255, 255, 255, 0); color:white";
    home.style = "background-color: rgba(255, 255, 255, 0); color:white";

    content.innerHTML = ""
    getMenuPage()
})
about.addEventListener("click", () => {
    about.style = "background-color: white; color:black";
    menu.style = "background-color: rgba(255, 255, 255, 0); color:white";
    home.style = "background-color: rgba(255, 255, 255, 0); color:white";
    
    content.innerHTML = ""
    getAboutPage()
})



