const fullYear: number = new Date().getFullYear();

let year = document.querySelector("#year");

year ? (year.textContent = fullYear.toString()) : "";
