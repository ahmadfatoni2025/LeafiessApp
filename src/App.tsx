// @ts-nocheck
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Project from './components/Project.jsx'
import Footer from './components/Footer.jsx'
import Profile from './components/Profile.jsx'
import Price from './components/Price.jsx'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <Hero />
      <section id="services" className="py-32 px-4 relative overflow-hidden">
        {/* Main Green Glow - Optimized: removed blur filter for better scroll performance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-60 pointer-events-none transform-gpu"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 80%)'
          }}
        />

        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Solusi digital komprehensif yang dirancang dengan presisi untuk membawa bisnis Anda ke level berikutnya.
            </p>
          </motion.div>
        </div>

        <Products
          displayScrollbar={true}
        />
      </section>
      <Profile />
      <Project />
      <Price />
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default App

