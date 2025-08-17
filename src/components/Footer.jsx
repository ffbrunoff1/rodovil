import React from 'react'
import { motion } from 'framer-motion'
import { Road, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerSections = [
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', action: () => scrollToSection('about') },
        { name: 'Nossos Serviços', action: () => scrollToSection('services') },
        { name: 'Projetos', action: () => scrollToSection('services') },
        { name: 'Contato', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Construção de Rodovias', action: () => scrollToSection('services') },
        { name: 'Manutenção Viária', action: () => scrollToSection('services') },
        { name: 'Consultoria Técnica', action: () => scrollToSection('services') },
        { name: 'Projetos Executivos', action: () => scrollToSection('services') }
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: 'contato@rodovil.com.br', action: () => window.open('mailto:contato@rodovil.com.br') },
        { name: '(11) 3456-7890', action: () => window.open('tel:+551134567890') },
        { name: 'São Paulo, SP', action: null },
        { name: 'Segunda a Sexta: 8h às 18h', action: null }
      ]
    }
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-road-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-secondary-500 rounded-full opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-accent-500 rounded-full opacity-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 py-16">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 bg-secondary-600 rounded-lg shadow-lg">
                <Road className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold">
                <span className="text-gradient">Rodovil</span>
              </span>
            </motion.div>

            <p className="text-primary-300 leading-relaxed mb-6">
              Construindo o futuro das rodovias brasileiras com excelência, 
              inovação e compromisso com a qualidade. Mais de 20 anos 
              conectando o Brasil.
            </p>

            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5 text-secondary-400" />
                <a 
                  href="mailto:contato@rodovil.com.br" 
                  className="text-primary-300 hover:text-white transition-colors duration-300"
                >
                  contato@rodovil.com.br
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-5 h-5 text-secondary-400" />
                <a 
                  href="tel:+551134567890" 
                  className="text-primary-300 hover:text-white transition-colors duration-300"
                >
                  (11) 3456-7890
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="w-5 h-5 text-secondary-400" />
                <span className="text-primary-300">São Paulo, SP - Brasil</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {section.title}
              </h3>
              
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={link.action}
                      className="text-primary-300 hover:text-white transition-colors duration-300 text-left w-full"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      disabled={!link.action}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-t border-primary-700 pt-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Fique por dentro das novidades
              </h3>
              <p className="text-primary-300 leading-relaxed">
                Receba atualizações sobre nossos projetos, inovações tecnológicas 
                e oportunidades no setor de infraestrutura viária.
              </p>
            </div>
            
            <motion.div
              className="bg-primary-800 p-6 rounded-2xl border border-primary-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 bg-primary-700 border border-primary-600 rounded-xl text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                />
                <motion.button
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscrever-se
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-400 text-sm">
              © 2024 Rodovil. Todos os direitos reservados. 
              <span className="ml-2">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Papum</a></em>
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-primary-400 hover:text-white transition-colors duration-300 text-sm">
                Política de Privacidade
              </button>
              <button className="text-primary-400 hover:text-white transition-colors duration-300 text-sm">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary-600 hover:bg-secondary-700 text-white p-3 rounded-full shadow-2xl z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}