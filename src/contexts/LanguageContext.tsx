
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contacto',
    
    // Hero section
    'hero.title.book': 'Reserve o Seu',
    'hero.title.success': 'Sucesso',
    'hero.subtitle': 'Marque facilmente os seus serviços de consultoria com a nossa plataforma de reservas online. Processo simples, confirmação instantânea.',
    'hero.cta': 'Reservar Agora',
    'hero.cancellation': 'Cancelamento gratuito até 24h antes',
    
    // Features
    'features.scheduling.title': 'Agendamento Fácil',
    'features.scheduling.desc': 'Marque o seu horário em poucos cliques com o nosso calendário intuitivo.',
    'features.hours.title': 'Horário Flexível',
    'features.hours.desc': 'Disponível de segunda a sexta, das 9h às 18h para a sua conveniência.',
    'features.team.title': 'Equipa Especializada',
    'features.team.desc': 'Profissionais experientes prontos para o ajudar a atingir os seus objetivos.',
    
    // Services
    'services.title': 'Os Nossos Serviços',
    'services.subtitle': 'Escolha o serviço que melhor se adequa às suas necessidades empresariais',
    'services.minutes': 'minutos',
    'services.book': 'Reservar',
    'services.consultation': 'Consultoria Empresarial',
    'services.consultation.desc': 'Análise completa da sua empresa e estratégias de crescimento personalizadas.',
    'services.strategy': 'Planeamento Estratégico',
    'services.strategy.desc': 'Desenvolvimento de planos estratégicos para o crescimento sustentável do seu negócio.',
    'services.review': 'Revisão de Negócio',
    'services.review.desc': 'Avaliação detalhada dos processos e identificação de oportunidades de melhoria.',
    'services.workshop': 'Workshop de Liderança',
    'services.workshop.desc': 'Sessão intensiva para desenvolver competências de liderança e gestão de equipas.',
    
    // Booking form
    'booking.datetime.title': 'Selecionar Data e Hora',
    'booking.date.label': 'Escolher Data',
    'booking.date.placeholder': 'Selecione uma data',
    'booking.time.label': 'Escolher Hora',
    'booking.time.placeholder': 'Selecione um horário',
    'booking.info.title': 'As Suas Informações',
    'booking.firstName': 'Primeiro Nome',
    'booking.lastName': 'Último Nome',
    'booking.email': 'Email',
    'booking.phone': 'Telemóvel',
    'booking.additional.title': 'Informações Adicionais',
    'booking.message.label': 'Conte-nos sobre os seus objetivos ou requisitos específicos',
    'booking.message.placeholder': 'Partilhe detalhes adicionais que nos ajudem a preparar a sua sessão...',
    'booking.ready.title': 'Pronto para reservar?',
    'booking.ready.subtitle': 'Receberá um email de confirmação em breve.',
    'booking.submitting': 'A processar...',
    'booking.missing.title': 'Informação em Falta',
    'booking.missing.datetime': 'Por favor, selecione uma data e hora para o seu compromisso.',
    'booking.missing.fields': 'Por favor, preencha todos os campos obrigatórios.',
    'booking.confirmed.title': 'Reserva Confirmada!',
    'booking.confirmed.desc': 'O seu compromisso {service} foi agendado para {date} às {time}.',
    'booking.confirmation.title': 'Reserva Confirmada!',
    'booking.confirmation.email': 'Receberá um email com a confirmação do seu compromisso.',
    'booking.confirmation.details': 'Detalhes da Reserva',
    'booking.confirmation.service': 'Serviço',
    'booking.confirmation.date': 'Data',
    'booking.confirmation.time': 'Hora',
    'booking.confirmation.client': 'Cliente',
    'booking.confirmation.calendar': 'Adicionar ao Google Calendar',
    'booking.confirmation.close': 'Fechar',
    
    // About page
    'about.title': 'Sobre a BookPro Agency',
    'about.mission.title': 'A Nossa Missão',
    'about.mission.desc': 'Ajudamos empresas a crescer através de consultoria especializada e estratégias personalizadas.',
    'about.team.title': 'A Nossa Equipa',
    'about.team.desc': 'Profissionais experientes com mais de 10 anos de experiência em consultoria empresarial.',
    'about.values.title': 'Os Nossos Valores',
    'about.values.desc': 'Comprometemo-nos com a excelência, inovação e o sucesso dos nossos clientes.',
    
    // Contact page
    'contact.title': 'Entre em Contacto',
    'contact.subtitle': 'Estamos aqui para o ajudar. Entre em contacto connosco!',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.info.title': 'Informações de Contacto',
    'contact.info.address': 'Morada',
    'contact.info.phone': 'Telefone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horário de Funcionamento',
    'contact.info.hours.weekdays': 'Segunda a Sexta: 9:00 - 18:00',
    'contact.info.hours.weekend': 'Fim de semana: Fechado',
    
    // Footer
    'footer.tagline': 'O seu parceiro de confiança para o crescimento empresarial',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.support': 'Suporte',
    
    // General
    'back': 'Voltar'
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title.book': 'Book Your',
    'hero.title.success': 'Success',
    'hero.subtitle': 'Easily schedule your consulting services with our online booking platform. Simple process, instant confirmation.',
    'hero.cta': 'Book Now',
    'hero.cancellation': 'Free cancellation up to 24h before',
    
    // Features
    'features.scheduling.title': 'Easy Scheduling',
    'features.scheduling.desc': 'Book your appointment in just a few clicks with our intuitive calendar.',
    'features.hours.title': 'Flexible Hours',
    'features.hours.desc': 'Available Monday to Friday, 9 AM to 6 PM for your convenience.',
    'features.team.title': 'Expert Team',
    'features.team.desc': 'Experienced professionals ready to help you achieve your goals.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Choose the service that best fits your business needs',
    'services.minutes': 'minutes',
    'services.book': 'Book',
    'services.consultation': 'Business Consultation',
    'services.consultation.desc': 'Complete analysis of your business and personalized growth strategies.',
    'services.strategy': 'Strategic Planning',
    'services.strategy.desc': 'Development of strategic plans for sustainable business growth.',
    'services.review': 'Business Review',
    'services.review.desc': 'Detailed evaluation of processes and identification of improvement opportunities.',
    'services.workshop': 'Leadership Workshop',
    'services.workshop.desc': 'Intensive session to develop leadership skills and team management.',
    
    // Booking form
    'booking.datetime.title': 'Select Date & Time',
    'booking.date.label': 'Choose Date',
    'booking.date.placeholder': 'Pick a date',
    'booking.time.label': 'Choose Time',
    'booking.time.placeholder': 'Select a time slot',
    'booking.info.title': 'Your Information',
    'booking.firstName': 'First Name',
    'booking.lastName': 'Last Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone Number',
    'booking.additional.title': 'Additional Information',
    'booking.message.label': 'Tell us about your goals or any specific requirements',
    'booking.message.placeholder': 'Share any additional details that will help us prepare for your session...',
    'booking.ready.title': 'Ready to book?',
    'booking.ready.subtitle': 'You will receive a confirmation email shortly.',
    'booking.submitting': 'Booking...',
    'booking.missing.title': 'Missing Information',
    'booking.missing.datetime': 'Please select a date and time for your appointment.',
    'booking.missing.fields': 'Please fill in all required fields.',
    'booking.confirmed.title': 'Booking Confirmed!',
    'booking.confirmed.desc': 'Your {service} appointment has been scheduled for {date} at {time}.',
    'booking.confirmation.title': 'Booking Confirmed!',
    'booking.confirmation.email': 'You will receive an email with your appointment confirmation.',
    'booking.confirmation.details': 'Booking Details',
    'booking.confirmation.service': 'Service',
    'booking.confirmation.date': 'Date',
    'booking.confirmation.time': 'Time',
    'booking.confirmation.client': 'Client',
    'booking.confirmation.calendar': 'Add to Google Calendar',
    'booking.confirmation.close': 'Close',
    
    // About page
    'about.title': 'About BookPro Agency',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'We help businesses grow through specialized consulting and personalized strategies.',
    'about.team.title': 'Our Team',
    'about.team.desc': 'Experienced professionals with over 10 years of experience in business consulting.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'We are committed to excellence, innovation and the success of our clients.',
    
    // Contact page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are here to help. Get in touch with us!',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.weekdays': 'Monday to Friday: 9:00 AM - 6:00 PM',
    'contact.info.hours.weekend': 'Weekend: Closed',
    
    // Footer
    'footer.tagline': 'Your trusted partner for business growth',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.support': 'Support',
    
    // General
    'back': 'Back'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const t = (key: string, params?: Record<string, string>) => {
    let translation = translations[language][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }
    
    return translation;
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
