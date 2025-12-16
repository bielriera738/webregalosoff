import React from 'react';
import { Check } from 'lucide-react';
import { CategoryId, CategoryData } from '../types';
import { categories } from '../data';

interface SidebarProps {
  selectedCategory: CategoryId | 'all';
  onCategorySelect: (id: CategoryId | 'all') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <aside className="hidden lg:flex w-64 flex-col gap-8 shrink-0">
      {/* Categories */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
          Categoría
        </h3>
        <div className="flex flex-col gap-3">
          
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                checked={selectedCategory === 'all'}
                onChange={() => onCategorySelect('all')}
                className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all"
              />
              <Check className="absolute left-0.5 top-0.5 h-4 w-4 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </div>
            <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary transition-colors">
              Todos
            </span>
          </label>

          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox"
                  checked={selectedCategory === cat.id}
                  onChange={() => onCategorySelect(cat.id)}
                  className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all"
                />
                <Check className="absolute left-0.5 top-0.5 h-4 w-4 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Slider (Mock) */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
          Precio
        </h3>
        <div className="flex flex-col gap-4 px-1">
          <div className="relative h-1 w-full rounded-full bg-gray-700">
            <div className="absolute left-0 top-0 h-full w-2/3 rounded-full bg-primary"></div>
            <div className="absolute right-[33%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-400">
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>
      </div>

      {/* Banner Ad */}
      <div className="mt-4 overflow-hidden rounded-xl relative bg-gradient-to-br from-[#1A2C20] to-[#0d1610] border border-gray-800 p-6 flex flex-col gap-3">
        <span className="text-primary text-xs font-bold tracking-wider uppercase">Oferta Especial</span>
        <h4 className="text-white font-bold text-xl leading-tight">Envío gratis en productos seleccionados</h4>
        <p className="text-gray-400 text-sm">Solo por tiempo limitado para el 2025.</p>
      </div>
    </aside>
  );
};