import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: 1,
    title: 'Tales Of Old Times',
    author: 'Subhash Bishnoi',
    description: 'A captivating story that takes readers on an unforgettable journey through... Add your book description here.',
    coverImage: '/toot.jpg',
    publishYear: 2025,
    genre: 'Fiction',
    buyLinks: {
      // alternative casings for UI compatibility
      Notionpress: 'https://notionpress.com/read/tales-of-old-times',
    },
  },
  {
    id: 2,
    title: '72 DAYS',
    author: 'Subhash Bishnoi',
    description: 'Another amazing book with an incredible storyline... Add your second book description here.',
    coverImage: '/72days.png',
    publishYear: 2026,
    genre: 'Non-Fiction',
    buyLinks: {
      Amazon : 'https://www.amazon.com/your-book-link-2',
      Notionpress: 'https://notionpress.com/read/your-book-link-2',
      flipkart: 'https://www.flipkart.com/your-book-link-2',
    },
  },
];
