import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/assets/images/HBL-logo.png" 
                alt="Hack Beyond Limits Logo" 
                className="h-10 w-auto max-w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 