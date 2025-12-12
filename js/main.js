const cards = document.querySelectorAll(".card");

function aplicarFiltros() {
  const size = document.getElementById("sizeFilter").value;
  const age = document.getElementById("ageFilter").value;
  const sex = document.getElementById("sexFilter").value;

  cards.forEach(card => {
    const t = card.dataset.tamaño;
    const e = card.dataset.edad;
    const s = card.dataset.sexo;

    const match =
      (!size || size === t) &&
      (!age || age === e) &&
      (!sex || sex === s);

    card.style.display = match ? "block" : "none";
  });
}

document.getElementById("sizeFilter").addEventListener("change", aplicarFiltros);
document.getElementById("ageFilter").addEventListener("change", aplicarFiltros);
document.getElementById("sexFilter").addEventListener("change", aplicarFiltros);

document.getElementById("clearFilters").addEventListener("click", () => {
  document.getElementById("sizeFilter").value = "";
  document.getElementById("ageFilter").value = "";
  document.getElementById("sexFilter").value = "";
  aplicarFiltros();
});

aplicarFiltros();
