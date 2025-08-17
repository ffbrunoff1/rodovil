import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Road } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-secondary-600' : 'bg-white'} shadow-lg`}>
              <Road className={`h-6 w-6 lg:h-8 lg:w-8 ${isScrolled ? 'text-white' : 'text-secondary-600'}`} />
            </div>
            <span className={`text-2xl lg:text-3xl font-bold ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}>
              <span className="text-gradient">Rodovil</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Serviços', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-secondary-600' 
                    : 'text-white hover:text-accent-300'
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Solicitar Orçamento
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Serviços', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-primary-700 hover:text-secondary-600 hover:bg-primary-50 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mx-4 btn-primary w-auto"
            >
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}