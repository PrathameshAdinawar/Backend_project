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
  });

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
  