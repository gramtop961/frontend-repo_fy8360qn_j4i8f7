import React from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import RecommendationStrip from './components/RecommendationStrip';
import AIChat from './components/AIChat';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur px-4 py-2">
          <a href="#" className="font-semibold tracking-tight text-gray-900 dark:text-white">BlueCommerce</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#chat" className="hover:text-indigo-600">AI Assistant</a>
            <a href="#" className="hover:text-indigo-600">Wholesale</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-md px-3 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Sign in</button>
            <button className="rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-3 py-1.5 text-sm">Cart</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <RecommendationStrip />
        <ProductGrid />
        <AIChat />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} BlueCommerce. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-600">Privacy</a>
              <a href="#" className="hover:text-indigo-600">Terms</a>
              <a href="#" className="hover:text-indigo-600">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
