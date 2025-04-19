import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CallToAction = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CallToActionProps) => {
  return (
    <section className="bg-primary-500 py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to={primaryButtonLink}
            className="inline-block bg-white text-primary-600 hover:bg-secondary-700 hover:text-white transition-colors px-6 py-3 rounded-md font-semibold"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              to={secondaryButtonLink}
              className="inline-block bg-secondary-700 text-white hover:bg-white hover:text-primary-600 transition-colors px-6 py-3 rounded-md font-semibold"
            >
              {secondaryButtonText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};