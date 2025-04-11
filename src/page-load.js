export function loadPage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const subText = document.createElement("p");
  const textContainer = document.createElement("div");
  textContainer.classList.add("page-load-container");

  header.textContent = "Brainrot Bites";
  subText.textContent = "A place for Doomers";

  textContainer.appendChild(header);
  textContainer.appendChild(subText);
  content.appendChild(textContainer);
}
