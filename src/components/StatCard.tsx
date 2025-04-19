import { motion } from 'framer-motion';

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary-100">
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="text-4xl font-bold text-primary-500 mb-2">{value}</div>
      <div className="text-gray-500 text-lg">{label}</div>
    </motion.div>
  );
};