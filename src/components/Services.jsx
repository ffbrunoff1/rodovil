import React from 'react'
import { motion } from 'framer-motion'
import { Road, Settings, MapPin, Shield, Zap, CheckCircle, ArrowRight, Truck, HardHat, Calendar } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Road,
      title: 'Construção de Rodovias',
      description: 'Construção completa de rodovias desde o planejamento até a entrega final, utilizando as mais modernas técnicas de pavimentação.',
      features: ['Pavimentação Asfáltica', 'Terraplanagem', 'Drenagem', 'Sinalização'],
      color: 'bg-secondary-500'
    },
    {
      icon: Settings,
      title: 'Manutenção e Conservação',
      description: 'Serviços especializados em manutenção preventiva e corretiva para garantir a longevidade e segurança das vias.',
      features: ['Recapeamento', 'Selagem de Trincas', 'Limpeza de Drenagem', 'Pintura de Faixas'],
      color: 'bg-accent-500'
    },
    {
      icon: MapPin,
      title: 'Estudos e Projetos',
      description: 'Elaboração de estudos técnicos completos e projetos executivos detalhados para otimização de rotas e custos.',
      features: ['Estudos de Viabilidade', 'Projetos Executivos', 'Licenciamento', 'Topografia'],
      color: 'bg-primary-600'
    },
    {
      icon: Shield,
      title: 'Consultoria Especializada',
      description: 'Consultoria técnica especializada em infraestrutura viária, normas e certificações de qualidade.',
      features: ['Análise Técnica', 'Certificação ISO', 'Gestão de Qualidade', 'Auditoria'],
      color: 'bg-secondary-600'
    }
  ]

  const processes = [
    {
      icon: MapPin,
      title: 'Planejamento',
      description: 'Análise detalhada do terreno e elaboração de projetos técnicos'
    },
    {
      icon: HardHat,
      title: 'Execução',
      description: 'Construção com tecnologia avançada e equipe especializada'
    },
    {
      icon: CheckCircle,
      title: 'Controle de Qualidade',
      description: 'Rigoroso controle de qualidade em todas as etapas'
    },
    {
      icon: Truck,
      title: 'Entrega',
      description: 'Entrega pontual com certificação de qualidade'
    }
  ]

  const benefits = [
    'Tecnologia de ponta em pavimentação',
    'Equipe certificada e experiente',
    'Cumprimento rigoroso de prazos',
    'Garantia de qualidade total',
    'Suporte técnico 24/7',
    'Certificações internacionais'
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
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
            <Settings className="w-4 h-4 mr-2" />
            Nossos Serviços
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Soluções Completas em
            <span className="text-gradient block mt-2">Infraestrutura Viária</span>
          </h2>

          <p className="text-xl text-primary-600 leading-relaxed">
            Oferecemos um portfólio completo de serviços especializados em construção, 
            manutenção e consultoria para projetos rodoviários de qualquer porte e complexidade.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-primary-50 rounded-3xl p-8 h-full border border-primary-100 hover:border-secondary-200 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary-900 ml-4">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-primary-700 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                        <span className="text-primary-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={scrollToContact}
                    className="w-full bg-white text-secondary-700 border-2 border-secondary-600 hover:bg-secondary-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Nosso Processo
            </h3>
            <p className="text-xl text-primary-600">
              Metodologia comprovada para garantir excelência em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-primary-100"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <process.icon className="w-8 h-8 text-secondary-600" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    {process.title}
                  </h4>
                  
                  <p className="text-primary-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>

                {/* Connection Line (except last item) */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary-300 z-10"></div>
                )}

                {/* Step Number */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Por que Escolher a Rodovil?
              </h3>
              
              <p className="text-xl text-secondary-100 leading-relaxed mb-8">
                Nossa experiência e comprometimento com a excelência garantem 
                resultados superiores em todos os projetos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span className="text-secondary-100 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={scrollToContact}
                className="mt-8 bg-white text-secondary-700 hover:bg-accent-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-secondary-200">Suporte Técnico</div>
                    </div>
                    <Zap className="w-8 h-8 text-accent-300" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">ISO 9001</div>
                      <div className="text-secondary-200">Certificação</div>
                    </div>
                    <Shield className="w-8 h-8 text-accent-300" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">15 Dias</div>
                      <div className="text-secondary-200">Prazo Médio</div>
                    </div>
                    <Calendar className="w-8 h-8 text-accent-300" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}