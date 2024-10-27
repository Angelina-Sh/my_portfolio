const header_nav_button = document.getElementById('header_nav_button')
const header_nav_menu = document.getElementById('header_nav_menu')
const header_close_button = document.getElementById('header_close_button')
const main_content = document.getElementById('main_content')

header_nav_button.addEventListener('click', function() {
    header_nav_menu.style.transform = 'translateX(0)'
    main_content.classList.toggle('active')
    main_content.classList.toggle('fade-out')
})
header_close_button.addEventListener('click', function() {
    header_nav_menu.style.transform = 'translateX(100%)'
    main_content.classList.toggle('active')
    main_content.classList.toggle('fade-out')
})

const sections = document.querySelectorAll('.for_crossed')
const navLinks = document.querySelectorAll('.nav_menu a')

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        navLinks.forEach(link => {
            link.classList.remove('active')
            link.classList.remove('crossed')
        })

        this.classList.add('active')

        const targetId = this.getAttribute('href')

        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    })
})

window.addEventListener('wheel', () => {
    let current = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('crossed')
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('crossed')
        }
    })
})