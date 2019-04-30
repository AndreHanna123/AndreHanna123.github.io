function selector(s) {
    return document.querySelector(s)
}

selector("#menu").addEventListener("click", () => {
    selector(".menu").classList.toggle("open");
    selector("header").classList.toggle("open");
    selector(".overlay").classList.toggle("open");
});