import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, CreditCard, Shield } from 'lucide-react';

const Pill = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1 text-sm text-gray-800 dark:text-gray-100 shadow-sm ring-1 ring-black/5">
    <Icon className="h-4 w-4 text-indigo-600" />
    <span>{children}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradients overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-gray-950/70 dark:via-gray-950/60 dark:to-gray-950" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 md:pt-36 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Pill icon={Sparkles}>AI Commerce, made simple</Pill>
          <Pill icon={CreditCard}>Secure payments</Pill>
          <Pill icon={Shield}>Buyer protection</Pill>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
          A modern storefront for retail and wholesale
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300">
          Discover a clean, minimalist shopping experience. Chat with an AI stylist, get smart recommendations, and scale from single items to bulk orders effortlessly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#products" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition">
            Shop featured
          </a>
          <a href="#chat" className="inline-flex items-center justify-center rounded-md bg-white/80 dark:bg-white/10 px-5 py-3 text-gray-900 dark:text-white ring-1 ring-black/10 hover:ring-black/20 transition">
            Ask the AI assistant
          </a>
        </div>
      </div>
    </section>
  );
}
