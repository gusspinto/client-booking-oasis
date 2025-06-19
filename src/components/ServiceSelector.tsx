
import { Service } from '@/pages/Index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceSelectorProps {
  services: Service[];
  onServiceSelect: (service: Service) => void;
}

const ServiceSelector = ({ services, onServiceSelect }: ServiceSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <Card 
          key={service.id} 
          className="hover:shadow-xl transition-all duration-300 hover-scale border-2 hover:border-indigo-200 cursor-pointer group bg-gradient-to-br from-white to-slate-50"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {service.duration} {t('services.minutes')}
              </div>
              <div className="flex items-center text-lg font-semibold text-gray-900">
                <DollarSign className="h-5 w-5 mr-1" />
                €{service.price}
              </div>
            </div>
            <Button 
              onClick={() => onServiceSelect(service)}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300"
            >
              {t('services.book')}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSelector;
