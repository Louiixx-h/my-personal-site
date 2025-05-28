document.addEventListener("DOMContentLoaded", () => {
    const links   = document.querySelectorAll(".navbar a");
    const targets = Array.from(links).map(a => document.querySelector(a.getAttribute("href")));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`.navbar a[href="#${id}"]`);
        if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
        });
    }, {
        rootMargin: "-50% 0px -50% 0px" // dispara quando a seção estiver centralizada na viewport
    });

    targets.forEach(sec => observer.observe(sec));
});