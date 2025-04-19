import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contactez-moi"
        subtitle="Discutons de vos besoins et de la manière dont je peux vous aider"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <SectionTitle 
                title="Envoyez-moi un message" 
                subtitle="Vous souhaitez transformer votre entreprise et améliorer sa performance opérationnelle ? Je serais ravie d'échanger avec vous sur vos besoins spécifiques."
                centered={false}
              />
              
              <ContactForm />
            </div>
            
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Mes coordonnées" 
                subtitle=""
                centered={false}
              />
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-start mb-6">
                  <Mail className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Email</h3>
                    <a href="mailto:melbeperf@gmail.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                      melbeperf@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Phone className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/33609222919" className="text-primary-600 hover:text-primary-800 transition-colors">
                      +33 6 09 22 29 19
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Linkedin className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">LinkedIn</h3>
                    <a 
                      href="https://ch.linkedin.com/in/melanie-chenavard-8118398b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <MapPin className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-600">
                      Suisse romande et France (Haute-Savoie)<br />
                      Consultations à distance disponibles
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Disponibilité</h3>
                    <p className="text-gray-600">
                      Du lundi au vendredi<br />
                      8h30 - 18h00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-700 rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Comment je peux vous aider</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-primary-400 mr-3">✓</div>
                    <p>Diagnostic de votre organisation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-400 mr-3">✓</div>
                    <p>Optimisation de vos processus</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-400 mr-3">✓</div>
                    <p>Mise en place de tableaux de bord</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-400 mr-3">✓</div>
                    <p>Direction opérationnelle à temps partagé</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-400 mr-3">✓</div>
                    <p>Formation et accompagnement de vos équipes</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};