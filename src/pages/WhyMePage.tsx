import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { TestimonialCard } from '../components/TestimonialCard';
import { motion } from 'framer-motion';
import { CallToAction } from '../components/CallToAction';

export const WhyMePage = () => {
  const strengths = [
    {
      title: 'Double expertise Finance & IT',
      description: 'Je combine une solide maîtrise des finances avec des compétences techniques en transformation digitale, une combinaison rare et précieuse pour mener des projets de modernisation.',
      icon: '💹',
    },
    {
      title: 'Vision stratégique',
      description: 'Je vois au-delà des opérations quotidiennes pour identifier les leviers de croissance à long terme et aligner vos processus avec votre vision d\'entreprise.',
      icon: '🔭',
    },
    {
      title: 'Approche sur mesure',
      description: 'Chaque entreprise est unique. J\'adapte mes méthodes et solutions à votre culture, vos défis spécifiques et vos objectifs stratégiques.',
      icon: '✂️',
    },
    {
      title: 'Expérience opérationnelle concrète',
      description: 'Mon parcours en tant que COO me donne une compréhension pratique des défis quotidiens auxquels sont confrontés les dirigeants et leurs équipes.',
      icon: '🛠️',
    },
    {
      title: 'Transfert de compétences',
      description: 'Je ne me contente pas d\'implémenter des solutions, je forme vos équipes pour qu\'elles puissent maintenir et faire évoluer les améliorations sur le long terme.',
      icon: '🎓',
    },
    {
      title: 'Résultats mesurables',
      description: 'Je m\'engage sur des objectifs clairs et mesurables, avec un focus sur le ROI de chaque intervention et la performance globale de votre organisation.',
      icon: '📊',
    },
  ];

  const testimonials = [
    {
      quote: "Mélanie a complètement transformé notre manière de travailler. En quelques mois, elle a identifié et éliminé les goulets d'étranglement qui ralentissaient notre croissance depuis des années. L'impact sur notre productivité a été immédiat et spectaculaire.",
      author: "Jean-Pierre Martin",
      position: "Directeur Général, PME secteur service",
    },
    {
      quote: "Le tableau de bord mis en place par Mélanie nous a enfin donné une visibilité claire sur nos performances. Nous prenons maintenant des décisions basées sur des données fiables plutôt que sur des intuitions. Un changement fondamental dans notre approche managériale.",
      author: "Sophie Durand",
      position: "Fondatrice, Startup Fintech",
    },
    {
      quote: "Ce qui distingue Mélanie, c'est sa capacité à comprendre rapidement les enjeux spécifiques de notre secteur et à proposer des solutions vraiment adaptées à notre contexte. Son approche est à la fois rigoureuse et pragmatique, avec un focus constant sur les résultats.",
      author: "Thomas Leclerc",
      position: "Directeur des Opérations, Cabinet de conseil",
    },
  ];

  const values = [
    {
      name: 'Excellence',
      description: 'Je vise l\'excellence dans chaque intervention, avec un niveau d\'exigence élevé pour garantir des résultats optimaux.',
    },
    {
      name: 'Intégrité',
      description: 'J\'agis avec honnêteté et transparence, en plaçant toujours l\'intérêt de mes clients au centre de mes préoccupations.',
    },
    {
      name: 'Innovation',
      description: 'Je recherche constamment les meilleures pratiques et solutions innovantes pour répondre aux défis de mes clients.',
    },
    {
      name: 'Engagement',
      description: 'Je m\'investis pleinement dans chaque projet, avec une volonté ferme d\'atteindre les objectifs fixés et de créer de la valeur.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Pourquoi me choisir?"
        subtitle="Ce qui fait la différence dans mon approche"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ce qui me distingue" 
            subtitle="Collaborer avec moi, c'est bénéficier d'une expertise unique qui combine vision stratégique et opérationnelle pour transformer durablement votre entreprise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 mb-4">
                  <span className="text-3xl">{strength.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </motion.div>
            ))}
          </div>
          
          <SectionTitle 
            title="Mes valeurs" 
            subtitle="Les principes qui guident mon travail et mes interactions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-secondary-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
          
          <SectionTitle 
            title="Ce que disent mes clients" 
            subtitle="Des témoignages concrets sur l'impact de mes interventions"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Convaincu(e)?"
        subtitle="Travaillons ensemble pour développer le plein potentiel de votre organisation"
        primaryButtonText="Me contacter"
        primaryButtonLink="/contact"
        secondaryButtonText="Voir mes services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};