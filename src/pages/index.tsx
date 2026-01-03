import React from 'react';
import Footer from '../components/Footer';
import { books } from '../data/books';
import { BookCard } from '../components/BookCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800">My Books</h1>
          <p className="text-sm text-gray-500">A selection of my work</p>
        </header>

        <section className="grid gap-6">
          {books.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
