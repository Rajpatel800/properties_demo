import { NavbarProps } from './Navbar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps extends NavbarProps {
  children: React.ReactNode;
}

export default function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-on-background">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow flex flex-col w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
