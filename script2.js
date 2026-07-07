function () {
  const CYCLE_ORDER = ["Ingénieur", "Licence", "Master"];

  const root = document.getElementById("cards-root");
  const searchInput = document.getElementById("search");
  const emptyState = document.getElementById("empty-state");

  function normalize(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function buildCard(niveau) {
    const card = document.createElement("article");
    card.className = "niveau-card";
    card.dataset.search = normalize(niveau.label + " " + niveau.id);

    const code = document.createElement("p");
    code.className = "card-code";
    code.textContent = niveau.id.toUpperCase();
    card.appendChild(code);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = niveau.label;
    card.appendChild(title);

    niveau.semesters.forEach((sem) => {
      const row = document.createElement("div");
      row.className = "sem-row";

      const tag = document.createElement("span");
      tag.className = "sem-tag";
      tag.textContent = "S" + sem.num;
      row.appendChild(tag);

      const links = document.createElement("div");
      links.className = "sem-links";

      if (sem.matiere) {
        const a = document.createElement("a");
        a.href = sem.matiere;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Matière";
        links.appendChild(a);
      }
      if (sem.unite) {
        const a = document.createElement("a");
        a.href = sem.unite;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Unité";
        links.appendChild(a);
      }

      row.appendChild(links);
      card.appendChild(row);
    });

    if (niveau.globale) {
      const btn = document.createElement("a");
      btn.className = "globale-btn";
      btn.href = niveau.globale;
      btn.target = "_blank";
      btn.rel = "noopener";
      btn.textContent = "Résultats globaux";
      card.appendChild(btn);
    }

    return card;
  }

  function render() {
    root.innerHTML = "";

    CYCLE_ORDER.forEach((cycleName) => {
      const items = NIVEAUX.filter((n) => n.cycle === cycleName);
      if (items.length === 0) return;

      const block = document.createElement("section");
      block.className = "cycle-block";
      block.dataset.cycle = cycleName;

      const tab = document.createElement("div");
      tab.className = "cycle-tab";
      tab.innerHTML =
        cycleName + ' <span class="count">' + items.length + "</span>";
      block.appendChild(tab);

      const panel = document.createElement("div");
      panel.className = "cycle-panel";

      const grid = document.createElement("div");
      grid.className = "card-grid";

      items.forEach((niveau, i) => {
        const card = buildCard(niveau);
        card.style.animationDelay = i * 25 + "ms";
        grid.appendChild(card);
      });

      panel.appendChild(grid);
      block.appendChild(panel);
      root.appendChild(block);
    });
  }

  function applyFilter() {
    const q = normalize(searchInput.value.trim());
    const cards = root.querySelectorAll(".niveau-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const match = q === "" || card.dataset.search.includes(q);
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    root.querySelectorAll(".cycle-block").forEach((block) => {
      const anyVisible = Array.from(
        block.querySelectorAll(".niveau-card")
      ).some((c) => c.style.display !== "none");
      block.style.display = anyVisible ? "" : "none";
    });

    emptyState.hidden = visibleCount !== 0;
  }

  render();
  searchInput.addEventListener("input", applyFilter);
})();
