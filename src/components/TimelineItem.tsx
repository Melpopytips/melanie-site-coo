import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: string;
  index: number;
}

export const TimelineItem = ({ date, title, company, description, index }: TimelineItemProps) => {
  return (
    <motion.div 
      className="mb-8 pl-6 border-l-2 border-primary-500 relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-2"></div>
      <div className="text-primary-600 font-semibold mb-1">{date}</div>
      <h3 className="text-xl font-bold mb-1 text-secondary-700">{title}</h3>
      {company && <p className="text-gray-600 mb-2">{company}</p>}
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};