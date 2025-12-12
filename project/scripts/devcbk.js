
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


    //close the login popup

    const loginBtn = document.getElementById("loginbtn");
    const authPopup = document.getElementById("authform");
    const closeBtn = document.getElementById("closeAuthError");


    if (loginBtn) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            authPopup.style.display = "flex";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            authPopup.style.display = "none";
        });
    }


    const vidpage = [
        {
            Name: "Welcome Video",
            description: "Master software development on One Powerful Platform",

            src: "images/SoftwareDevsCookbook.mp4"
        },
        {
            Name: "Resources",
            description: "Some useful content on the web",

            src: "https://www.youtube.com/embed/aIy46jQsDLM"
        },
    ];

    //loop through the images


    function renderVids(vids) {
        const container = document.querySelector(".mains");
        container.innerHTML = vids.map(vid => `
        <div class="card">
            <h3>${vid.Name}</h3>

            <p><span>${vid.description}</span></p>
       
            <video controls preload="auto">
            <source src=${vid.src} type="video/mp4">
            </video>
            </div>
                    <section class="parastory">
            <h2>The Software Development Cookbook:
            </h2>
            <p>The Software Dev Cookbook is designed to be your central guide to learning software development. Whether you're exploring code for the first time or expanding existing skills, we curate clear explanations, structured learning paths, and carefully selected external resources - all in one place. <br>Start on your journey of discovery, backed by resources trusted in the tech and software industry. </p>
        
        </section>`).join("");

    }

    if (document.querySelector(".mains")) {
        renderVids(vidpage.filter(vid => vid.Name === "Welcome Video"));
    }


    function renderResource(vids) {
        const container = document.querySelector(".mains2");
        container.innerHTML = vids.map(vid => `
        <div class="card">
            <h3>${vid.Name}</h3>

            <p><span>${vid.description}</span></p>
                  
            <iframe
                src=${vid.src}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-inpicture"
                allowfullscreen>
            </iframe>
            
            </div>
                    <section class="parastory">
            <h2>Useful Cookbook Resources:
            </h2>
            <p>Although not exhaustive, the resources cited on this page guide the user in detail through every stage of modern software development, from initial concept to final deployment. <br><br>This platform brings together best-practice documentation, hands-on tutorials and expert insight </p>
            <ul>
            <li><a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> -- Comprehensive documentation and tutorials for web development technologies.</li>

            <li><a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> -- Interactive coding lessons and projects to learn full-stack development.</li>

            <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a> -- Beginner-friendly tutorials covering web languages like HTML, CSS, and JavaScript.</li>

            <li><a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a> -- Community-driven Q&A for coding problems and solutions.</li>

            <li><a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">GitHub Explore</a> -- Discover open-source projects to learn from and contribute to.</li>
            </ul>
        
        </section>`).join("");

    }

    if (document.querySelector(".mains2")) {
        renderResource(vidpage.filter(vid => vid.Name === "Resources"));
    }


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

    const SelectedProduct = document.getElementById("prod-select");

    //All Products selection
    SelectedProduct.addEventListener("change", (e) => {
        console.log("Selected:", e.target.value);
    });



    renderProducts(products);






});