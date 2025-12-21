// @ts-nocheck
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Project from './components/Project.jsx'
import Footer from './components/Footer.jsx'
import Profile from './components/Profile.jsx'
import Price from './components/Price.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen text-white cursor-none">
      <CustomCursor />
      <Header />
      <Hero />
      <section id="services" className="py-32 px-4 relative overflow-hidden bg-[#030502]">
        {/* Subtle Masked Background - Services Variation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {/* 1. Base Gradient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#000_100%)] opacity-20" />

          {/* 2. Masked Grid Pattern (Medium Grid) */}
          <div className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
              backgroundSize: '70px 70px',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>

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

