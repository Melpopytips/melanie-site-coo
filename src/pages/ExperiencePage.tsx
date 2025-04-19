import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { motion } from 'framer-motion';

export const ExperiencePage = () => {
  const experiences = [
    {
      date: 'Décembre 2023 - Présent',
      title: 'Fondatrice & COO Consultante',
      company: '',
      description: 'Accompagnement des entreprises dans leur transformation opérationnelle et digitale.',
    },
    {
      date: 'Janvier 2021 - Février 2023',
      title: 'Sous-Directrice & Cheffe des Opérations',
      company: 'Pilet & Renaud SA - Genève, Suisse',
      description: 'Direction opérationnelle, pilotage des projets IT, automatisation et optimisation des processus.',
    },
    {
      date: 'Septembre 2018 - Mars 2023',
      title: 'Responsable contrôles internes & Adjointe Directeur Finances',
      company: 'Pilet & Renaud - Genève, Suisse',
      description: 'Mise en place du contrôle interne, supervision comptable, développement d\'outils décisionnels.',
    },
    {
      date: '2013 - 2018',
      title: 'Évolution au sein de Pilet & Renaud SA',
      company: '',
      description: 'De Comptable à Adjointe au chef du service comptable puis à des fonctions de direction. Développement d\'expertises en finance, contrôle de gestion et optimisation des processus.',
    },
    {
      date: '2008 - 2013',
      title: 'Expériences en comptabilité et contrôle de gestion',
      company: 'NGL Cleaning Technology SA, Mégevand Gérard SAS, Duret Construction SA',
      description: 'Développement de compétences en automatisation des tâches, analyse financière et optimisation des processus comptables.',
    },
  ];

  const skills = [
    {
      category: 'Gestion opérationnelle',
      items: ['Optimisation des processus', 'Management transversal', 'Conduite du changement', 'Gestion de projet']
    },
    {
      category: 'Finance & Comptabilité',
      items: ['Contrôle de gestion', 'Contrôle interne', 'Reporting financier', 'Budgétisation']
    },
    {
      category: 'Numérique & Outils',
      items: ['ERP & CRM', 'Business Intelligence', 'Automatisation', 'Tableaux de bord']
    },
    {
      category: 'Soft Skills',
      items: ['Leadership', 'Communication', 'Résolution de problèmes', 'Sens de l\'organisation']
    },
  ];

  const formations = [
    {
      date: '2013-2016',
      title: 'Brevet Fédéral de Spécialiste en Finances et Comptabilité',
      institution: 'IFP Gland',
    },
    {
      date: '2008-2010',
      title: 'BTS Comptabilité et gestion',
      institution: 'ECORIS Annecy-Le-Vieux',
    },
    {
      date: '2007-2008',
      title: 'Formation comptable',
      institution: 'EDUCATEL',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Mon expérience professionnelle"
        subtitle="Plus de 15 ans d'expertise progressive en finance, comptabilité et opérations"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Mon parcours" 
            subtitle="Une évolution constante vers l'excellence opérationnelle"
          />
          
          <div className="mb-16">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                index={index}
              />
            ))}
          </div>
          
          <SectionTitle 
            title="Formation" 
            subtitle=""
          />
          
          <div className="mb-16">
            {formations.map((formation, index) => (
              <TimelineItem
                key={index}
                date={formation.date}
                title={formation.title}
                company={formation.institution}
                description=""
                index={index}
              />
            ))}
          </div>
          
          <SectionTitle 
            title="Compétences" 
            subtitle="Mon expertise technique et humaine au service de votre réussite"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={groupIndex}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary-700">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <p className="text-gray-700">{skill}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-secondary-50 rounded-lg p-8 border-l-4 border-primary-500">
            <h3 className="text-2xl font-semibold mb-4 text-secondary-700">Pourquoi cette expérience compte pour vous</h3>
            <p className="text-lg text-gray-600 mb-4">
              Mon parcours professionnel m'a permis de développer une compréhension approfondie des défis opérationnels auxquels sont confrontées les entreprises de toutes tailles.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Ayant moi-même évolué de postes techniques vers des fonctions de direction, j'ai une vision complète des enjeux à tous les niveaux de l'organisation. Cette perspective unique me permet d'identifier rapidement les opportunités d'amélioration et de proposer des solutions pragmatiques et efficaces.
            </p>
            <p className="text-lg text-gray-600">
              Ma double expertise en finance et en transformation digitale est particulièrement précieuse pour les entreprises qui cherchent à optimiser leurs opérations tout en maintenant un contrôle financier rigoureux.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};