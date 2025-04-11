import grimaceShake from "./images/grimace-shake.jpg";
import lunchly from "./images/lunchly.jpeg";
import deezNuts from "./images/deez-nuts.jpg";
import primeDrink from "./images/prime-drink.jpg";
import skibidiSlicers from "./images/skibidi-slicers.jpg";

export function getMenuPage() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-page-container");

  const items = [
    {
      name: "Grimace Shake",
      price: "$50.00",
      image: grimaceShake,
    },
    {
      name: "Lunchly",
      price: "$20.00",
      image: lunchly,
    },
    {
      name: "Deez Nuts",
      price: "$69.69",
      image: deezNuts,
    },
    {
      name: "Prime Drink",
      price: "$2.05",
      image: primeDrink,
    },
    {
      name: "Skibidi Slicers",
      price: "$5.10",
      image: skibidiSlicers,
    },
  ];

  for (const item of items) {
    const itemContainer = document.createElement("div");
    const itemTextContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    itemContainer.classList.add("item-text-container");

    const itemName = document.createElement("header");
    const itemPrice = document.createElement("p");
    const itemImage = document.createElement("img");

    itemName.textContent = item.name;
    itemPrice.textContent = item.price;
    itemImage.src = item.image;

    itemTextContainer.appendChild(itemName);
    itemTextContainer.appendChild(itemPrice);

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemTextContainer);
    menuContainer.appendChild(itemContainer);
  }

  content.appendChild(menuContainer);
}
