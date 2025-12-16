import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onProductClick(product);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onProductClick(product);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#1A2C20] p-4 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 border border-transparent hover:border-primary/50">
      
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-[#111813] mb-4 shadow-sm">
        
        {/* Badges */}
        {product.isBestSeller && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-background-dark">
            Más Vendido
          </span>
        )}
        {product.discount && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            {product.discount}
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-background-dark">
          <Heart className="h-4 w-4" />
        </button>

        {/* Image */}
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-95 group-hover:brightness-100" 
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
          <button 
            onClick={handleTitleClick}
            className="hover:underline text-left w-full"
          >
            {product.title}
          </button>
        </h3>
        <p className="text-sm text-slate-500 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold text-slate-900 dark:text-white">€{product.price.toFixed(2)}</span>
          </div>
          <a 
            href="#"
            onClick={handleAddClick}
            className="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-background-dark transition-colors"
          >
            Añadir
          </a>
        </div>
      </div>
    </div>
  );
};