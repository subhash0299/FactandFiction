import { useState, useMemo } from 'react';
import { BookCard } from './components/BookCard';
import { books } from './data/books';
import { BookOpen, Search, Filter, X, Star, TrendingUp, BookMarked } from 'lucide-react';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  // Get all unique genres
  const genres = useMemo(() => {
    const genreSet = new Set(books.map(book => book.genre));
    return ['All', ...Array.from(genreSet).sort()];
  }, []);

  // Filter books based on search and genre
  const filteredBooks = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();
    
    return books.filter(book => {
      // If search query is empty, show all books (matches search)
      const matchesSearch = searchLower === '' || 
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower);
      
      // Normalize genre comparison (trim whitespace and compare)
      const bookGenre = book.genre.trim();
      const selectedGenreTrimmed = selectedGenre.trim();
      const matchesGenre = selectedGenreTrimmed === 'All' || bookGenre === selectedGenreTrimmed;
      
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  // Featured books (most recent or first 2) - also filtered by search and genre
  const featuredBooks = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();
    
    const filtered = books.filter(book => {
      // Apply search filter
      const matchesSearch = searchLower === '' || 
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower);
      
      // Apply genre filter
      const bookGenre = book.genre.trim();
      const selectedGenreTrimmed = selectedGenre.trim();
      const matchesGenre = selectedGenreTrimmed === 'All' || bookGenre === selectedGenreTrimmed;
      
      return matchesSearch && matchesGenre;
    });
    
    return filtered
      .sort((a, b) => b.publishYear - a.publishYear)
      .slice(0, 2);
  }, [searchQuery, selectedGenre]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  My Book Store
                </h1>
                <p className="text-xs text-gray-500">Literary Collection</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#books" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Books
              </a>
              <a href="#featured" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Featured
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-400 to-sky-500 text-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Welcome to My
              <span className="block bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
                Book Collection
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/95 mb-4 leading-relaxed">
              Explore captivating narratives, compelling stories, and literary adventures.
            </p>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 via-rose-50/30 to-transparent"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title, author, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Genre Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      {featuredBooks.length > 0 && (
        <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Books Section */}
      <section id="books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              All Books
              {filteredBooks.length !== books.length && (
                <span className="text-lg text-gray-500 font-normal ml-2">
                  ({filteredBooks.length} of {books.length})
                </span>
              )}
            </h2>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No books found</h3>
            <p className="text-gray-500 mb-4">
              {searchQuery || selectedGenre !== 'All' 
                ? 'Try adjusting your search or filter criteria'
                : 'Add your books in src/data/books.ts'}
            </p>
            {(searchQuery || selectedGenre !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGenre('All');
                }}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
export default App;
