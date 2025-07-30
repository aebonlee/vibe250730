document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 포트폴리오 필터링
const filterBtns = document.querySelector('.portfolio-filters');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // active 클래스 관리
        filterBtns.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.dataset.category === filterValue) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }
});