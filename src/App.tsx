import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { Page } from './types';
import Properties from './pages/Properties';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <AnimatePresence mode="popLayout">
        {currentPage === 'home' && <Home key="home" />}
        {currentPage === 'properties' && <Properties key="properties" />}
        {currentPage === 'services' && <Services key="services" />}
        {currentPage === 'about' && <About key="about" />}
        {currentPage === 'contact' && <Contact key="contact" />}
      </AnimatePresence>
    </Layout>
  );
}
