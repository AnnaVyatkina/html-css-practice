const links = document.querySelectorAll(".nav");
const title = document.querySelector("h1");

links.forEach(function (link) {
    link.addEventListener("click", () => {
        const page = link.innerHTML;
        const prev = document.querySelectorAll(".sel");
        link.classList.add("sel");
        title.classList.add("h");
        const timeout = setTimeout(() => {
            title.innerHTML = page;
            title.classList.remove("h");
            prev.forEach(function (a) {
                a.classList.remove("sel");
            });
            document.body.style.setProperty("--bg-color", `var(--bg-${page})`);
            document.body.style.setProperty("--fore-color", `var(--fore-${page})`);
            clearTimeout(timeout);
        }, 1000);
    });
});