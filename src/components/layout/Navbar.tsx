import { Menu, X, MessageCircle } from 'lucide-react';
import { Page } from '../../types';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-white/80 backdrop-blur-md shadow-[0_10px_40px_rgba(20,50,74,0.05)]'
        }`}
      >
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
          <button 
            onClick={() => handlePageChange('home')}
            className="font-display text-[24px] leading-[1.4] font-bold text-primary tracking-tight"
          >
            Deora Properties
          </button>
          
          <ul className="hidden md:flex space-x-md items-center">
            {['home', 'properties', 'services', 'about', 'contact'].map((page) => (
              <li key={page}>
                <button 
                  onClick={() => handlePageChange(page as Page)}
                  className={`font-body text-[14px] font-semibold tracking-[0.05em] capitalize transition-colors hover:opacity-80 pb-1 ${
                    currentPage === page 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
          
          <button className="hidden md:flex items-center justify-center bg-primary text-on-primary font-body text-[14px] font-semibold tracking-[0.05em] px-md py-[12px] rounded hover:shadow-[0_10px_40px_rgba(20,50,74,0.1)] hover:bg-primary-container transition-all duration-300">
            Schedule a Consultation
          </button>
          
          <button 
            className="md:hidden text-primary p-xs focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-surface-variant overflow-hidden"
            >
              <ul className="flex flex-col py-4 px-gutter">
                {['home', 'properties', 'services', 'about', 'contact'].map((page) => (
                  <li key={page} className="py-3 border-b border-surface-variant last:border-b-0">
                    <button 
                      onClick={() => handlePageChange(page as Page)}
                      className={`font-body w-full text-left text-[16px] font-semibold capitalize tracking-[0.05em] ${
                        currentPage === page ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li className="pt-4">
                  <button className="w-full bg-primary text-on-primary font-body text-[14px] font-semibold tracking-[0.05em] px-md py-[12px] rounded">
                    Schedule a Consultation
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <a 
        href="#"
        className="fixed bottom-lg right-lg z-50 bg-[#25D366] text-white p-[12px] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center h-14 w-14 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-md bg-surface text-on-surface font-body text-[12px] font-medium px-[12px] py-[4px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Chat with us
        </span>
      </a>
    </>
  );
}
