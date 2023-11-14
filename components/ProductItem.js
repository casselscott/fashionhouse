import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
  
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>

        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />

      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>

          <h2 className="text-black font-bold">{product.name}</h2>

        </Link>
        <p className="mb-2 text-black font-bold">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
    
  );
}