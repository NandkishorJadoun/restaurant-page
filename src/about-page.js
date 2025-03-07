export function getAboutPage(){
    const content = document.querySelector("#content")
    const header = document.createElement("header")
    const text = document.createElement("div")

    header.textContent = "About"
    text.textContent = "This is our about page"

    content.appendChild(header)
    content.appendChild(text)
}