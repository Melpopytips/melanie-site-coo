import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string;
  result: string;
  index: number;
}

export const ServiceCard = ({ title, description, deliverables, result, index }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-8 mb-6 transition-all hover:shadow-lg border-l-4 border-primary-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-secondary-700">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      
      <div className="mb-4">
        <div className="flex items-start mb-2">
          <div className="text-primary-500 font-bold mr-2">✓</div>
          <div>
            <strong className="text-secondary-600">Ce que vous obtenez :</strong> {deliverables}
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-start">
          <div className="text-primary-500 font-bold mr-2">✓</div>
          <div>
            <strong className="text-secondary-600">Résultat :</strong> {result}
          </div>
        </div>
      </div>
    </motion.div>
  );
};