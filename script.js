const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const filters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      const show = selected === "all" || categories.includes(selected);
      card.classList.toggle("is-hidden", !show);
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
