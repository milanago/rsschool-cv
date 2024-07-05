const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
}
)

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
}))

