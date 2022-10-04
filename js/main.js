// change nav color on scroll
const wrapper = document.querySelector('.wrapper')
const nav = wrapper.querySelector('nav')
window.addEventListener('scroll', ()=> {
    scrollY > nav.clientHeight ? nav.classList.add('bg-nav') : nav.classList.remove('bg-nav') 
})

// set sections scroll position when navlinks are clicked
const sections = document.querySelectorAll('.section')
const linksContainer = wrapper.querySelector('.nav-links')
const links = linksContainer.querySelectorAll('li')
links.forEach(link => {
    link.addEventListener('click', (e)=> {
        e.preventDefault()
        const clickedLink = e.currentTarget.textContent
        sections.forEach(section=> {
            const sectionPosition = section.getBoundingClientRect().top
            const selectedSection = section.getAttribute('id')
            if(selectedSection == clickedLink) {
                scrollTo(0, sectionPosition - nav.clientHeight)
            }
        })
    })
})

// display services cards
const servicesContainer = wrapper.querySelector('.services')
cardsContainer = servicesContainer.querySelector('.section-content')
const cardDetails = [
    {
        imgSrc: "img/frontend.png",
        title: "Frontend web developer"
    },

    {
        imgSrc: "img/responsive.png",
        title: "Mobile responsive designs"
    },

    {
        imgSrc: "img/wordpress.png",
        title: "Wordpress"
    },

    {
        imgSrc: "img/photoshop.png",
        title: "Photoshop"
    },

    {
        imgSrc: "img/redesign.png",
        title: "Website redesigning"
    }
]

cardDetails.map((detail)=> {
    cardsContainer.innerHTML += `
    <!-- card -->
    <section class="card">
        <div class="card-img">
            <img src=${detail.imgSrc} alt="">
        </div>

        <div class="card-title">
            <h4>${detail.title}</h4>
        </div>
    </section>`
})

// display portfolio swiper slides
const swiperDetails = [
    {
        imgSrc: "img/player.PNG",
        title: "Music player"
    },

    {
        imgSrc: "img/foodmart.jpg",
        title: "Foodmart Restaurant website"
    },

    {
        imgSrc: "img/royce.jpg",
        title: "Royce Scents Perfumes website"
    },

    {
        imgSrc: "img/blackjack.jpg",
        title: "BlackJack Web Card game"
    },

    {
        imgSrc: "img/survey.jpg",
        title: "Survey Web App"
    }
]

const swiperContainer = wrapper.querySelector('.swiper-wrapper')
swiperDetails.map((detail)=> {
    swiperContainer.innerHTML += `
    <!-- single slide -->
    <div class="swiper-slide">
        <div class="slide-img">
            <img src=${detail.imgSrc} alt="">
        </div>

        <div class="slide-icons">
            <i class="fa-solid fa-eye"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-chrome"></i>
        </div>

        <div class="slide-details">
            <h2>${detail.title}</h2>
        </div>
    </div>`
})

// initialize swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });