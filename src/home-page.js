import image from "./restaurant.jpg";

const homePage = () => {
    const headLine = document.createElement("h1");
    headLine.textContent = "My Restaurant";

    const restaurantImage = new Image();
    restaurantImage.src = image;

    return [
        headLine,
        restaurantImage,
    ]
};

export default homePage;