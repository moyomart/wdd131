
document.addEventListener("DOMContentLoaded", () => {

    //Current year to insert into current year span
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    //Create and display a last modified date
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const temples = [
        {
            Name: "Welcome Video",
            description: "Master software development on One Powerful Platform",

            src: "images/SoftwareDevsCookbook.mp4"
        }
    ];

    //loop through the images

    function renderTemples(vids) {
        const container = document.querySelector(".mains");
        container.innerHTML = vids.map(vids => `
        <div class="card">
            <h3>${vids.Name}</h3>

            <p><span>${vids.description}</span></p>
       
            <video controls preload="auto">
            <source src=${vids.src} type="video/mp4">
            </video>
            </div>
                    <section class="parastory">
            <h2>The Software Development Cookbook:
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ratione accusantium alias dolores, adipisci
                ipsam quasi ducimus dolorem in sunt fugiat nesciunt enim perferendis, iusto corrupti assumenda aliquam optio?
                Reiciendis?</p>
        
        </section>`).join("");

    }

    renderTemples(temples);

    const hmeTemples = document.querySelector("#hme");
    const oldTemples = document.querySelector("#old");
    const newTemples = document.querySelector("#new");


    //Home - all temples
    hmeTemples.addEventListener("click", () => {
        renderTemples(temples);
    })
    //old temples
    oldTemples.addEventListener("click", () => {
        renderTemples(temples.filter(temple => (new Date(temple.dedicated)).getFullYear() < 1900));
    })
    //new temples
    newTemples.addEventListener("click", () => {
        renderTemples(temples.filter(temple => (new Date(temple.dedicated)).getFullYear() > 2000));
    })




});



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
};





//Products
const products = [
    {
        id: "fc-1888",
        name: "Python Programming",

    },
    {
        id: "fc-2050",
        name: "SQL Programming",

    },
    {
        id: "fs-1987",
        name: "Front End Web Dev",

    },
    {
        id: "ac-2000",
        name: "Back End Web Dev",

    },
    {
        id: "jj-1969",
        name: "PowerBI Development",

    }
];

//loop through the products

function renderProducts(productlist) {
    const container = document.querySelector("#prod-select");
    container.innerHTML =
        `<option value="" disabled selected>Select a Product ... </option>` +
        productlist.map(p =>
            `<option value="${p.name}"> ${p.name}</option>`).join("");

};

renderProducts(products);

const SelectedProduct = document.getElementById("prod-select");

//All Products selection
SelectedProduct.addEventListener("change", (e) => {
    console.log("Selected:", e.target.value);
});

