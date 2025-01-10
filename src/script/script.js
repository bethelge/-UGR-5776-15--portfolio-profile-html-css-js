
// JavaScript Typing Animation
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typed.name"); 
  const nameText = "Bethel Gelan."; 
  const typingSpeed = 150; 
  const delayAfterTyping = 1000; 

  let currentIndex = 0;

  function typeText() {
    if (currentIndex < nameText.length) {
      // Append the next character
      typedElement.textContent += nameText[currentIndex];
      currentIndex++;
      setTimeout(typeText, typingSpeed); // Continue typing
    } else {
      // Optional: Clear text after some delay (loop effect)
      setTimeout(() => {
        typedElement.textContent = "";
        currentIndex = 0;
        typeText(); // Restart the typing animation
      }, delayAfterTyping);
    }
  }

  // Start typing
  typeText();
});
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const dots = document.querySelectorAll('.carousel-pagination .dot');
  const slides = document.querySelectorAll('.carousel-slide');

  let currentIndex = 0;
  const slidesToShow = 5; // Number of slides visible at a time
  const totalSlides = slides.length;

  const updateCarousel = (index) => {
    const offset = index * -(100 / slidesToShow); // Adjust offset for multiple visible slides
    wrapper.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  };

  // Add event listeners to dots
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateCarousel(currentIndex);
    });
  });

  // Auto-slide functionality
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
  }, 3000); // Change slide every 3 seconds
});
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // All sections
  const navLinks = document.querySelectorAll('.navbar ul li a'); // Navbar links

  // Smooth scrolling when a navbar link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Remove the "#" from href
      const targetSection = document.getElementById(targetId);

      // Smoothly scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // Highlight the active section in the navbar
  const updateActiveNav = () => {
    let currentSection = '';

    // Determine which section is currently in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update active class on navbar links
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  };

  // Listen to scroll events
  window.addEventListener('scroll', updateActiveNav);
});
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('header'); // The header/navbar element
  const homeSection = document.querySelector('#home'); // The home section

  if (!navbar || !homeSection) {
    console.error("Navbar or Home section not found!");
    return;
  }

});
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-wrapper');
  const aboutSection = document.querySelector('#about');

  if (!navbar || !aboutSection) {
    console.error("Navbar or About section not found!");
    return;
  }

  const toggleNavbarVisibility = () => {
    const aboutTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutTop) {
      navbar.classList.add('visible'); // Show navbar
    } else {
      navbar.classList.remove('visible'); // Hide navbar
    }
  };

  // Listen for scroll events
  window.addEventListener('scroll', toggleNavbarVisibility);

  // Initialize visibility on page load
  toggleNavbarVisibility();
});
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-wrapper');
  const aboutSection = document.querySelector('#about');
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');

  if (!navbar || !aboutSection || !hamburger || !navbarLinks) {
    console.error("Required elements not found!");
    return;
  }

  // Toggle Navbar Visibility on Scroll
  const toggleNavbarVisibility = () => {
    const aboutTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutTop) {
      navbar.classList.add('visible'); // Show navbar
    } else {
      navbar.classList.remove('visible'); // Hide navbar
    }
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    navbarLinks.classList.toggle('show');
  };

  // Hide Mobile Menu on Link Click
  const hideMobileMenu = () => {
    navbarLinks.classList.remove('show');
  };

  // Attach Event Listeners
  window.addEventListener('scroll', toggleNavbarVisibility);
  hamburger.addEventListener('click', toggleMobileMenu);

  // Close menu on clicking a link
  document.querySelectorAll('#navbar-links a').forEach(link => {
    link.addEventListener('click', hideMobileMenu);
  });

  // Initialize visibility on page load
  toggleNavbarVisibility();
});
// Toggle Mobile Menu and Animate Hamburger
hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
  hamburger.classList.toggle('active'); // Add or remove "active" for animation
});
