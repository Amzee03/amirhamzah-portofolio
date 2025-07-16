// Global variables
let activeSection = 'home';

// Portfolio data
const portfolio = [
    {
        title: "Social Media Content and Graphic Designer",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
        description: "Desain konten sosial media informatif untuk branding sekolah SMAIT Al-Qudwah Depok dan desain untuk keperluan klien serta tugas kuliah.",
        role: "Designer",
        tools: ["Canva", "Adobe Illustrator", "Medibang Paint Pro"],
        demo: "https://www.figma.com/design/cdlMjvx8thTWZ3rVDSUDIJ/Portofolio-Design-Content?node-id=0-1&t=iZE1qgfIjAgXSeW0-1",
        process: "Proses dimulai dari penentuan tema bulanan, harian, dan event-event khusus, kemudia pembuatan template visual, hingga penjadwalan dan waktu yang tepat untuk memposting konten pada sosial media"
    },
    {
        title: "Siaga Bunda",
        thumbnail: "../src/assets/home-siagabunda.jpg",
        description: "Design user interface untuk website yang berfokus pada kesehatan ibu hamil.",
        role: "UI/UX Designer, front-end engineer",
        tools: ["Figma", "PHP", "Adobe Illustrator"],
        demo: "https://github.com/SIAGA-BUNDA/siaga-bunda.git",
        process: "Dimulai dengan menentukan user-requirement, functional dan non-fucntional requirement, kemudian baru dimulai visual design dan prototyping di figma, terakhir yaitu development website"
    },
    {
        title: "Aplikasi Tag It",
        thumbnail: "../src/assets/tagit.jpg",
        description: "Design app Mobile berbasis GPS yang berfungsi untuk mengingatkan pengguna ketika mereka mendekati lokasi tujuan tertentu.",
        role: "Front-end Developer & Logo Designer",
        tools: ["Flutter", "Dart", "Figma"],
        demo: "https://github.com/Luft21/TagIt.git",
        process: "Merancang user requirement untuk pengguna, design visual app dan logo di figma, develop app dengan tim secara berkala dengan github"
    }
];

// Skills data
const skills = {
    hard: ['HTML', 'Tailwind CSS', 'JavaScript', 'Figma', 'Adobe Illustrator', 'Flutter'],
    soft: ['Komunikasi', 'Kolaborasi Tim', 'Manajemen Waktu', 'Problem Solving']
};

// Experience data
const experience = [
    {
        company: "SMAIT Al-Qudwah Depok",
        position: "Social Media Content Designer",
        year: "2023 - 2025",
        description: "Saya merancang strategi konten dan membuat template untuk design konten harian, mingguan, dan konten di acara-acara khusus."
    },
    // {
    //     company: "Digital Creative Agency",
    //     position: "Front-end Developer",
    //     year: "2020 - 2022",
    //     description: "Mengembangkan website responsif dan aplikasi web untuk klien dari berbagai industri"
    // },
    // {
    //     company: "Startup Hub Indonesia",
    //     position: "Junior Designer",
    //     year: "2019 - 2020",
    //     description: "Mendesign interface untuk aplikasi mobile dan web, serta membuat brand identity"
    // }
];

// Scroll to section function
function scrollToSection(sectionId) {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Set active navigation section
function setActiveSection(sectionId) {
    activeSection = sectionId;
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

//direct ke wa
function openWhatsApp() {
    const waLink = "https://wa.me/6285894744507?text=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda";
    window.open(waLink, "_blank");
}

//direct ke email
    function sendEmail() {
        const email = "2003amirhamzah@gmail.com";
        const subject = "Halo Amir";
        const body = "Saya tertarik dengan portofolio Anda.";
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

//direct ke linkedin
function openLinkedIn() {
    const linkedInUrl = "https://www.linkedin.com/in/hamzah-amir";
    window.open(linkedInUrl, "_blank"); // buka di tab baru
}

// Download CV function
function openCV() {
    const cvUrl = "https://drive.google.com/file/d/1-M4y2SAny_V-u6f8WieFEbj5jeaeiZqD/view?usp=sharing";
    window.open(cvUrl, "_blank"); // buka di tab baru
}

// Render portfolio items
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolio.forEach((project, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'bg-white rounded-xl overflow-hidden shadow-lg card-hover';
        portfolioItem.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-48 object-cover hover-scale">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
                <p class="text-gray-600 mb-4 text-sm">${project.description}</p>
                
                <div class="space-y-3 mb-4">
                    <div>
                        <span class="text-xs font-semibold text-navy-blue">PERAN:</span>
                        <p class="text-sm text-gray-600">${project.role}</p>
                    </div>
                    <div>
                        <span class="text-xs font-semibold text-navy-blue">TOOLS:</span>
                        <div class="flex flex-wrap gap-1 mt-1">
                            ${project.tools.map(tool => `<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">${tool}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <span class="text-xs font-semibold text-navy-blue">PROSES:</span>
                        <p class="text-sm text-gray-600">${project.process}</p>
                    </div>
                </div>
                
                <button onclick="window.open('${project.demo}', '_blank')" class="w-full border-2 border-navy-blue text-navy-blue px-4 py-2 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-all duration-300 flex items-center justify-center">
                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Lihat Project
                </button>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Render skills
function renderSkills() {
    const hardSkillsContainer = document.getElementById('hard-skills');
    const softSkillsContainer = document.getElementById('soft-skills');
    
    skills.hard.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'flex items-center p-3 bg-gray-100 rounded-lg';
        skillItem.innerHTML = `
            <div class="w-2 h-2 bg-navy-blue rounded-full mr-3"></div>
            <span class="font-medium">${skill}</span>
        `;
        hardSkillsContainer.appendChild(skillItem);
    });
    
    skills.soft.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'flex items-center p-3 bg-gray-100 rounded-lg';
        skillItem.innerHTML = `
            <div class="w-2 h-2 bg-navy-dark rounded-full mr-3"></div>
            <span class="font-medium">${skill}</span>
        `;
        softSkillsContainer.appendChild(skillItem);
    });
}

// Render experience timeline
function renderExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    
    experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = `flex flex-col lg:flex-row items-start lg:items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`;
        expItem.innerHTML = `
            <div class="flex-1">
                <div class="bg-white p-6 rounded-xl shadow-lg card-hover ml-12 lg:ml-0">
                    <div class="flex items-center mb-3">
                        <svg class="h-5 w-5 text-navy-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m6 0V4a2 2 0 012-2h4a2 2 0 012 2v3"/>
                        </svg>
                        <span class="text-sm font-medium text-navy-blue">${exp.year}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${exp.position}</h3>
                    <div class="flex items-center mb-3">
                        <svg class="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-gray-600">${exp.company}</span>
                    </div>
                    <p class="text-gray-600">${exp.description}</p>
                </div>
            </div>
            <div class="flex-shrink-0 relative">
                <div class="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-navy-blue rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="flex-1 lg:block hidden"></div>
        `;
        experienceTimeline.appendChild(expItem);
    });
}

// Scroll spy functionality
function handleScroll() {
    const sections = ['home', 'about', 'portfolio', 'skills', 'experience', 'contact'];
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                setActiveSection(sectionId);
            }
        }
    });
}

// Initialize page
function initializePage() {
    renderPortfolio();
    renderSkills();
    renderExperience();
    
    // Add scroll listener for navigation highlighting
    window.addEventListener('scroll', handleScroll);
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Make hero section visible immediately
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
