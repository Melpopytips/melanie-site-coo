import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { StatCard } from '../components/StatCard';
import { MethodPrEsi } from '../components/MethodPrEsi';

export const ProfilePage = () => {
  const stats = [
    { icon: '📈', value: '+50%', label: 'Augmentation moyenne de la productivité' },
    { icon: '⏱️', value: '15+', label: 'Années d\'expérience opérationnelle' },
    { icon: '👥', value: '100%', label: 'Satisfaction des collaborateurs' },
    { icon: '⚙️', value: '50+', label: 'Processus optimisés' },
  ];

  return (
    <div>
      <PageHeader
        title="Mon Profil"
        subtitle="Découvrez qui je suis et ce qui me passionne dans mon métier"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
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
              <p className="text-lg mb-6 text-gray-600">
                Ancienne Sous-Directrice et Cheffe des Opérations dans le secteur immobilier suisse, je mets maintenant mon expertise au service des entrepreneurs qui souhaitent structurer leur croissance et améliorer leur efficacité opérationnelle.
              </p>
              <p className="text-lg text-gray-600">
                Ma double expertise en finance et en transformation digitale me permet d'apporter une vision unique et complète à mes clients, en combinant rigueur analytique et innovation technologique.
              </p>
            </motion.div>
          </div>

          <SectionTitle 
            title="Mes résultats"
            subtitle="Des résultats concrets qui témoignent de l'efficacité de mes interventions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          
          <SectionTitle 
            title="Ma méthode PrÉSi"
            subtitle="Une approche unique qui garantit des résultats concrets pour votre entreprise"
          />
          
          <MethodPrEsi />
          
          <div className="mt-16">
            <SectionTitle 
              title="Ma vision"
              subtitle=""
              centered={false}
            />
            
            <div className="bg-secondary-50 rounded-lg p-8 border-l-4 border-primary-500">
              <p className="text-lg text-gray-600 mb-6">
                Je crois fermement que l'efficacité opérationnelle est le fondement d'une entreprise prospère. Lorsque vos processus sont optimisés, vos équipes peuvent se concentrer sur ce qui compte vraiment : l'innovation, le service client et la croissance stratégique.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ma mission est de vous aider à libérer le plein potentiel de votre organisation en éliminant les inefficacités qui freinent votre performance. Chaque entreprise est unique, c'est pourquoi j'adapte mes solutions à votre contexte spécifique, à votre culture et à vos objectifs.
              </p>
              <p className="text-lg text-gray-600">
                Je m'engage à vous transmettre mon expertise et mes connaissances, afin que votre équipe puisse maintenir et améliorer les changements mis en place après mon intervention. Mon succès se mesure par votre capacité à pérenniser les améliorations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};