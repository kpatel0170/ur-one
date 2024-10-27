import Footer from './footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-6 md:p-8 lg:p-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
