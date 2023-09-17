var fullYear = new Date().getFullYear();
var year = document.querySelector("#year");
year ? (year.textContent = fullYear.toString()) : "";
