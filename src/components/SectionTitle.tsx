interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightText?: boolean;
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  lightText = false 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightText ? 'text-white' : 'text-secondary-700'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${lightText ? 'text-gray-300' : 'text-gray-600'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};