const products = [
    { id: 1, name: "Astral Gold", category: "Premium" },
    { id: 2, name: "Ocean Diver", category: "Sport" },
    { id: 3, name: "Urban Minimal", category: "Casual" },
    { id: 4, name: "Heritage Silver", category: "Clásico" },
    { id: 5, name: "Leather Strap Pro", category: "Accesorios" },
    { id: 6, name: "Skyline Chrono", category: "Premium" },
    { id: 7, name: "Neon Sport", category: "Sport" },
    { id: 8, name: "Daily Driver", category: "Casual" },
    { id: 9, name: "Vintage 1960", category: "Clásico" },
    { id: 10, name: "Link Bracelet", category: "Accesorios" },
    { id: 11, name: "Diamond Peak", category: "Premium" },
    { id: 12, name: "Active Run", category: "Sport" },
    { id: 13, name: "Simple White", category: "Casual" },
    { id: 14, name: "Formal Black", category: "Clásico" },
    { id: 15, name: "Box Set Luxury", category: "Accesorios" },
    { id: 16, name: "Titanium Force", category: "Premium" },
    { id: 17, name: "Deep Sea", category: "Sport" },
    { id: 18, name: "Street Style", category: "Casual" },
    { id: 19, name: "Executive Suite", category: "Clásico" },
    { id: 20, name: "Nylon NATO Strap", category: "Accesorios" },
    { id: 21, name: "Galaxy Dial", category: "Premium" },
    { id: 22, name: "Racer X", category: "Sport" }
];

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(filteredProducts) {
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No se encontraron productos.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card glass-card reveal active'; // active to show immediately or use observer
        card.innerHTML = `
            <div class="image-placeholder product-image"></div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    renderProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts();
    });
});

// Initial render
renderProducts(products);
