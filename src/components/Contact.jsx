import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', isError: false })

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({ 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
        isError: false 
      })
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        isError: true 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@rodovil.com.br',
      link: 'mailto:contato@rodovil.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 3456-7890',
      link: 'tel:+551134567890'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP - Brasil',
      link: null
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 8h às 18h',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Vamos Construir
            <span className="text-gradient block mt-2">Juntos o Futuro</span>
          </h2>

          <p className="text-xl text-primary-600 leading-relaxed">
            Pronto para iniciar seu projeto de infraestrutura viária? 
            Nossa equipe está aqui para transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6">
                Fale Conosco
              </h3>
              
              <p className="text-lg text-primary-700 leading-relaxed mb-8">
                Estamos prontos para atender suas necessidades de infraestrutura viária. 
                Entre em contato conosco e descubra como podemos ajudar a transformar 
                seu projeto em realidade.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100 h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex flex-col h-full">
                      <motion.div
                        className="inline-flex p-3 bg-secondary-100 rounded-2xl mb-4 group-hover:bg-secondary-600 transition-colors duration-300 w-fit"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <info.icon className="w-6 h-6 text-secondary-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      
                      <h4 className="text-lg font-bold text-primary-900 mb-2">
                        {info.title}
                      </h4>
                      
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-700 hover:text-secondary-600 transition-colors duration-300 flex-grow"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-primary-700 flex-grow">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-secondary-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-2xl font-bold mb-4">
                Precisa de uma Cotação Rápida?
              </h4>
              
              <p className="text-secondary-100 leading-relaxed mb-6">
                Nossa equipe pode fornecer um orçamento preliminar em até 24 horas. 
                Conte-nos sobre seu projeto e receba uma proposta personalizada.
              </p>

              <motion.a
                href="tel:+551134567890"
                className="inline-flex items-center bg-white text-secondary-700 hover:bg-accent-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Solicite um Orçamento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary-700 font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva seu projeto e necessidades..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-xl ${
                      status.isError 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="font-medium">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-primary-500 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}