document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('product-detail');
    
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        window.location.href = 'tienda.html';
        return;
    }

    // Find product in the products array (assumed to be globally available from shop.js)
    const product = products.find(p => p.id === productId);

    if (!product) {
        detailContainer.innerHTML = '<h1>Producto no encontrado</h1><p>El producto que buscas no existe o ha sido removido.</p>';
        return;
    }

    // Update Page Title
    document.title = `${product.name} | Gardian Baz`;

    // Render Product Detail
    detailContainer.innerHTML = `
        <div class="product-gallery">
            <div class="product-large-image" id="main-image-container">
                ${product.images && product.images.length > 0 
                    ? `<img src="${product.images[0]}" alt="${product.name}" id="main-product-img">` 
                    : '<div class="image-placeholder"></div>'}
            </div>
            ${product.images && product.images.length > 1 ? `
                <div class="product-thumbnails">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${img}" alt="${product.name} vista ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="product-detail-info">
            <div class="category-badge">${product.category}</div>
            <h1>${product.name}</h1>
            <span class="product-sku">SKU: ${product.sku}</span>
            <span class="product-detail-price" style="font-size: 2.2rem; font-weight: 700; color: var(--accent-color); margin: 15px 0 20px 0; display: block;">$XXXX</span>
            <p class="product-description">${product.description}</p>
            
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <a href="https://www.gardianbaz.com/" target="_blank" class="btn btn-primary" style="margin-bottom: 15px;">Comprar</a>
            </div>

            <div class="price-disclaimer">
                <h4 style="color: var(--accent-color); margin-bottom: 10px;">Venta Mayorista</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Para conocer precios mayoristas y disponibilidad de stock para tu negocio, por favor contactanos indicando este modelo.</p>
            </div>
        </div>
    `;

    // Slider Logic
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImg = document.getElementById('main-product-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = thumb.dataset.index;
            mainImg.src = product.images[index];
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
});
