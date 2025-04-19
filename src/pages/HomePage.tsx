import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MethodPrEsi } from '../components/MethodPrEsi';
import { StatCard } from '../components/StatCard';
import { SectionTitle } from '../components/SectionTitle';
import { ExpertiseCard } from '../components/ExpertiseCard';
import { CallToAction } from '../components/CallToAction';

export const HomePage = () => {
  const stats = [
    { icon: '📈', value: '+50%', label: 'Augmentation moyenne de la productivité' },
    { icon: '⏱️', value: '15+', label: 'Années d\'expérience opérationnelle' },
    { icon: '👥', value: '100%', label: 'Satisfaction des collaborateurs' },
    { icon: '⚙️', value: '50+', label: 'Processus optimisés' },
  ];

  const expertiseAreas = [
    {
      title: 'Organisation d\'entreprise',
      description: 'Structuration des départements, clarification des rôles et responsabilités, optimisation des flux de travail.',
    },
    {
      title: 'Optimisation des processus',
      description: 'Identification des goulots d\'étranglement, conception et implémentation de processus fluides, création de procédures standardisées.',
    },
    {
      title: 'Tableaux de bord décisionnels',
      description: 'Développement de KPIs pertinents, mise en place d\'outils de Business Intelligence, création de tableaux de bord en temps réel.',
    },
    {
      title: 'Transformation digitale',
      description: 'Sélection et déploiement des outils adaptés, intégration de solutions technologiques, automatisation des tâches répétitives.',
    },
    {
      title: 'Finance et comptabilité',
      description: 'Structuration des services financiers, mise en place de contrôles internes, optimisation de la fonction finance.',
    },
    {
      title: 'Management opérationnel',
      description: 'Leadership transversal, conduite du changement, accompagnement des équipes vers l\'excellence opérationnelle.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary-600 pt-40 pb-20 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mélanie Chenavard
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experte en Organisation, Process et Productivité | Votre COO Externe
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md mr-4 transition-colors"
            >
              Me contacter
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-secondary-700 font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Mes services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/melanie-profile.png" 
                alt="Mélanie Chenavard" 
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">
                Transformez votre entreprise avec une experte opérationnelle
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                Je suis Mélanie Chenavard, spécialiste en optimisation des processus d'entreprise avec plus de 15 ans d'expérience en gestion, comptabilité et transformation numérique. Mon objectif est de vous aider à décupler le potentiel de votre entreprise grâce à une approche stratégique et opérationnelle.
              </p>
              <p className="text-lg text-gray-600">
                Ancienne Sous-Directrice et Cheffe des Opérations dans le secteur immobilier suisse, je mets maintenant mon expertise au service des entrepreneurs qui souhaitent structurer leur croissance et améliorer leur efficacité opérationnelle.
              </p>
              <div className="mt-8">
                <Link
                  to="/profile"
                  className="text-primary-600 hover:text-primary-800 font-semibold inline-flex items-center transition-colors"
                >
                  En savoir plus sur mon profil
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Method PrÉSi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ma méthode pour votre succès" 
            subtitle="Découvrez ma méthode PrÉSi, l'approche unique qui guide mon travail et garantit des résultats concrets pour votre entreprise."
          />
          <MethodPrEsi />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Mes domaines d'expertise" 
            subtitle="En tant que COO consultante, je combine une vision stratégique à long terme avec une capacité d'exécution opérationnelle précise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.slice(0, 3).map((area, index) => (
              <ExpertiseCard
                key={index}
                title={area.title}
                description={area.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/expertise"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Voir tous mes domaines d'expertise
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToAction
        title="Prêt à transformer votre entreprise ?"
        subtitle="Ensemble, libérons le plein potentiel de votre organisation et boostons vos performances."
        primaryButtonText="Me contacter"
        primaryButtonLink="/contact"
        secondaryButtonText="Découvrir mes services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};