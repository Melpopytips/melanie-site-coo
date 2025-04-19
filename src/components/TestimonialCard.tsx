import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  index: number;
}

export const TestimonialCard = ({ quote, author, position, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl text-primary-300 mb-4">"</div>
      <p className="italic mb-6 text-gray-600">{quote}</p>
      <div className="font-semibold text-primary-600">{author}</div>
      <div className="text-gray-500">{position}</div>
    </motion.div>
  );
};