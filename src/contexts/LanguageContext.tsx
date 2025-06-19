
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.services': 'Serviços',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title.book': 'Agende o Seu',
    'hero.title.success': 'Sucesso',
    'hero.subtitle': 'Agende consultas profissionais e sessões de estratégia com a nossa equipa especializada. Transforme o seu negócio com orientação personalizada e metodologias comprovadas.',
    'hero.cta': 'Agendar Agora',
    'hero.cancellation': 'Cancelamento gratuito até 24 horas',
    
    // Features
    'features.scheduling.title': 'Agendamento Fácil',
    'features.scheduling.desc': 'Agende compromissos em poucos cliques com o nosso sistema de calendário intuitivo',
    'features.hours.title': 'Horário Flexível',
    'features.hours.desc': 'Horários disponíveis das 9h às 18h, de segunda a sexta-feira',
    'features.team.title': 'Equipa Especializada',
    'features.team.desc': 'Trabalhe com profissionais certificados com anos de experiência na área',
    
    // Services
    'services.title': 'Escolha o Seu Serviço',
    'services.subtitle': 'Selecione o serviço perfeito para as suas necessidades e agende hoje mesmo',
    'services.consultation': 'Consulta Inicial',
    'services.consultation.desc': 'Avaliação abrangente e sessão de planeamento estratégico',
    'services.strategy': 'Sessão de Estratégia',
    'services.strategy.desc': 'Planeamento estratégico aprofundado e desenvolvimento de roteiro',
    'services.review': 'Revisão de Progresso',
    'services.review.desc': 'Revisão do progresso atual e ajuste de estratégias',
    'services.workshop': 'Workshop de Equipa',
    'services.workshop.desc': 'Workshop interativo para equipas e grupos',
    'services.book': 'Agendar Este Serviço',
    'services.minutes': 'minutos',
    
    // Common
    'back': 'Voltar aos Serviços',
    'footer.tagline': 'Soluções profissionais de agendamento para agências modernas',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.support': 'Suporte'
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title.book': 'Book Your',
    'hero.title.success': 'Success',
    'hero.subtitle': 'Schedule professional consultations and strategy sessions with our expert team. Transform your business with personalized guidance and proven methodologies.',
    'hero.cta': 'Book Now',
    'hero.cancellation': 'Free cancellation up to 24 hours',
    
    // Features
    'features.scheduling.title': 'Easy Scheduling',
    'features.scheduling.desc': 'Book appointments in just a few clicks with our intuitive calendar system',
    'features.hours.title': 'Flexible Hours',
    'features.hours.desc': 'Available slots from 9 AM to 6 PM, Monday through Friday',
    'features.team.title': 'Expert Team',
    'features.team.desc': 'Work with certified professionals with years of industry experience',
    
    // Services
    'services.title': 'Choose Your Service',
    'services.subtitle': 'Select the perfect service for your needs and book your appointment today',
    'services.consultation': 'Initial Consultation',
    'services.consultation.desc': 'Comprehensive assessment and strategy planning session',
    'services.strategy': 'Strategy Session',
    'services.strategy.desc': 'Deep-dive strategic planning and roadmap development',
    'services.review': 'Progress Review',
    'services.review.desc': 'Review current progress and adjust strategies',
    'services.workshop': 'Team Workshop',
    'services.workshop.desc': 'Interactive workshop for teams and groups',
    'services.book': 'Book This Service',
    'services.minutes': 'minutes',
    
    // Common
    'back': 'Back to Services',
    'footer.tagline': 'Professional booking solutions for modern agencies',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.support': 'Contact Support'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
