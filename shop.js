const products = [
    { id: 1, sku: "BT00001", name: "Billetera Marrón", category: "Accesorios", description: "Billetera simil cuero para hombre en color marrón con varios compartimentos." },
    { id: 2, sku: "BE00003", name: "Brazalete vintage", category: "Accesorios", description: "Brazalete vintage simil cuero con enchapados" },
    { id: 3, sku: "NF9248B", name: "Naviforce N2", category: "Sport", description: "Reloj deportivo de alta resistencia con cronógrafo y luz LED. Diseñado para resistir las condiciones más extremas." },
    { id: 4, sku: "GB-NF-P", name: "Naviforce Plus", category: "Premium", description: "Elegancia y precisión en un solo diseño. Movimiento japonés y cristal mineral resistente a rayaduras." },
    { id: 5, sku: "GB-NF-S2", name: "Naviforce Sport 2", category: "Sport", description: "Versión mejorada de nuestro clásico deportivo. Más ligero, más resistente y con un diseño aerodinámico." },
    { id: 6, sku: "GB-NF-LP", name: "Naviforce Lux Plus", category: "Premium", description: "La máxima expresión del lujo. Detalles dorados y correa de acero inoxidable de alta calidad." },
    { id: 7, sku: "GB-NF-G", name: "Naviforce Gold", category: "Premium", description: "Un reloj que destaca por sí solo. Acabado en oro de 18k electrochapado para una durabilidad excepcional." },
    { id: 8, sku: "GB-NF-PL", name: "Naviforce Plata", category: "Clásico", description: "La sobriedad de la plata combinada con la tecnología Naviforce. Perfecto para ocasiones formales." },
    { id: 9, sku: "GB-NF-L", name: "Naviforce Lux", category: "Premium", description: "Diseño minimalista con materiales de primera categoría. Una pieza esencial para el coleccionista moderno." },
    { id: 10, sku: "GB-NF-U", name: "Naviforce Ultra", category: "Premium", description: "Equipado con las últimas innovaciones en relojería. Precisión absoluta y estilo inconfundible." },
    { id: 11, sku: "GB-NF-NV", name: "Naviforce N Verde", category: "Sport", description: "Un toque de color para tu estilo activo. Dial verde esmeralda con correa de silicona premium." },
    { id: 12, sku: "GB-NF-NA", name: "Naviforce N Azúl", category: "Sport", description: "Elegancia marina en tu muñeca. Resistente al agua y con detalles en azul profundo." },
    { id: 13, sku: "GB-NF-NM", name: "Naviforce N Negro/Marrón", category: "Casual", description: "La combinación perfecta entre lo clásico y lo moderno. Correa de cuero marrón y dial negro mate." },
    { id: 14, sku: "GB-PN-01", name: "Pure Noir", category: "Casual", description: "Totalmente negro. Un diseño audaz para quienes prefieren la elegancia del minimalismo extremo." },
    { id: 15, sku: "GB-NF-S1", name: "Naviforce Sport", category: "Sport", description: "El reloj que inició nuestra línea deportiva. Fiable, robusto y siempre listo para la acción." },
    { id: 16, sku: "GB-NF-SP", name: "Naviforce Sport Plus", category: "Sport", description: "Máximo rendimiento. Funciones avanzadas de cronometraje y una construcción reforzada." },
    { id: 17, sku: "GB-PO-C", name: "Poedagar Classic", category: "Clásico", description: "Diseño atemporal inspirado en la relojería suiza. Movimiento de cuarzo de alta precisión." },
    { id: 18, sku: "GB-PO-CB", name: "Poedagar Classic Black", category: "Clásico", description: "El clásico Poedagar en una edición nocturna. Dial negro con indicadores de plata." },
    { id: 19, sku: "GB-PO-CBL", name: "Poedagar Classic Blue", category: "Clásico", description: "Reflejos azules que capturan la luz. Un reloj que proyecta confianza y éxito." },
    { id: 20, sku: "GB-PO-01", name: "Poedagar", category: "Clásico", description: "La esencia de la marca. Un equilibrio perfecto entre precio, calidad y diseño superior." },
    { id: 21, sku: "GB-PO-C2", name: "Poedagar Classic 2", category: "Clásico", description: "Evolución de un ícono. Caja más delgada y un dial renovado para un look más contemporáneo." },
    { id: 22, sku: "GB-PO-M", name: "Poedagar Metal", category: "Clásico", description: "Construcción íntegra en acero. Un reloj pesado, robusto y con una presencia imponente." },
    { id: 23, sku: "GB-PO-M2", name: "Poedagar Metal 2", category: "Clásico", description: "Pulido a espejo para un brillo inigualable. El accesorio definitivo para eventos de gala." },
    { id: 24, sku: "GB-SA-01", name: "Sapphero", category: "Premium", description: "Inspirado en la alta gama internacional. Cristal de zafiro y diseño ergonómico de vanguardia." }
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
        card.className = 'product-card reveal active'; 
        card.style.cursor = 'pointer';
        card.onclick = () => window.location.href = `producto.html?id=${product.id}`;
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
