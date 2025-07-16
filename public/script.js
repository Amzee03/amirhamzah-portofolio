// Global variables
let activeSection = 'home';

// Portfolio data
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

// Skills data
const skills = {
    hard: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Figma', 'Adobe Illustrator'],
    soft: ['Komunikasi', 'Kolaborasi', 'Manajemen Waktu', 'Problem Solving']
};

// Experience data
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

// Download CV function
function downloadCV() {
    // You can replace this with actual CV file path
    alert('CV download functionality - silakan masukkan path CV PDF Anda');
    // window.open('path-to-your-cv.pdf', '_blank');
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
                    Lihat Demo
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