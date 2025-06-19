
import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BookingForm from '@/components/BookingForm';
import ServiceSelector from '@/components/ServiceSelector';

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

const services: Service[] = [
  {
    id: 'consultation',
    name: 'Initial Consultation',
    duration: 60,
    price: 135,
    description: 'Comprehensive assessment and strategy planning session'
  },
  {
    id: 'strategy',
    name: 'Strategy Session',
    duration: 90,
    price: 225,
    description: 'Deep-dive strategic planning and roadmap development'
  },
  {
    id: 'review',
    name: 'Progress Review',
    duration: 45,
    price: 110,
    description: 'Review current progress and adjust strategies'
  },
  {
    id: 'workshop',
    name: 'Team Workshop',
    duration: 120,
    price: 360,
    description: 'Interactive workshop for teams and groups'
  }
];

const Index = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const handleBackToServices = () => {
    setShowBookingForm(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">BookPro Agency</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {!showBookingForm ? (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Book Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {" "}Success
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Schedule professional consultations and strategy sessions with our expert team. 
                  Transform your business with personalized guidance and proven methodologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Free cancellation up to 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </section>

          {/* Features */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-indigo-100 hover:border-indigo-200">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle>Easy Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Book appointments in just a few clicks with our intuitive calendar system
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-purple-100 hover:border-purple-200">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Flexible Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Available slots from 9 AM to 6 PM, Monday through Friday
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-emerald-100 hover:border-emerald-200">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle>Expert Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Work with certified professionals with years of industry experience
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Service</h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Select the perfect service for your needs and book your appointment today
                </p>
              </div>
              <ServiceSelector services={services} onServiceSelect={handleServiceSelect} />
            </div>
          </section>
        </>
      ) : (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={handleBackToServices}
              className="mb-6 hover:bg-gray-100"
            >
              ← Back to Services
            </Button>
            <BookingForm service={selectedService!} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-6 w-6" />
            <span className="text-xl font-semibold">BookPro Agency</span>
          </div>
          <p className="text-gray-400 mb-4">Professional booking solutions for modern agencies</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
