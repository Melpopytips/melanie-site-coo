import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  title: string;
  description: string;
  index: number;
}

export const ExpertiseCard = ({ title, description, index }: ExpertiseCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 h-full transition-all hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-secondary-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};