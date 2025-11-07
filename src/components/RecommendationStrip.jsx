import React from 'react';
import { Sparkles } from 'lucide-react';

const recs = [
  { id: 'r1', title: 'Best for startups', desc: 'POS Kit (Bulk 10x)', cta: 'View bundle' },
  { id: 'r2', title: 'Top-rated', desc: 'Minimalist Visa Card', cta: 'Shop now' },
  { id: 'r3', title: 'Fast checkout', desc: 'Contactless Reader', cta: 'Add to cart' },
];

export default function RecommendationStrip() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Smart picks for you</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recs.map((r) => (
            <div key={r.id} className="rounded-lg bg-white/10 backdrop-blur p-4">
              <div className="text-sm opacity-80">{r.title}</div>
              <div className="text-xl font-semibold">{r.desc}</div>
              <button className="mt-3 inline-flex rounded-md bg-white text-indigo-700 px-3 py-1 text-sm hover:bg-white/90">{r.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
