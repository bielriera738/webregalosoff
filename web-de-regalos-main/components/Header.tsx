import React from 'react';
import { Gift, Search, ShoppingCart, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#28392e] bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="px-6 lg:px-12 flex h-20 items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-primary">
            <Gift className="h-8 w-8" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Regalos 2025</h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex max-w-lg flex-1">
          <label className="relative flex w-full items-center">
            <span className="absolute left-4 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <input 
              className="h-12 w-full rounded-full border-none bg-gray-100 dark:bg-[#1A2C20] pl-12 pr-4 text-sm font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white" 
              placeholder="Buscar el regalo perfecto..." 
            />
          </label>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Inicio</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Categorías</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Ofertas</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-[#1A2C20] hover:bg-primary/20 hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-[#1A2C20] hover:bg-primary/20 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};