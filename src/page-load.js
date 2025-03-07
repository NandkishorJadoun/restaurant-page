
export function loadPage() {
    const content = document.querySelector("#content")
    const header = document.createElement("header")
    const text = document.createElement("div")

    header.textContent = "Welcome to our Restaurant"
    text.textContent = "This is our homepage"

    content.appendChild(header)
    content.appendChild(text)
}