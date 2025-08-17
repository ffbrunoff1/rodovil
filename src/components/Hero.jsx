import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Shield, Award } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-road-pattern"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-secondary-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-16 h-16 bg-primary-300 rounded-full opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4 mr-2" />
                Líder em Construção de Rodovias
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                Construímos 
                <span className="text-gradient block mt-2">
                  Rodovias de Excelência
                </span>
              </h1>

              <p className="text-xl text-primary-600 leading-relaxed max-w-2xl">
                Especialistas em infraestrutura viária com mais de duas décadas de experiência. 
                Transformamos projetos em realidade com tecnologia avançada, qualidade superior 
                e compromisso com prazos.
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                'Tecnologia Avançada',
                'Equipe Especializada', 
                'Prazos Cumpridos',
                'Qualidade Garantida'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                  <span className="text-primary-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-200"
            >
              {[
                { number: '500+', label: 'Km Construídos' },
                { number: '20+', label: 'Anos de Experiência' },
                { number: '100+', label: 'Projetos Entregues' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-secondary-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary-100 rounded-2xl">
                      <Zap className="w-8 h-8 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900">
                        Projeto Personalizado
                      </h3>
                      <p className="text-primary-600">
                        Soluções sob medida para cada necessidade
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-xl p-4 text-center">
                      <Shield className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-primary-700">
                        Segurança Total
                      </div>
                    </div>
                    <div className="bg-accent-50 rounded-xl p-4 text-center">
                      <Award className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-primary-700">
                        Qualidade ISO
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Planejamento</span>
                      <span className="text-secondary-600 font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-primary-200 rounded-full h-2">
                      <motion.div
                        className="bg-secondary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-accent-500 text-white p-4 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-xs opacity-90">Suporte</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary-700 text-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs opacity-90">Estados</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}