import { useState } from 'react';
import { Download, ExternalLink, Mail, Phone, Linkedin, ChevronDown, Calendar, MapPin, User, Code, Palette, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    hard: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Figma', 'Adobe Illustrator'],
    soft: ['Komunikasi', 'Kolaborasi', 'Manajemen Waktu', 'Problem Solving']
  };

  const portfolio = [
    {
      title: "E-Commerce Dashboard",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      description: "Dashboard analitik untuk platform e-commerce dengan visualisasi data real-time",
      role: "UI/UX Designer & Front-end Developer",
      tools: ["Figma", "React", "Tailwind CSS", "Chart.js"],
      demo: "#",
      process: "Dimulai dari research user, wireframing, prototype interaktif, hingga implementasi responsive design"
    },
    {
      title: "Mobile Banking App",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      description: "Redesign aplikasi mobile banking dengan fokus pada user experience dan kemudahan akses",
      role: "UI/UX Designer",
      tools: ["Figma", "Adobe Illustrator", "Principle"],
      demo: "#",
      process: "User journey mapping, persona development, usability testing, dan iterasi design berdasarkan feedback"
    },
    {
      title: "Corporate Website",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
      description: "Website corporate dengan landing page yang engaging dan optimasi SEO",
      role: "Front-end Developer & Logo Designer",
      tools: ["HTML", "CSS", "JavaScript", "Adobe Illustrator"],
      demo: "#",
      process: "Brand identity creation, wireframe development, responsive coding, dan performance optimization"
    }
  ];

  const experience = [
    {
      company: "Tech Innovate Solutions",
      position: "Senior UI/UX Designer",
      year: "2022 - Sekarang",
      description: "Memimpin tim design untuk produk digital B2B, meningkatkan user satisfaction hingga 85%"
    },
    {
      company: "Digital Creative Agency",
      position: "Front-end Developer",
      year: "2020 - 2022",
      description: "Mengembangkan website responsif dan aplikasi web untuk klien dari berbagai industri"
    },
    {
      company: "Startup Hub Indonesia",
      position: "Junior Designer",
      year: "2019 - 2020",
      description: "Mendesign interface untuk aplikasi mobile dan web, serta membuat brand identity"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-foreground">Portfolio</h2>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'portfolio', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Beranda' : 
                   section === 'about' ? 'Tentang' :
                   section === 'portfolio' ? 'Portfolio' :
                   section === 'skills' ? 'Keahlian' :
                   section === 'experience' ? 'Pengalaman' : 'Kontak'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  UI/UX Designer
                </span>
                <br />
                <span className="text-foreground">& Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Saya mengkombinasikan kreativitas dalam design dengan keahlian teknis untuk menciptakan 
                pengalaman digital yang memukau dan fungsional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-hero hover:opacity-90 transition-all duration-300 shadow-medium hover:shadow-large"
                >
                  Lihat Portfolio Saya
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Hubungi Saya
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="relative w-80 h-80 rounded-full object-cover shadow-large ring-4 ring-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tentang Saya</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Latar Belakang Pendidikan</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">S1 Desain Komunikasi Visual</h4>
                  <p className="text-muted-foreground">Universitas Seni & Design Indonesia (2015-2019)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fokus pada user experience design, visual communication, dan digital media
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sertifikasi UX Design</h4>
                  <p className="text-muted-foreground">Google UX Design Professional Certificate (2020)</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center mb-6">
                <Palette className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Keahlian Utama</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Code className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">UI/UX Designer</h4>
                    <p className="text-muted-foreground text-sm">User research, wireframing, prototyping, usability testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Front-end Developer</h4>
                    <p className="text-muted-foreground text-sm">Responsive web development, JavaScript frameworks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Palette className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Logo Designer</h4>
                    <p className="text-muted-foreground text-sm">Brand identity, visual branding, graphic design</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary">PERAN:</span>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">TOOLS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">PROSES:</span>
                      <p className="text-sm text-muted-foreground">{project.process}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                    Lihat Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Keahlian</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-primary" />
                Hard Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.hard.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-secondary rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-accent" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.soft.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-secondary rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pengalaman Kerja</h2>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 ml-12 lg:ml-0">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">{exp.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">{exp.company}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </Card>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium"></div>
                  </div>
                  <div className="flex-1 lg:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Kontak</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 group">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@designer.com</p>
            </Card>
            
            <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 group">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+62 812-3456-7890</p>
            </Card>
            
            <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 group">
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/designer</p>
            </Card>
          </div>
          
          <Button size="lg" variant="outline" className="group">
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download CV Lengkap
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio Designer. Dibuat dengan ❤️ menggunakan React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;