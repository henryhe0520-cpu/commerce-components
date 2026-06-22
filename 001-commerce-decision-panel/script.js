 <script>

const products = [
  {
    name: "Cloud Sofa",
    size: "2800 × 1100 × 800 mm",
    material: "Solid wood + High-density foam",
    price: "$5,635",
    description: "Soft curved sofa designed for modern living rooms."
  },
  {
    name: "Modern Sofa",
    size: "3000 × 1020 × 700 mm",
    material: "Solid wood + Foam",
    price: "$6,400",
    description: "Minimal contemporary sofa."
  }
];

const optionsContainer = document.getElementById("options");

products.forEach(product => {

  const card = document.createElement("div");

  card.className = "option-card";

  card.textContent = product.name;

  optionsContainer.appendChild(card);

});

</script>
