  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate AJAX submission
    setTimeout(() => {
        contactForm.reset();
        toast.style.display = 'flex';
        
        // Hide toast after 5 seconds
        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000);
    }, 1000);
});

// AJAX project loading
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Smart Education Management System",
            description: "Designed and implemented a system for tasks like attendance tracking, assignment submissions, and performance analysis.",
            technologies: "Java, HTML, CSS",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800&q=80",
            github:"https://github.com/subhashini17v/sems.git",
            demo:"https://subhashini17v.github.io/sems/"
        },
        {
            title: "Study Timer (Hackathon Project)",
            description: "Collaborated on a real-time study timer application to help students manage their study time efficiently.",
            technologies: "Python, Front-End Development, HTML",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800&q=80",
             github:"https://github.com/subhashini17v/study-timer.git",
             demo:""
        },
        {
            title: "Restaurant Website",
            description: "Created a responsive website for a restaurant showcasing menu, location and reservation system.",
            technologies: "HTML, CSS",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800&q=80",
             github:"https://github.com/subhashini17v/restaurent.git",
             demo:"https://subhashini17v.github.io/restaurent/"
        },
        {
            title: "Morden Portfolio",
            description: "The Modern Portfolio Website is a sleek, responsive, and interactive web application designed to showcase personal information, projects, experience, and contact details in a professional format. Built using HTML5, CSS3, JavaScript, Bootstrap, and AJAX, this portfolio is ideal for freshers and professionals alike who want to create a strong online presence.",
            technologies: " HTML, CSS, JS",
            image: "portfolio.png",
            github:"https://github.com/subhashini17v/portfolio.git",
            demo:"https://subhashini17v.github.io/portfolio/"
        },
        {
            title: "Guess Num",
            description: "Guess game is a guessing number from one to ten,i used in JS,HTML,CSS",
            technologies: " HTML, CSS, JS",
            image: "guess.png",
            github:"https://github.com/subhashini17v/find-num.git",
            demo:"https://subhashini17v.github.io/find-num/index.html"
        }

    ];
    
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach((project, index) => {
        const projectHtml = `
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-card card-glass">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="p-4">
                        <h4 class="mb-3">${project.title}</h4>
                        <p class="" style="color: rgb(8, 135, 247);">${project.description}</p>
                        <p class="project-tech mb-4"><i class="fas fa-code me-2"></i>${project.technologies}</p>
                        <div class="d-flex">
                            <a href="${project.demo}" class="btn btn-sm glass me-2" style="border-radius: 50px; color: rgb(177, 19, 48);">Live Demo</a>
                            <a href="${project.github}" class="btn btn-sm btn-primary" style="border-radius: 50px;">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHtml;
    });
});

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 100 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();
