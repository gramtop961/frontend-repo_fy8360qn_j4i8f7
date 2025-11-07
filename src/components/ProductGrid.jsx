import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Minimalist Visa Card',
    price: 29,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1648161235886-32b6764917e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwVmlzYSUyMENhcmR8ZW58MHwwfHx8MTc2MjQ5Nzg5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Retail'
  },
  {
    id: 2,
    name: 'Smart Terminal Stand',
    price: 119,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Wholesale'
  },
  {
    id: 3,
    name: 'Contactless Reader',
    price: 79,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1600&auto=format&fit=crop',
    tag: 'Retail'
  },
  {
    id: 4,
    name: 'POS Kit (Bulk 10x)',
    price: 799,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    tag: 'Wholesale'
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl ring-1 ring-black/5 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-black/70 text-white text-xs px-2 py-1">{product.tag}</span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">${product.price}</div>
        </div>
        <button className="mt-4 w-full rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-2 text-sm hover:opacity-90">Add to cart</button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Featured products</h2>
          <p className="text-gray-600 dark:text-gray-300">Curated for both retail and wholesale buyers</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md border px-3 py-1 text-sm dark:border-white/20">All</button>
          <button className="rounded-md border px-3 py-1 text-sm dark:border-white/20">Retail</button>
          <button className="rounded-md border px-3 py-1 text-sm dark:border-white/20">Wholesale</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
