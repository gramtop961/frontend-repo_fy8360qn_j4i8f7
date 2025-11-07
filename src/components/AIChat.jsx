import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI shopping assistant. Tell me what you\'re looking for — retail or wholesale — and I\'ll recommend the best options.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Backend-first rule: endpoint should exist; here we simulate basic reply if backend is not yet connected.
      const base = import.meta.env.VITE_BACKEND_URL;
      if (base) {
        const res = await fetch(`${base}/ai/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [...messages, userMsg].slice(-8) }),
        });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      } else {
        // graceful fallback
        setMessages((m) => [
          ...m,
          { role: 'assistant', content: "I recommend our POS Kit for bulk orders and the Minimalist Visa Card for individual shoppers." },
        ]);
      }
    } catch (err) {
      setMessages((m) => [ ...m, { role: 'assistant', content: 'Sorry, I had trouble connecting. Please try again.' } ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Chat with AI</h2>
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
              {m.role === 'assistant' && (
                <div className="mt-1 rounded-full bg-indigo-600 p-1 text-white"><Bot className="h-4 w-4" /></div>
              )}
              <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${m.role === 'user' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-white'} `}>
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="mt-1 rounded-full bg-gray-200 dark:bg-gray-700 p-1 text-gray-800 dark:text-white"><User className="h-4 w-4" /></div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-black/10 dark:border-white/10 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about products, pricing, or bulk discounts..."
            className="flex-1 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-60">
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
