import { Book } from '../types/book';
import { ShoppingCart, ExternalLink, Star, Calendar, User } from 'lucide-react';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export function BookCard({ book, featured = false }: BookCardProps) {
  const getVendorLink = (vendor: string) => {
    const links = (book.buyLinks || {}) as Record<string, any>;
    for (const [key, val] of Object.entries(links)) {
      if (key.toLowerCase() === vendor.toLowerCase()) {
        return typeof val === 'string' ? val : undefined;
      }
    }
    return undefined;
  };

  const amazonLink = getVendorLink('amazon');
  const flipkartLink = getVendorLink('flipkart');
  const notionpressLink = getVendorLink('notionpress');

  if (featured) {
    return (
      <div className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-100 relative">
        {/* Featured Badge */}
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <Star className="w-3 h-3 fill-white" />
          <span>FEATURED</span>
        </div>

        <div className="md:flex">
          {/* Cover section */}
          <div className="md:w-2/5 relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"></div>
            <div className="relative transform group-hover:scale-105 transition-transform duration-500">
              <div className="bg-white rounded-lg shadow-xl p-4 ring-4 ring-emerald-100/50">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full max-w-[200px] h-auto object-contain block drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 md:w-3/5 flex flex-col">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {book.title}
                </h3>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{book.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{book.publishYear}</span>
                </div>
              </div>

              <span className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-4 py-1.5 rounded-full mb-4 font-semibold shadow-md">
                {book.genre}
              </span>

              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                {book.description}
              </p>
            </div>

            {/* Buy links */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2 text-emerald-600" />
                Available at:
              </h4>

              <div className="flex flex-wrap gap-2">
                {amazonLink && (
                  <a
                    href={amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buy on Amazon"
                    className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                  >
                    <img 
                      src="/store_logos/amazon-logo.png" 
                      alt="Amazon" 
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                )}

                {flipkartLink && (
                  <a
                    href={flipkartLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buy on Flipkart"
                    className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                  >
                    <img 
                      src="/store_logos/flipkart-logo.png" 
                      alt="Flipkart" 
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                )}

                {notionpressLink && (
                  <a
                    href={notionpressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buy on Notionpress"
                    className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                  >
                    <img 
                      src="/store_logos/Notion_Press_Logo.png" 
                      alt="Notionpress" 
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                )}

                {book.buyLinks.other?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
      <div className="md:flex">
        {/* Cover section */}
        <div className="md:w-1/3 relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5"></div>
          <div className="relative transform group-hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-lg shadow-lg p-3 ring-2 ring-gray-100">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full max-w-[180px] md:max-w-[200px] h-auto object-contain block"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 md:w-2/3 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {book.title}
              </h3>
              <span className="text-sm text-gray-500 ml-4 flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{book.publishYear}</span>
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-3 flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>by {book.author}</span>
            </p>

            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full mb-4 font-semibold">
              {book.genre}
            </span>

            <p className="text-gray-700 leading-relaxed mb-6 line-clamp-2">
              {book.description}
            </p>
          </div>

          {/* Buy links */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <ShoppingCart className="w-4 h-4 mr-2 text-emerald-600" />
              Available at:
            </h4>

            <div className="flex flex-wrap gap-2">
              {amazonLink && (
                <a
                  href={amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buy on Amazon"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                >
                  <img 
                    src="/store_logos/amazon-logo.png" 
                    alt="Amazon" 
                    className="w-8 h-8 object-contain"
                  />
                </a>
              )}

              {flipkartLink && (
                <a
                  href={flipkartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buy on Flipkart"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                >
                  <img 
                    src="/store_logos/flipkart-logo.png" 
                    alt="Flipkart" 
                    className="w-8 h-8 object-contain"
                  />
                </a>
              )}

              {notionpressLink && (
                <a
                  href={notionpressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buy on Notionpress"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:scale-110 border border-gray-200"
                >
                  <img 
                    src="/store_logos/Notion_Press_Logo.png" 
                    alt="Notionpress" 
                    className="w-8 h-8 object-contain"
                  />
                </a>
              )}

              {book.buyLinks.other?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
