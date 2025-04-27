window.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marquee");
    const clone = marquee.cloneNode(true);
    marquee.parentElement.appendChild(clone);
});