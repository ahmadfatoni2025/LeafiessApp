// @ts-nocheck
import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { useDebouncedCallback } from './hooks/useDebounce'

// Lazy Load Components
const Header = lazy(() => import('./components/Header.jsx'))
const Hero = lazy(() => import('./components/Hero.jsx'))
const Products = lazy(() => import('./components/Products.jsx'))
const Project = lazy(() => import('./components/Project.jsx'))
const Profile = lazy(() => import('./components/Profile.jsx'))
const Price = lazy(() => import('./components/Price.jsx'))
const FAQ = lazy(() => import('./components/FAQ.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))
const CustomCursor = lazy(() => import('./components/CustomCursor.jsx'))
// const LoadingScreen = lazy(() => import('./components/LoadingScreen.jsx'))

// Fallback skeleton or simple loading state
const SectionLoader = () => (
  <div className="w-full h-[50vh] flex items-center justify-center bg-[#030502]">
    <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  // Debounced resize handler for performance
  const handleResize = useDebouncedCallback(() => {
    setWindowWidth(window.innerWidth)
  }, 250)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // Simulate loading time or wait for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // GSAP global config
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [handleResize])

  return (
    <div className="min-h-screen text-white lg:cursor-none bg-[#030502] selection:bg-emerald-500/30 selection:text-emerald-400">
      <Suspense fallback={null}>
        {!isLoading && <CustomCursor />}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Header />
      </Suspense>

      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <section id="services" className="py-20 md:py-32 px-4 relative overflow-hidden bg-[#030502]">
          {/* Subtle Masked Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#061a12_0%,#000_100%)] opacity-20" />
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

          <Suspense fallback={<SectionLoader />}>
            <Products displayScrollbar={true} />
          </Suspense>
        </section>

        <Suspense fallback={<SectionLoader />}>
          <Profile />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Project />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Price />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <div id="contact">
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default App

