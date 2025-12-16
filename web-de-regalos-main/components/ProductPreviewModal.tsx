import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface ProductPreviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !product) return null;

  const handleAmazonClick = () => {
    window.open(product.amazonLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#1A2C20] shadow-2xl overflow-hidden">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6 p-8">
            
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-96">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {product.title}
                </h2>
                
                <p className="text-slate-600 dark:text-gray-400 text-lg mb-6">
                  {product.description}
                </p>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(product.rating!)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 dark:text-gray-400">
                      {product.rating}/5
                    </span>
                  </div>
                )}

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.isBestSeller && (
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-background-dark">
                      ⭐ Más Vendido
                    </span>
                  )}
                  {product.discount && (
                    <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>

              {/* Price and Button */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="mb-6">
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through mb-2">
                      €{product.originalPrice.toFixed(2)}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">
                    €{product.price.toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={handleAmazonClick}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-bold text-background-dark hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver en Amazon
                </button>

                <p className="text-xs text-center text-slate-500 dark:text-gray-400 mt-4">
                  Se abrirá en una nueva ventana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
