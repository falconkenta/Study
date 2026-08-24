let bookCloseNav = document.querySelector(".book-close-btn");
let bookOpenNav = document.querySelector(".book-open-btn");
let menuBar = document.querySelector(".menu-bar");

bookCloseNav.addEventListener("click", () =>{
    bookCloseNav.classList.toggle("active");
    bookOpenNav.classList.toggle("active");
    menuBar.classList.toggle("active");
});

bookOpenNav.addEventListener("click", ()=>{
    bookCloseNav.classList.toggle("active");
    bookOpenNav.classList.toggle("active");
    menuBar.classList.toggle("active");
})