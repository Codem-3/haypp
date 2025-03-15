import "@/styles/forComponents/productCard.css";
import * as Icons from "@/utils/icons.util"; // Import All Icons

// ProductCard component to display a list of products
export const ProductCard = () => {
    return (
        <div id="products" aria-label="Product List">
            {products.map(product => (
                <section key={product.id} className="card">
                    <article>
                        {/* Product Image */}
                        <img
                            src={product.img}
                            alt={product.name}
                            className="product-image"
                            loading="lazy"
                        />

                        <span>
                            {/* Product Rating */}
                            {product.rating !== null && (
                                <div className="rating" aria-label={`Rating: ${product.rating} out of 5`}>
                                    <span> {/* Blue color for filled stars */}
                                        {'★'.repeat(product.rating)}
                                    </span>
                                    <span> {/* Gray color for empty stars */}
                                        {'★'.repeat(5 - product.rating)}
                                    </span>
                                    <p>{product.review}</p>
                                </div>
                            )}

                            {/* Product Title */}
                            <h2>{product.title}</h2>

                            {/* Product Name */}
                            <p>{product.name}</p>
                        </span>
                    </article>

                    <div>
                        {/* Pack Information */}
                        {product.pack && (
                            <p>
                                {product.pack}
                                <Icons.ArrowIcon />
                            </p>
                        )}

                        {/* Product Price */}
                        <span className={product.pricePerPiece === 0 ? "noPack" : ""}>
                            <p className={product.pricePerPiece === 0 ? "centered-price" : ""}>
                                € {product.price.toFixed(2)}
                            </p>

                            {/* Price Per Piece */}
                            {product.pricePerPiece > 0 && (
                                <p>{product.pricePerPiece.toFixed(2)}€/St.</p>
                            )}
                        </span>
                    </div>

                    {/* Add to Cart Button or Out of Stock */}
                    <button
                        className={product.pack ? "" : "unavailable"}
                        aria-label={product.pack ? `Add ${product.name} to cart` : `${product.name} is out of stock`}
                    >
                        {product.pack ? "In den Warenkorb" : "Nicht auf Lager"}
                    </button>
                </section>
            ))}
        </div>
    );
};

// Product data array containing product details
const products = [
    {
        id: 1,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Eucalyptus Slim Extra Strong',
        rating: 5, review: 3,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a22cdc9a98df4b6d295c2/230/230/fill/c/plytix-672a22cdc9a98df4b6d295c2-png.png',
    },
    {
        id: 2,
        title: 'Ace Superwhite',
        name: 'Ace X Cool Mint Slim Stark',
        rating: 4, review: 5,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-676967eefc010d4269f8d0a2/230/230/fill/c/plytix-676967eefc010d4269f8d0a2-png.png',
    },
    {
        id: 3,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Cool Mint Slim Extra Strong',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a2253b2de674384c8ae11/230/230/fill/c/plytix-672a2253b2de674384c8ae11-png.png',
    },
    {
        id: 4,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite x Cosmic Cool Mint Extra Stark',
        rating: 5, review: 2,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-676964cbcb913abe5068635f/230/230/fill/c/plytix-676964cbcb913abe5068635f-png.png',
    },
    {
        id: 5,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Green Lemon Slim Extra Stark',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-654356bbabb42e66d828b6ad/230/230/fill/c/plytix-654356bbabb42e66d828b6ad-png.png',
    },
    {
        id: 6,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Berry Breeze Slim Normal',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-63ef584f1292792ac38b16c5/230/230/fill/c/plytix-63ef584f1292792ac38b16c5-png.png',
    },
    {
        id: 7,
        title: 'Ace Superwhite',
        name: 'Ace X Black Raspberry Chili Slim Stark',
        rating: 1,
        review: 1,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a20165602b958eec4c90d/230/230/fill/c/plytix-672a20165602b958eec4c90d-png.png',
    },
    {
        id: 8,
        title: 'Ace Superwhite',
        name: 'Ace X Guarana Chili Boost Slim Stark',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-676004292b50e55526e2731d/230/230/fill/c/plytix-676004292b50e55526e2731d-png.png',
    },
    {
        id: 9,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Spearmint Slim Stark',
        rating: 3,
        review: 1,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-675945935cd527f651c8c23a/230/230/fill/c/plytix-675945935cd527f651c8c23a-png.png',
    },
    {
        id: 10,
        title: 'Ace Superwhite',
        name: 'ACE X Red Apple Cinnamon Stark',
        rating: 4,
        review: 1,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a1ed8c9a7ad4929a56c8c/230/230/fill/c/plytix-672a1ed8c9a7ad4929a56c8c-png.png',
    },
    {
        id: 11,
        title: 'Ace Superwhite',
        name: 'Ace X-Strong Mixpack',
        rating: null,
        price: 13.77,
        pricePerPiece: 0,
        pack: null,
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-675abfd92b50e55526e1a00f/230/230/fill/c/plytix-675abfd92b50e55526e1a00f-png.png',
    },
    {
        id: 12,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Cool Mint Slim Normal',
        rating: 3,
        review: 2,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-63ef58805969a63f3a550c44/230/230/fill/c/plytix-63ef58805969a63f3a550c44-png.png',
    },
    {
        id: 13,
        title: 'Ace Superwhite',
        name: 'ACE X X-Mas Edition',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a1fa2c9a98df4b6d2955b/230/230/fill/c/plytix-672a1fa2c9a98df4b6d2955b-png.png',
    },
    {
        id: 14,
        title: 'Ace Superwhite',
        name: 'Ace X Honeydew Black Pepper Slim Stark',
        rating: null,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-659e9910719cb7ebaba6faf3/230/230/fill/c/plytix-659e9910719cb7ebaba6faf3-png.png',
    },
    {
        id: 15,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Liquorice Slim Extra Stark',
        rating: 5,
        review: 2,
        price: 39.90,
        pricePerPiece: 3.99,
        pack: '10-Pack',
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-672a23417fda3e8fb6587ee5/230/230/fill/c/plytix-672a23417fda3e8fb6587ee5-png.png',
    },
    {
        id: 16,
        title: 'Ace Superwhite',
        name: 'Ace Aroma Mixpack',
        rating: null,
        price: 13.08,
        pricePerPiece: 0,
        pack: null,
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-663356015eb3757d927480d9/230/230/fill/c/plytix-663356015eb3757d927480d9-png.png',
    },
    {
        id: 17,
        title: 'Ace Superwhite',
        name: 'Ace Superwhite Aroma Extra Strong Mixpack',
        rating: null,
        price: 13.08,
        pricePerPiece: 0,
        pack: null,
        img: 'https://v3-media-we.haypp.com/athaypp/images/plytix-679b6fe7783f894c4a8c6f4d/230/230/fill/c/plytix-679b6fe7783f894c4a8c6f4d-png.png',
    },
];