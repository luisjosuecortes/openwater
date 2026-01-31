import React from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
