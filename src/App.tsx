/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen selection:bg-purple-300 selection:text-purple-900">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

