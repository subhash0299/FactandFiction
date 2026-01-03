import React from 'react';
import { books } from '../data/books';
import { Mail, Twitter, Linkedin, Instagram, BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Row: 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: About Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">About the Author</h3>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-24 h-28 rounded-lg overflow-hidden bg-gray-700 shadow-lg ring-2 ring-emerald-500/30 flex-shrink-0">
                <img 
                  src="/sk.jpg" 
                  alt="Subhash Bishnoi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Hi, I'm <span className="font-semibold text-white">Subhash Bishnoi</span>. 
                I write about my thoughts, history incidents, and compelling narratives 
                that inspire and entertain.
              </p>
            </div>
          </div>

          {/* Column 2: Books Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>My Books</span>
            </h4>
            <ul className="space-y-4">
              {books.map((b) => (
                <li key={b.id} className="flex items-start space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 group-hover:bg-emerald-300 transition-colors"></div>
                  <div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm">{b.title}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{b.publishYear} • {b.genre}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
            <p className="text-gray-300 text-sm mb-6">
              Follow me on social media for updates, book releases, and more!
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Subhash Bishnoi. All rights reserved.
            </span>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for readers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}