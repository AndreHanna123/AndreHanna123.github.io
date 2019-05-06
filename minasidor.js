var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

function selector(s) {
    return document.querySelector(s)
}

let portfolioaktiv = false;

selector("#menu").addEventListener("click", () => {
    selector(".menu").classList.toggle("open");
    selector("header").classList.toggle("open");
    selector(".overlay").classList.toggle("open");
});

selector("#portfoliobtn").addEventListener("click", () => {
    selector("#portfoliomeny").classList.toggle("menyaktiv");

    portfolioaktiv 
    ? (() => {
        selector("#portfoliobtnicon").classList.remove("fa-caret-up");
        selector("#portfoliobtnicon").classList.add("fa-sort-down");    
        portfolioaktiv = false;


    })()

    :

    (() => {
        selector("#portfoliobtnicon").classList.remove("fa-sort-down");
        selector("#portfoliobtnicon").classList.add("fa-caret-up");
        portfolioaktiv = true;
    })();
});

selector("#menu").addEventListener("click", () => {
    selector("#portfoliobtnicon").classList.toggle("iconactive");
});