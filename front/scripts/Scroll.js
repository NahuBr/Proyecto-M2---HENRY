module.exports = function Scroll() {
                    document.addEventListener('scroll', function() {
                        const navbar = document.querySelector('.navbar-fixed');
                        const carouselHeight = document.getElementById('movieCarousel').offsetHeight;
                        if (window.scrollY > carouselHeight) {
                            navbar.style.transform = 'translateY(-100%)';
                        } else {
                            navbar.style.transform = 'translateY(0)';
                        }
                    });
                }();