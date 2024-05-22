document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".headerbox").classList.toggle("show")
    const icons = document.querySelectorAll(".hamIcon");
    icons[0].classList.toggle("hide");
    icons[1].classList.toggle("hide");
})