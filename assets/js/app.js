/* ======================================
   Z-HUB COMMON JAVASCRIPT
   ====================================== */

/* ===== MENU TOGGLE ===== */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("show");
}

/* ===== CLOSE MENU WHEN CLICKING OUTSIDE ===== */
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const menuBtn = document.querySelector(".menu-btn");

  if (!menu || !menuBtn) return;

  if (
    menu.classList.contains("show") &&
    !menu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    menu.classList.remove("show");
  }
});

/* ===== SEARCH & FILTER (TITLE / TYPE / LANG / YEAR) ===== */
function filterItems() {
  const inputEl = document.getElementById("searchInput");
  if (!inputEl) return;

  const input = inputEl.value.toLowerCase().trim();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const title = (item.dataset.title || "").toLowerCase();
    const type  = (item.dataset.type || "").toLowerCase();
    const lang  = (item.dataset.lang || "").toLowerCase();
    const year  = (item.dataset.year || "").toLowerCase();

    /* match against any field */
    if (
      title.includes(input) ||
      type.includes(input)  ||
      lang.includes(input)  ||
      year.includes(input)
    ) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
