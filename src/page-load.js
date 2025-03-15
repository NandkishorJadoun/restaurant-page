export function loadPage() {
    const content = document.querySelector("#content")
    const header = document.createElement("header")
    const subText = document.createElement("p")
    const textContainer = document.createElement("div")

    header.textContent = "Brainrot Bites"
    subText.textContent = "A place for Sigmas"

    textContainer.appendChild(header)
    textContainer.appendChild(subText)
    content.appendChild(textContainer)
}