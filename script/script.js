function getElement(id) {
    return (element = document.getElementById(id));
}

getElement("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("cart-love")) {
        const hartCount = getElement("hart-count").innerText;
        const currentHartCount = Number(hartCount) + 1;
        getElement("hart-count").innerText = currentHartCount;
    }
});