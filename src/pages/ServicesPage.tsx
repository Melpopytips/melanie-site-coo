import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { MethodPrEsi } from '../components/MethodPrEsi';
import { CallToAction } from '../components/CallToAction';

export const ServicesPage = () => {
  const services = [
    {
      title: 'Diagnostic organisationnel',
      description: 'Analyse approfondie de votre organisation pour identifier les opportunités d\'amélioration et les points de friction qui limitent votre potentiel de croissance.',
      deliverables: 'Un rapport détaillé avec cartographie des processus existants, identification des goulots d\'étranglement et recommandations d\'actions prioritaires.',
      result: 'Une vision claire des leviers d\'amélioration et une feuille de route d\'optimisation sur mesure.'
    },
    {
      title: 'Refonte des processus',
      description: 'Conception et mise en œuvre de processus optimisés qui fluidifient les opérations et éliminent les inefficacités.',
      deliverables: 'Des processus standardisés documentés, des outils de travail adaptés, et la formation de vos équipes à ces nouvelles méthodes.',
      result: 'Réduction significative des délais, amélioration de la qualité, et augmentation de la satisfaction client et employé.'
    },
    {
      title: 'Mise en place de tableaux de bord',
      description: 'Conception et déploiement d\'indicateurs clés de performance et de tableaux de bord pour piloter efficacement votre activité.',
      deliverables: 'Un système de reporting personnalisé, des KPIs pertinents et des dashboards en temps réel accessibles par la direction.',
      result: 'Prise de décision facilitée, anticipation des problèmes, et meilleur pilotage stratégique de l\'entreprise.'
    },
    {
      title: 'COO à temps partagé',
      description: 'Bénéficiez de mon expertise de directrice des opérations sans supporter la charge d\'un poste à temps plein.',
      deliverables: 'Un accompagnement régulier, un regard externe expert et l\'implémentation progressive de solutions d\'amélioration.',
      result: 'Une organisation plus performante, des équipes plus efficaces et une entreprise structurée pour la croissance.'
    },
  ];

  const benefitsItems = [
    'Gain de temps significatif pour vos équipes et votre management',
    'Réduction des coûts opérationnels et administratifs',
    'Amélioration de la qualité de service et de la satisfaction client',
    'Visibilité accrue sur la performance de votre entreprise',
    'Équipes plus engagées et plus productives',
    'Structure organisationnelle capable de soutenir votre croissance',
    'Meilleure agilité face aux changements du marché',
    'Réduction des risques opérationnels et financiers'
  ];

  return (
    <div>
      <PageHeader
        title="Mes services"
        subtitle="Des solutions sur mesure adaptées aux besoins spécifiques de votre entreprise"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Solutions proposées" 
            subtitle="Je propose des services flexibles et personnalisés pour répondre précisément à vos enjeux opérationnels"
          />
          
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              deliverables={service.deliverables}
              result={service.result}
              index={index}
            />
          ))}
          
          <div className="mt-16">
            <SectionTitle 
              title="Les bénéfices pour votre entreprise"
              subtitle="Travailler avec moi vous apporte des avantages concrets et mesurables"
            />
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefitsItems.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary-500 mr-3 mt-1 font-bold">✓</div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ma méthode PrÉSi" 
            subtitle="Je m'appuie sur une méthode unique qui a fait ses preuves dans de nombreux contextes"
          />
          
          <MethodPrEsi />
          
          <div className="mt-16">
            <SectionTitle 
              title="Mon approche en 4 étapes"
              subtitle=""
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">1</div>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-center text-secondary-700">Analyse</h3>
                <p className="text-gray-600 text-center">Diagnostic complet de votre organisation pour comprendre vos enjeux spécifiques</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">2</div>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-center text-secondary-700">Conception</h3>
                <p className="text-gray-600 text-center">Élaboration de solutions sur mesure adaptées à vos besoins et contraintes</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">3</div>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-center text-secondary-700">Implémentation</h3>
                <p className="text-gray-600 text-center">Mise en œuvre progressive des solutions avec un accompagnement constant</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">4</div>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-center text-secondary-700">Pérennisation</h3>
                <p className="text-gray-600 text-center">Transfert de compétences et suivi pour garantir des améliorations durables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Prêt à optimiser vos opérations ?"
        subtitle="Contactez-moi pour discuter de vos besoins et définir ensemble la solution la plus adaptée."
        primaryButtonText="Me contacter"
        primaryButtonLink="/contact"
      />
    </div>
  );
};