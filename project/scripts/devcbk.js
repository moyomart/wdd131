
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
            <p>The Software Dev Cookbook is designed to be your central guide to learning software development. Whether you're exploring code for the first time or expanding existing skills, we curate clear explanations, structured learning paths, and carefully selected external resources - all in one place. <br>Start on your journey of discovery, backed by resources trusted in the tech and software industry. </p>
        
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
let numapplns = Number(localStorage.getItem("applns-ls")) || 0;

//initialize display element
const applnsDisplay = document.querySelector(".applns");

if (applnsDisplay) {

    //increment the number of applns -- this will allow my counter to move to 2 after printing the first comment
    numapplns++;

    if (numapplns !== 1) {
        applnsDisplay.textContent = numapplns;
    } else {
        applnsDisplay.textContent = "This is the first application!";
    };



    //store the new number of applns
    localStorage.setItem("applns-ls", numapplns);
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

