// app/layout.js

import Header from '@/components/Header';
import '../styles/globals.css';
import Footer from '@/components/Footer';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}

