 <script>
fetch("demo-data.json")
  .then(response => response.json())
  .then(data => {
    const products = data.products;

    const optionsContainer = document.getElementById("options");

    const panelTitle = document.getElementById("panel-title");
    const panelSize = document.getElementById("panel-size");
    const panelMaterial = document.getElementById("panel-material");
    const panelPrice = document.getElementById("panel-price");
    const panelDescription = document.getElementById("panel-description");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "option-card";
      card.textContent = product.title;

      card.addEventListener("click", () => {
        panelTitle.textContent = product.title;
        panelSize.textContent = product.size;
        panelMaterial.textContent = product.material;
        panelPrice.textContent = product.price;
        panelDescription.textContent = product.description;
      });

      optionsContainer.appendChild(card);
    });
  });


