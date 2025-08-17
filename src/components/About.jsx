import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, MapPin, Clock, Shield, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada projeto é executado com máxima precisão técnica e atenção aos detalhes.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados com vasta experiência em infraestrutura.'
    },
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Seguimos os mais rigorosos padrões de qualidade e certificações internacionais.'
    },
    {
      icon: TrendingUp,
      title: 'Inovação Contínua',
      description: 'Investimos constantemente em novas tecnologias e metodologias de construção.'
    }
  ]

  const achievements = [
    {
      icon: MapPin,
      number: '500+',
      label: 'Quilômetros Construídos',
      description: 'Extensão total de rodovias entregues'
    },
    {
      icon: Clock,
      number: '20+',
      label: 'Anos de Experiência',
      description: 'Décadas construindo o futuro'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Projetos Entregues',
      description: 'Taxa de sucesso em todos os projetos'
    },
    {
      icon: Zap,
      number: '15+',
      label: 'Estados Atendidos',
      description: 'Presença nacional consolidada'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
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
            <Award className="w-4 h-4 mr-2" />
            Sobre a Rodovil
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Construindo o
            <span className="text-gradient block mt-2">Futuro das Rodovias</span>
          </h2>

          <p className="text-xl text-primary-600 leading-relaxed">
            Com mais de duas décadas de experiência, a Rodovil é líder nacional em construção 
            de rodovias, combinando expertise técnica, inovação tecnológica e compromisso 
            inabalável com a qualidade e segurança.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary-900">
                Nossa História
              </h3>
              
              <p className="text-lg text-primary-700 leading-relaxed">
                Fundada com a visão de transformar a infraestrutura viária brasileira, 
                a Rodovil nasceu da paixão por construir conexões que movem o país. 
                Começamos como uma pequena empresa regional e crescemos para nos tornar 
                uma das principais construtoras de rodovias do Brasil.
              </p>

              <p className="text-lg text-primary-700 leading-relaxed">
                Nossa trajetória é marcada por projetos desafiadores, soluções inovadoras 
                e um compromisso inabalável com a excelência. Cada quilômetro construído 
                representa nossa dedicação em conectar pessoas, facilitar o comércio e 
                impulsionar o desenvolvimento econômico nacional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-primary-700 font-medium">Km Construídos</div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">100+</div>
                <div className="text-primary-700 font-medium">Projetos Entregues</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-4">
                    <Target className="w-12 h-12 text-secondary-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900 mb-2">
                    Nossa Missão
                  </h4>
                  <p className="text-primary-600 leading-relaxed">
                    Construir infraestrutura viária de excelência que conecte pessoas, 
                    promova desenvolvimento sustentável e contribua para o progresso do Brasil.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-xl p-4 text-center">
                    <Shield className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-primary-700">
                      Segurança Total
                    </div>
                  </div>
                  <div className="bg-accent-50 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-primary-700">
                      Tecnologia Avançada
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-accent-500 text-white p-4 rounded-2xl shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-primary-900 text-center mb-12">
            Nossos Valores
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100 h-full flex flex-col"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex-shrink-0 mb-4">
                    <div className="inline-flex p-3 bg-secondary-100 rounded-2xl group-hover:bg-secondary-600 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-primary-600 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-primary-100"
        >
          <h3 className="text-3xl font-bold text-primary-900 text-center mb-12">
            Nossos Números
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-4 group-hover:bg-secondary-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <achievement.icon className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-2"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>
                
                <div className="text-lg font-semibold text-primary-900 mb-1">
                  {achievement.label}
                </div>
                
                <div className="text-primary-600 text-sm">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}