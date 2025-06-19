
import { Calendar, Users, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <Link to="/" className="text-2xl font-bold text-gray-900">BookPro Agency</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Serviços</Link>
              <Link to="/about" className="text-indigo-600 font-medium">Sobre Nós</Link>
              <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {" "}BookPro Agency
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Somos uma agência especializada em soluções de agendamento profissional, 
              ajudando empresas a transformar a forma como gerem os seus compromissos e consultas.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Construímos relações duradouras baseadas na confiança, inovação e excelência
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-indigo-100 hover:border-indigo-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Eficiência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Otimizamos processos para maximizar a produtividade dos nossos clientes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-purple-100 hover:border-purple-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Colaboração</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trabalhamos em estreita parceria com cada cliente para alcançar objetivos comuns
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-emerald-100 hover:border-emerald-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprometemo-nos com a excelência em todos os aspectos do nosso trabalho
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-2 border-teal-100 hover:border-teal-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Inovação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utilizamos as mais recentes tecnologias para oferecer soluções modernas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">A Nossa Equipa</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Contamos com profissionais certificados e experientes, dedicados a fornecer 
            as melhores soluções de agendamento para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link to="/">Agendar Consulta</Link>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact">Contactar-nos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-6 w-6" />
            <span className="text-xl font-semibold">BookPro Agency</span>
          </div>
          <p className="text-gray-400 mb-4">Soluções profissionais de agendamento para agências modernas</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <Link to="/contact" className="hover:text-white transition-colors">Suporte</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
