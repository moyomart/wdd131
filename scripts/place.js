//Current year to insert into current year span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

//Create and display a last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

//Handling the Weather SVG to display for the specified smaller screen size
function toggleIcon() {
    const iconCell = document.getElementById("icon");


    if (window.innerWidth < 600) {
        if (!iconCell.querySelector("img")) {
            iconCell.innerHTML = `<img src="images/cloudy.svg" class="icon">`;
        }
    } else {
        iconCell.innerHTML = "";
    }
}

// Run at load
toggleIcon();

// Run on resize
window.onresize = toggleIcon;


// ----------------------------
// WIND CHILL CALCULATION
// ----------------------------
function calculateWindChill(temp, wind, unit) {
    const w16 = Math.pow(wind, 0.16);
    if (unit === "metric") {
        return 13.12 + 0.6215 * temp - 11.37 * w16 + 0.3965 * temp * w16;
    }
    return 35.74 + 0.6215 * temp - 35.75 * w16 + 0.4275 * temp * w16;
}

function getWindChillDisplay(temp, wind, unit) {
    const canCalculate =
        (unit === "metric" && temp <= 10 && wind > 4.8) ||
        (unit === "imperial" && temp <= 50 && wind > 3);

    if (!canCalculate) return "N/A";

    return calculateWindChill(temp, wind, unit).toFixed(1);
}

function parseWeatherData() {
    const tempCell = document.getElementById("temp").textContent.trim();
    const windCell = document.getElementById("wind").textContent.trim();

    const temp = parseFloat(tempCell);
    const unit = tempCell.includes("°C") ? "metric" : "imperial";

    const windMatch = windCell.match(/[\d.]+/);
    if (!windMatch) {
        document.getElementById("windchill").textContent = "N/A";
        return;
    }

    const wind = parseFloat(windMatch[0]);
    document.getElementById("windchill").textContent = getWindChillDisplay(temp, wind, unit);
}

parseWeatherData();
