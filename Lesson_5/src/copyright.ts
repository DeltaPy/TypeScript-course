// JS Code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// TS Code
const year: HTMLSpanElement = document.getElementById("year")!
const thisYear: number = new Date().getFullYear();
year.setAttribute("datetime", thisYear.toString());
year.textContent = thisYear.toString();