import homePage from "./home-page";
import menuPage from "./menu-page";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

// Initial load 
homePage().forEach(element => {
    content.appendChild(element);
});

homeButton.addEventListener("click", () => {
    // Clear the page
    content.textContent = "";
    // Add homepage
    homePage().forEach(element => {
        content.appendChild(element);
    });
})

menuButton.addEventListener("click", () => {
    // Clear the page
    content.textContent = "";
    // Add menupage
    menuPage().forEach(element => {
        content.appendChild(element);
    });
})

