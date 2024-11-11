var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {

      // When screen width is >= 992px (medium screens like tablets)
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // When screen width is >= 576px (small screens like mobile portrait)
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // When screen width is < 576px (extra small devices)
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
  }});

  var acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");
  
      var pannel = this.nextElementSibling;
  
      if (pannel.style.maxHeight) {
        pannel.style.maxHeight = null;
        pannel.style.paddingBottom = "0"; // Collapse padding when closed
      } else {
        pannel.style.maxHeight = pannel.scrollHeight + "px";
        pannel.style.paddingBottom = "2.5rem"; // Add padding when open
      }
    });
  }
  
  // gsap.to(".navbar ",{
  //   display:"none",
  //   scrollTrigger:{
  //     trigger:".s2",
  //     scroller:"body",
  //     // markers:true,
  //     start:"top 15%",
  //     end:"top 15%",
  //     scrub:0.1
  //   }
  // })

  // gsap.to(".navbar1",{
  //   display:"flex",
  //   scrollTrigger:{
  //     trigger:".s2",
  //     scroller:"body",
  //     // markers:true,
  //     start:"top 15%",
  //     end:"top 15%",
  //     scrub:0.1
  //   }
  // })

  
  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
  
      if (scroll > 800) { // Adjust this scroll value as needed
        $(".navbar").hide();
        $(".navbar1").css("display", "flex");
      } else {
        $(".navbar").show();
        $(".navbar1").hide();
      }
    });
  });
  

  const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });

  });
});

// Add click event listener to each link to toggle between forms
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});