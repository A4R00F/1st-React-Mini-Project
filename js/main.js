const filters = document.querySelector(".filters");
const productCards = document.querySelectorAll(".product-card");

filters.addEventListener("click", (event) => {
    const selectedFilter = event.target.closest("button[data-filter]");
    if (!selectedFilter) return;

    const category = selectedFilter.dataset.filter;

    filters.querySelectorAll("button[data-filter]").forEach((button) => {
        const isActive = button === selectedFilter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });

    productCards.forEach((card) => {
        card.hidden = category !== "all" && card.dataset.category !== category;
    });
});
