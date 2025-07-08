// Toggling Skill Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills-active");
    });

    target.classList.add("skills-active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills-active");
    });

    tab.classList.add("skills-active");
  });
});

//Mix itup Sorting

let mixerPortfolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

// Active link changing

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((l) => l.addEventListener("click", activeWork));

//Portfolio Popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work-button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
}

document
  .querySelector(".portfolio-popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".work-img").src;
  document.querySelector(".portfolio-popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work-title").innerHTML;
  document.querySelector(".portfolio-popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

//Services Popup
const modalViews = document.querySelectorAll(".services-modal");
const modelBtns = document.querySelectorAll(".services-button");
const modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
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

// Testimonials Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Input Animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Scroll Section Active Link

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// Activating Sidebar

const navMenu = document.getElementById("sidebar");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

// Clients Carousel Animation

// Frameworks Carousel Animation
function initFrameworksCarousel() {
  const columns = document.querySelectorAll(".logos-column");

  columns.forEach((column) => {
    const logos = column.querySelectorAll(".logo-item");
    let activeIndex = 0;

    setInterval(() => {
      // Remove active class from current
      logos[activeIndex].classList.remove("active");

      // Move to next
      activeIndex = (activeIndex + 1) % logos.length;

      // Add active class to new
      logos[activeIndex].classList.add("active");
    }, 2500);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initFrameworksCarousel();
});

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initLogosCarousel();
});
