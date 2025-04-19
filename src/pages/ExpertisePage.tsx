import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { ExpertiseCard } from '../components/ExpertiseCard';
import { motion } from 'framer-motion';

export const ExpertisePage = () => {
  const expertiseAreas = [
    {
      title: 'Organisation d\'entreprise',
      description: 'Structuration des départements, clarification des rôles et responsabilités, optimisation des flux de travail et création d\'une architecture organisationnelle efficace.',
    },
    {
      title: 'Optimisation des processus',
      description: 'Identification des goulots d\'étranglement, conception et implémentation de processus fluides, création de procédures standardisées adaptées à votre réalité opérationnelle.',
    },
    {
      title: 'Tableaux de bord décisionnels',
      description: 'Développement de KPIs pertinents, mise en place d\'outils de Business Intelligence, création de tableaux de bord en temps réel pour faciliter la prise de décision.',
    },
    {
      title: 'Transformation digitale',
      description: 'Sélection et déploiement des outils adaptés, intégration de solutions technologiques, automatisation des tâches répétitives pour libérer du temps à vos équipes.',
    },
    {
      title: 'Finance et comptabilité',
      description: 'Structuration des services financiers, mise en place de contrôles internes, optimisation de la fonction finance pour en faire un réel partenaire stratégique.',
    },
    {
      title: 'Management opérationnel',
      description: 'Leadership transversal, conduite du changement, accompagnement des équipes vers l\'excellence opérationnelle et la culture de la performance.',
    },
  ];

  const approaches = [
    {
      title: 'Analyse systémique',
      description: 'Comprendre l\'ensemble de votre organisation pour identifier les interactions entre les différents services et processus.',
    },
    {
      title: 'Approche pragmatique',
      description: 'Proposer des solutions concrètes et applicables rapidement, adaptées à votre réalité opérationnelle et à vos contraintes.',
    },
    {
      title: 'Vision à long terme',
      description: 'Concevoir des solutions durables qui évoluent avec votre entreprise et soutiennent vos objectifs stratégiques futurs.',
    },
    {
      title: 'Transfert de compétences',
      description: 'Former vos équipes aux nouvelles méthodes et outils pour garantir l\'autonomie et la pérennité des améliorations.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Mes domaines d'expertise"
        subtitle="Découvrez mes compétences et mon approche pour transformer votre entreprise"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Mes compétences clés" 
            subtitle="En tant que COO consultante, je combine une vision stratégique à long terme avec une capacité d'exécution opérationnelle précise. Voici les domaines dans lesquels j'excelle :"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                title={area.title}
                description={area.description}
                index={index}
              />
            ))}
          </div>
          
          <SectionTitle 
            title="Mon approche" 
            subtitle="Je m'appuie sur une méthodologie éprouvée qui garantit des résultats tangibles et durables"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16">
            <SectionTitle 
              title="Industries servies"
              subtitle="Mon expertise s'applique à divers secteurs d'activité"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-700">Immobilier</h3>
                <p className="text-gray-600">Agences, promoteurs et gestionnaires immobiliers</p>
              </motion.div>
              
              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-700">Services professionnels</h3>
                <p className="text-gray-600">Cabinets de conseil, études d'avocats, experts-comptables</p>
              </motion.div>
              
              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-700">Startups & PME</h3>
                <p className="text-gray-600">Entreprises en croissance de tous secteurs</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};