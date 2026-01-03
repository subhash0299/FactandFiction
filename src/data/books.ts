import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: 1,
    title: 'Tales Of Old Times',
    author: 'Subhash Bishnoi',
    description: 'From psychological terrors to supernatural haunts, explore nine unique tales of horror that will leave you questioning what lurks in the dark.',
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
    description: 'A harrowing yet inspiring true account of resilience and human spirit, chronicling the miraculous 72-day struggle for survival following the 1972 Andes plane crash.',
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
