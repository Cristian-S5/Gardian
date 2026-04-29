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
        <div class="product-large-image image-placeholder"></div>
        <div class="product-detail-info">
            <div class="category-badge">${product.category}</div>
            <h1>${product.name}</h1>
            <span class="product-sku">SKU: ${product.sku}</span>
            <p class="product-description">${product.description}</p>
            
            <div class="price-disclaimer">
                <h4 style="color: var(--accent-color); margin-bottom: 10px;">Venta Mayorista</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Para conocer precios mayoristas y disponibilidad de stock para tu negocio, por favor contactanos indicando este modelo.</p>
            </div>

            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <a href="https://wa.me/message/KRH65KV4KNABA1?text=Hola!%20Me%20interesa%20el%20modelo%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-primary">Consultar por WhatsApp</a>
                <a href="empresas.html" class="btn btn-outline">Solicitar Catálogo</a>
            </div>
            
            <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--glass-border);">
                <h4 style="margin-bottom: 20px;">Características</h4>
                <ul style="list-style: none; color: var(--text-secondary);">
                    <li style="margin-bottom: 10px;">• Garantía oficial</li>
                    <li style="margin-bottom: 10px;">• Packaging exclusivo</li>
                    <li style="margin-bottom: 10px;">• Importación directa</li>
                </ul>
            </div>
        </div>
    `;
});
