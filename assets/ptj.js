/*==================== AUTO EXPERIENCE YEARS ====================*/
const CAREER_START_DATE = new Date(2025, 5, 3); // 3 June 2025

function getExperienceYearsPlus() {
  const now = new Date();
  let months =
    (now.getFullYear() - CAREER_START_DATE.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START_DATE.getMonth());

  if (now.getDate() < CAREER_START_DATE.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    months = 0;
  }

  const fullYears = Math.floor(months / 12);
  const displayYears = fullYears === 0 && months > 0 ? 1 : fullYears;

  return `${displayYears}+`;
}

function updateExperienceYears() {
  const yearsPlus = getExperienceYearsPlus();
  const yearsCard = document.getElementById('experience-years');
  const yearsText = document.getElementById('experience-years-text');

  if (yearsCard) {
    yearsCard.textContent = yearsPlus;
  }

  if (yearsText) {
    yearsText.textContent = `${yearsPlus} years of experience`;
  }
}

updateExperienceYears();

/*==================== TYPING ANIMATION ====================*/
const typingTextElement = document.querySelector('.typing-text');
if (typingTextElement) {
  const texts = [
    'Software Engineer',
    'Full-Stack Engineer',
    'Cloud and DevOps Engineer'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeText, speed);
  }

  typeText();
}

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============== Qualification Tabs ===============*/

const qualificationTabs = document.querySelectorAll('.qualification__button');
const qualificationContents = document.querySelectorAll('.qualification__content');

function showQualificationContent(contentId) {
  qualificationContents.forEach(content => {
    content.classList.remove('qualifiation__active');
  });
  
  qualificationTabs.forEach(tab => {
    tab.classList.remove('qualification__active');
  });
  
  const targetContent = document.getElementById(contentId);
  if (targetContent) {
    targetContent.classList.add('qualifiation__active');
  }
  
  const activeTab = document.querySelector(`[data-target="#${contentId}"]`);
  if (activeTab) {
    activeTab.classList.add('qualification__active');
  }
}

qualificationTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target').replace('#', '');
    showQualificationContent(targetId);
  });
});

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

if (modalBtns.length) {
  let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
  };

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal(i);
    });
  });

  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove("active-modal");
      });
    });
  });
}

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL ANIMATIONS WITH INTERSECTION OBSERVER ====================*/
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

// Observe all sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(section);
});

// Observe portfolio items
document.querySelectorAll('.portfolio__content').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px) scale(0.95)';
  item.style.transition = `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`;
  observer.observe(item);
});

// Observe about info cards
document.querySelectorAll('.about__info > div').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
  observer.observe(item);
});

// Observe skills cards
document.querySelectorAll('.skills__content').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
  observer.observe(item);
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== CONTACT FORM HANDLING ====================*/
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  
  // Get form values
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitText.textContent = 'Sending...';
  
  // Create mailto link with form data
  const subject = encodeURIComponent(`Contact from Portfolio - ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:roushankumarydv2003@gmail.com?subject=${subject}&body=${body}`;
  
  // Open mail client
  window.location.href = mailtoLink;
  
  // Show success message after a short delay
  setTimeout(() => {
    showFormMessage('✓ Message prepared! Your email client should open. If not, please send an email to roushankumarydv2003@gmail.com', 'success');
    form.reset();
    submitBtn.disabled = false;
    submitText.textContent = 'Send Message';
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }, 500);
}

function showFormMessage(text, type) {
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = text;
  formMessage.className = `form__message form__message--${type}`;
  formMessage.style.display = 'block';
  
  // Scroll to message
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/*==================== SCROLL REVEAL ====================*/
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('reveal-visible'));
}
