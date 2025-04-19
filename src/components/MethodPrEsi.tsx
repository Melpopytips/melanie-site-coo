import { motion } from 'framer-motion';

export const MethodPrEsi = () => {
  const methods = [
    {
      icon: '🚀',
      title: 'Productivité',
      description: 'Optimiser les ressources et maximiser les résultats pour une performance durable.',
    },
    {
      icon: '⚡',
      title: 'Efficacité',
      description: 'Atteindre vos objectifs avec précision et rapidité, sans gaspillage de ressources.',
    },
    {
      icon: '✨',
      title: 'Simplicité',
      description: 'Créer des solutions claires et accessibles qui éliminent la complexité inutile.',
    },
    {
      icon: '✓',
      title: 'Méthode',
      description: 'Appliquer une approche structurée et rigoureuse pour des résultats prévisibles.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 my-12">
      <h3 className="text-2xl text-center font-bold mb-4 text-secondary-700">Ma méthode PrÉSi</h3>
      <p className="text-center mb-8 text-gray-600">
        Je m'appuie sur quatre valeurs fondamentales qui guident mon approche et garantissent des résultats concrets pour votre entreprise :
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {methods.map((method, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center text-center p-4 transition-all"
            variants={item}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary-100 mb-4">
              <span className="text-4xl">{method.icon}</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-secondary-700">{method.title}</h4>
            <p className="text-gray-600">{method.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};