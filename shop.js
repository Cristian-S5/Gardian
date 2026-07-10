const products = [
    { id: 1, sku: "BT00001", name: "Billetera", category: "Accesorios", price: 1200, images: ["assets/Fotos productos/Billetera/Billetera Marrón Sin fondo.png", "assets/Fotos productos/Billetera/Captura de pantalla 2025-07-24 220205.png"], description: "Billetera simil cuero para hombre en color marrón con varios compartimentos." },
    { id: 2, sku: "BE00003", name: "Brazalete vintage", category: "Accesorios", price: 1400, images: ["assets/Fotos productos/Brazalete vintage/Pulsera cuero 3.png", "assets/Fotos productos/Brazalete vintage/Pulsera de eco-cuero.png"], description: "Brazalete vintage simil cuero con enchapados" },
    { id: 3, sku: "NF9248B", name: "Naviforce N2", category: "Casual", price: 1600, images: ["assets/Fotos productos/9248/Naviforce 9248.png"], description: `🚚 Envíos a todo el país
🏅 1 año de garantía
💳 Todos los métodos de pago

Movimiento: Seiko japonés.
Caja: aleación de zinc.
Diámetro: 46 mm.
Grosor: 12 mm.
Ancho correa: 22 mm.
Peso: 73 g.
Cristal: vidrio mineral reforzado.
Correa: PU.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 4, sku: "NF9197M", name: "Naviforce Plus", category: "Premium", price: 2200, images: ["assets/Fotos productos/9197/Naviforce 9197 cuero.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 46 mm.
Grosor: 17 mm.
Ancho correa: 22 mm.
Peso: 101 g.
Cristal: vidrio mineral reforzado.
Correa: cuero.
Cierre: hebilla de gancho.
Características: calendario, análogo + pantalla luminosa, resistente al agua 3 atm.` },
    { id: 5, sku: "NF6104K", name: "Naviforce Sport 2", category: "Sport", price: 2100, images: ["assets/Fotos productos/6104/Naviforce 6104 1.png"], description: `Movimiento: Seiko.
Caja: policarbonato.
Diámetro: 45 mm.
Grosor: 16 mm.
Ancho correa: 24 mm.
Peso: 71 g.
Cristal: vidrio mineral reforzado.
Correa: silicona.
Cierre: hebilla de gancho.
Características: calendario, alarma, análogo + pantalla luminosa, resistente al agua 5 atm.` },
    { id: 6, sku: "NF8067K", name: "Naviforce Lux Plus", category: "Premium", price: 2600, images: ["assets/Fotos productos/8067/Naviforce 8067.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 47 mm.
Grosor: 17 mm.
Ancho correa: 25 mm.
Peso: 120 g.
Cristal: vidrio mineral reforzado.
Cierre: hebilla de gancho.
Características: calendario, cronógrafo, resistente al agua 3 atm.` },
    { id: 7, sku: "NF8051G", name: "Naviforce Gold", category: "Premium", price: 2750, images: ["assets/Fotos productos/8051S/Naviforce 8051S.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 44 mm.
Grosor: 13 mm.
Ancho correa: 26 mm.
Peso: 163 g.
Cristal: cristal mineral reforzado.
Correa: acero inoxidable.
Características: calendario, cronógrafo, resistente al agua 3 atm.` },
    { id: 25, sku: "NF8051Z", name: "Naviforce Silver", category: "Premium", price: 2450, images: ["assets/Fotos productos/8051S/reloj_sin_logo.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 44 mm.
Grosor: 13 mm.
Ancho correa: 26 mm.
Peso: 163 g.
Cristal: cristal mineral reforzado.
Correa: acero inoxidable.
Características: calendario, cronógrafo, resistente al agua 3 atm.` },
    { id: 8, sku: "NF8080K", name: "Naviforce Plata", category: "Clásico", price: 2300, images: ["assets/Fotos productos/8080/Naviforce 8080.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 44 mm.
Grosor: 13 mm.
Ancho correa: 26 mm.
Peso: 163 g.
Cristal: cristal mineral reforzado.
Correa: acero inoxidable.
Características: calendario, cronógrafo, resistente al agua 3 atm.` },
    { id: 9, sku: "NF9038L", name: "Naviforce Lux", category: "Premium", price: 2550, images: ["assets/Fotos productos/Naviforce Lux/Naviforce Lux Sin fondo.png"], description: `Movimiento: Seiko.
Caja: acero inoxidable.
Diámetro: 45mm.
Grosor: 10,5 mm.
Longitud: 260 mm.
Ancho correa: 24 mm.
Peso: 73 g.
Cristal: Hardlex.
Correa: acero inoxidable.
Características: calendario (fecha y día), resistente al agua 3 atm.` },
    { id: 10, sku: "NF9208G", name: "Naviforce Ultra", category: "Premium", price: 2650, images: ["assets/Fotos productos/Naviforce 9208 Ultra/Naviforce 9208 Sport Ultra.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 16 mm.
Longitud: 260 mm.
Ancho correa: 24 mm.
Peso: 170 g.
Cristal: Mineral reforzado.
Correa: cuero.
Características: calendario, cronógrafo, resistente al agua 3 atm.` },
    { id: 11, sku: "NF8023V", name: "Naviforce N Verde", category: "Casual", price: 1700, images: ["assets/Fotos productos/N verde/8023 verde sin fondo.png", "assets/Fotos productos/N verde/NF Verde 2.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 12mm.
Longitud: 260 mm.
Ancho correa: 23 mm.
Peso: 76 g.
Cristal: vidrio mineral.
Correa: PU.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 12, sku: "NF8023B", name: "Naviforce N Azúl", category: "Casual", price: 1700, images: ["assets/Fotos productos/N azúl/8023 azul sin fondo.png", "assets/Fotos productos/N azúl/NF Azul.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 12mm.
Longitud: 260 mm.
Ancho correa: 23 mm.
Peso: 76 g.
Cristal: vidrio mineral.
Correa: PU.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 13, sku: "NF8023K", name: "Naviforce N Negro", category: "Casual", price: 1700, images: ["assets/Fotos productos/N negro/NF Marrón.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 12mm.
Longitud: 260 mm.
Ancho correa: 23 mm.
Peso: 76 g.
Cristal: vidrio mineral.
Correa: PU.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 26, sku: "NF8023E", name: "Naviforce N Beige", category: "Casual", price: 1700, images: ["assets/Fotos productos/N Beige/Naviforce 8023.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 12mm.
Longitud: 260 mm.
Ancho correa: 23 mm.
Peso: 76 g.
Cristal: vidrio mineral.
Correa: PU.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 14, sku: "GB-PN-01", name: "Pure Noir", category: "Casual", price: 1500, images: ["assets/Fotos productos/Noir/Pure Noir.png"], description: "Totalmente negro. Un diseño audaz para quienes prefieren la elegancia del minimalismo extremo." },
    { id: 15, sku: "NF8031B", name: "Naviforce Sport", category: "Sport", price: 2000, images: ["assets/Fotos productos/8031 Naviforce Sport/8031 - sin fondo.png"], description: `Movimiento: Seiko.
Caja: aleación de zinc.
Diámetro: 45mm.
Grosor: 10,5 mm.
Longitud: 260 mm.
Ancho correa: 24 mm.
Peso: 73 g.
Cristal: vidrio mineral reforzado.
Correa: silicona.
Cierre: hebilla de gancho.
Características: calendario, resistente al agua 3 atm.` },
    { id: 16, sku: "NF7112K", name: "Naviforce Sport Plus", category: "Sport", price: 2050, images: ["assets/Fotos productos/Naviforce Sport Plus/Naviforce Sport Plus Sin fondo.png"], description: `Movimiento: Seiko.
Caja: policarbonato.
Diámetro: 43 mm.
Grosor: 13 mm.
Ancho correa: 24 mm.
Peso: 63 g.
Cristal: vidrio mineral reforzado.
Correa: silicona.
Características: indicadores luminosos (luz blanca), resistente al agua 5 atm.` },
    { id: 17, sku: "PDG001G", name: "Poedagar Classic", category: "Clásico", price: 1900, images: ["assets/Fotos productos/Poedagar Classic/Poedagar 930 Classic Sin fondo.png"], description: "" },
    { id: 18, sku: "PDG001K", name: "Poedagar Classic Black", category: "Clásico", price: 1950, images: ["assets/Fotos productos/Poedagar Classic Black/Poedagar Classic Black (v2) sin fondo.png"], description: "" },
    { id: 22, sku: "PDG003G", name: "Poedagar Metal", category: "Clásico", price: 2000, images: ["assets/Fotos productos/Poedagar Metal/Poedagar Metal Sin fondo.png"], description: "" },
    { id: 23, sku: "PDG004G", name: "Poedagar Metal 2", category: "Clásico", price: 2050, images: ["assets/Fotos productos/Poedagar Metal 2/Poedagar Metal 2 sin fondo.png"], description: "" },
    { id: 24, sku: "SPH001M", name: "Sapphero", category: "Premium", price: 2800, images: ["assets/Fotos productos/Sapphero/Sapphero.png"], description: "" }
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
            <div class="product-image">
                ${product.images && product.images[0] ? `<img src="${product.images[0]}" alt="${product.name}">` : '<div class="image-placeholder"></div>'}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <span class="product-price">${formatPrice(product.price)}</span>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function formatPrice(price) {
    if (price === null || price === undefined || price === '') {
        return '$XXXX';
    }

    return `$${Number(price).toLocaleString('es-UY')}`;
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
