// @ts-nocheck
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Project from './components/Project.jsx'
import Footer from './components/Footer.jsx'
import Profile from './components/Profile.jsx'
import Price from './components/Price.jsx'
import FAQ from './components/FAQ.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen text-white lg:cursor-none">
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      <Header />
      <Hero />

      <section id="services" className="py-20 md:py-32 px-4 relative overflow-hidden bg-[#030502]">
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

        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic uppercase">
              Our Services
            </h2>
            <div className="w-16 md:w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6 md:mb-8 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <p className="text-neutral-500 text-sm md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
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
      <FAQ />
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default App

