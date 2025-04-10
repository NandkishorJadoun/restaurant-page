export function getAboutPage(){
    const content = document.querySelector("#content")

    const aboutContainer = document.createElement("div")
    const aboutTextContainer = document.createElement("div")
    aboutContainer.classList.add("about-container")
    aboutTextContainer.classList.add("about-text-container")

    const header = document.createElement("header")
    const firstText = document.createElement("p")
    const secondText = document.createElement("p")

    header.textContent = 'About Us'
    firstText.innerHTML = "Welcome to <strong>Brainrot Bites</strong>, where We serve up dangerously delicious food that’ll fry your brain in the best way possible. <br> Whether you're here to satisfy your late-night munchies or just wanna vibe with the unhinged energy of our menu, we promise one thing, every bite is an out-of-body experience."
    secondText.textContent = " So grab a seat, embrace the chaos, and scroll some reels."


    aboutContainer.appendChild(header)
    aboutTextContainer.appendChild(firstText)
    aboutTextContainer.appendChild(secondText)
    aboutContainer.appendChild(aboutTextContainer)
    content.appendChild(aboutContainer)
}