import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Play, Menu, X, ChevronDown } from 'lucide-react';
import { PortfolioModal } from '@/components/ui/modal';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{ client: string; description: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const portfolioProjects = [
    {
      client: 'CASA DA SUSPENSÃO',
      category: 'Serviços Automotivos',
      image: 'https://swift-character-fcf.notion.site/image/attachment%3A5ccb5a70-f638-4d43-80a6-19db123b7dbe%3AIMG_6004.jpeg?id=24d51d14-517f-808d-9ef1-dfc159772eae&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=520&userId=&cache=v2',
      description: 'Produção audiovisual para empresa especializada em serviços automotivos, focando na qualidade e profissionalismo dos serviços oferecidos.'
    },
    {
      client: 'TECNOCAR',
      category: 'Tecnologia Automotiva',
      image: 'https://swift-character-fcf.notion.site/image/attachment%3Ad827d851-f35a-4c5d-b38e-e2fa94440c41%3A88380948-bb61-48e2-97d7-8bda345bf245.jpeg?id=24d51d14-517f-8036-8f86-faeec14749d2&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=520&userId=&cache=v2',
      description: 'Conteúdo dinâmico para empresa de tecnologia automotiva, destacando inovação e modernidade no setor.'
    },
    {
      client: 'IMPÉRIO DO AÇAÍ',
      category: 'Alimentação Saudável',
      image: 'https://swift-character-fcf.notion.site/image/attachment%3A22be7a59-58ec-44df-bb4e-1afb6ce15ba3%3AIMG_6434.jpeg?id=24d51d14-517f-8089-a96b-d897863385b3&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=520&userId=&cache=v2',
      description: 'Vídeos promocionais para rede de açaí, enfatizando produtos saudáveis e naturais.'
    },
    {
      client: 'ACES',
      category: 'Educação e Treinamento',
      image: 'https://swift-character-fcf.notion.site/image/attachment%3A84b3ce77-dd47-4193-a60d-9332466551f3%3AIMG_6431.jpeg?id=24d51d14-517f-80f2-b56f-c8deb60aeb74&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=520&userId=&cache=v2',
      description: 'Material audiovisual educacional para instituição de ensino, promovendo excelência em educação.'
    },
    {
      client: 'EXTENSA MÓVEIS',
      category: 'Design de Interiores',
      image: 'https://swift-character-fcf.notion.site/image/attachment%3A19662d79-f129-4ac4-a488-3a0a0fb4e29d%3AIMG_6428.jpeg?id=24d51d14-517f-80fd-894f-eb1d1b3e9d81&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=520&userId=&cache=v2',
      description: 'Showcase de produtos e ambientes para loja de móveis, destacando design e funcionalidade.'
    }
  ];

  const openModal = (project: { client: string; description: string }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    alert('Formulário enviado! Em uma implementação real, isso seria processado pelo backend.');
  };

  return (
    <div className="bg-white text-notion-text">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-notion-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-semibold text-notion-text hover:text-black transition-colors"
              data-testid="link-home"
            >
              Vinicius | Videomaker
            </button>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-notion-secondary hover:text-notion-text transition-colors font-medium"
                data-testid="link-portfolio"
              >
                Portfólio
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-notion-secondary hover:text-notion-text transition-colors font-medium"
                data-testid="link-contact"
              >
                Contato
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-notion-border pt-4" data-testid="mobile-menu">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block py-2 text-notion-secondary hover:text-notion-text transition-colors w-full text-left"
              >
                Portfólio
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="block py-2 text-notion-secondary hover:text-notion-text transition-colors w-full text-left"
              >
                Contato
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-notion-border">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src="https://swift-character-fcf.notion.site/image/attachment%3Aa19d0edd-91cd-42e5-8653-f2632ed7cc69%3A7D22A1D0-B212-4BE6-AD6A-75897CEEA190.png?id=23351d14-517f-807b-9f56-f4c5e6e88592&table=block&spaceId=1cb51d14-517f-81cc-af2d-000351e8f208&width=250&userId=&cache=v2"
                  alt="Vinicius Profile"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-notion-border"
                  data-testid="img-profile"
                />
              </div>
              
              {/* Profile Content */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-notion-text mb-4" data-testid="text-hero-title">
                  Vinicius | Videomaker
                </h1>
                <p className="text-lg text-notion-secondary leading-relaxed mb-6" data-testid="text-hero-description">
                  Profissional de audiovisual especializado em conteúdos dinâmicos e envolventes, unindo técnica e storytelling para prender a atenção e gerar conexão
                </p>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="inline-flex items-center px-6 py-3 bg-notion-text text-white rounded-lg hover:bg-black transition-colors font-medium"
                  data-testid="button-view-portfolio"
                >
                  Ver Portfólio
                  <ChevronDown className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 notion-gray bg-[#ffffff] pt-[0px] pb-[0px]">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Header */}
          <div className="mb-12">
            <div className="bg-black rounded-2xl py-12 px-8 text-center shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide" data-testid="text-portfolio-title">
                PORTFÓLIO
              </h2>
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="portfolio-card bg-white rounded-2xl overflow-hidden shadow-sm border border-notion-border transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => openModal({ client: project.client, description: project.description })}
                data-testid={`card-project-${index}`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.client} Project`}
                    className="w-full h-48 object-cover"
                    data-testid={`img-project-${index}`}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-notion-text" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-notion-text text-lg" data-testid={`text-project-title-${index}`}>
                    {project.client}
                  </h3>
                  <p className="text-notion-secondary text-sm mt-2" data-testid={`text-project-category-${index}`}>
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 notion-gray bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          {/* Contact Header */}
          <div className="mb-12">
            <div className="bg-black rounded-2xl py-12 px-8 text-center shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide" data-testid="text-contact-title">
                CONTATO
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-notion-border">
              <h3 className="text-xl font-semibold text-notion-text mb-6" data-testid="text-contact-info-title">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-notion-secondary" />
                  </div>
                  <div>
                    <p className="text-notion-secondary text-sm">E-mail</p>
                    <a
                      href="mailto:euvininascimento1@icloud.com"
                      className="text-notion-text font-medium hover:text-black transition-colors"
                      data-testid="link-email"
                    >
                      euvininascimento1@icloud.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-notion-secondary" />
                  </div>
                  <div>
                    <p className="text-notion-secondary text-sm">Instagram</p>
                    <a
                      href="https://instagram.com/ovinicius.ns"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-notion-text font-medium hover:text-black transition-colors"
                      data-testid="link-instagram"
                    >
                      @ovinicius.ns
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-notion-secondary" />
                  </div>
                  <div>
                    <p className="text-notion-secondary text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/5566999716204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-notion-text font-medium hover:text-black transition-colors"
                      data-testid="link-whatsapp"
                    >
                      (66) 99971-6204
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-notion-border">
              <h3 className="text-xl font-semibold text-notion-text mb-6" data-testid="text-contact-form-title">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-notion-secondary mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-100 border border-notion-border rounded-lg focus:ring-2 focus:ring-notion-text focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-notion-secondary mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-100 border border-notion-border rounded-lg focus:ring-2 focus:ring-notion-text focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-notion-secondary mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-100 border border-notion-border rounded-lg focus:ring-2 focus:ring-notion-text focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-notion-text text-white py-3 px-6 rounded-lg hover:bg-black transition-colors font-medium sticky bottom-4 z-30 shadow-lg"
                  data-testid="button-submit-form"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Modal */}
      {selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          client={selectedProject.client}
          description={selectedProject.description}
        />
      )}
    </div>
  );
}
