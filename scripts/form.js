//Current year to insert into current year span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

//Create and display a last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;



document.addEventListener("DOMContentLoaded", () => {

    //getting stored value in localStorage
    let numReviews = Number(localStorage.getItem("reviews-ls")) || 0;

    //initialize display element
    const reviewsDisplay = document.querySelector(".reviews");

    if (reviewsDisplay) {

        //increment the number of reviews -- this will allow my counter to move to 2 after printing the first comment
        numReviews++;

        if (numReviews !== 1) {
            reviewsDisplay.textContent = numReviews;
        } else {
            reviewsDisplay.textContent = "This is the first review!";
        };



        //store the new number of reviews
        localStorage.setItem("reviews-ls", numReviews);
    }

});



//Products
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//loop through the products

function renderProducts(productlist) {
    const container = document.querySelector("#prod-select");
    container.innerHTML =
        `<option value="" disabled selected>Select a Product ... </option>` +
        productlist.map(p =>
            `<option value="${p.name}"> ${p.name}</option>`).join("");

}

renderProducts(products);

const SelectedProduct = document.getElementById("prod-select");

//All Products selection
SelectedProduct.addEventListener("change", (e) => {
    console.log("Selected:", e.target.value);
});