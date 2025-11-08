//Current year to insert into current year span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

//Create and display a last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;