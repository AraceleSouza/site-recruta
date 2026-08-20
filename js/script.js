// =========================================
// RECRUTA — JAVASCRIPT
// =========================================


// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}


// =========================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================

document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =========================================
// DESTACAR ITEM ATIVO DO MENU
// =========================================

const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".menu a[href^='#']");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // Remove o destaque de todos os links
                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                // Encontra o link correspondente à seção atual
                const activeLink = document.querySelector(
                    `.menu a[href="#${entry.target.id}"]`
                );

                // Adiciona o destaque
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        threshold: 0.35
    }
);


// Observa todas as seções
sections.forEach((section) => {
    sectionObserver.observe(section);
});


// =========================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // Mostra o elemento
                entry.target.classList.add("visible");

                // Para de observar depois que apareceu
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);


// Observa todos os elementos com a classe .reveal
revealElements.forEach((element) => {
    revealObserver.observe(element);
});