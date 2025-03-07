export function getMenuPage(){
    const content = document.querySelector("#content")
    const header = document.createElement("header")
    const text = document.createElement("div")

    header.textContent = "Menu"
    text.textContent = "This is our menu page"

    content.appendChild(header)
    content.appendChild(text)
}