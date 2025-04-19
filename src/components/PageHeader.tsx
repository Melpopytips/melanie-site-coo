import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

export const PageHeader = ({ title, subtitle, bgColor = 'bg-secondary-600' }: PageHeaderProps) => {
  return (
    <header className={`${bgColor} py-24 mt-14 text-white text-center`}>
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
};