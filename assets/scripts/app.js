let i = 0;
const images = document.querySelectorAll('#hero-images-slideshow img');

function initSlideshow() {
	images[i].classList.toggle('showing');
	i = (i + 1) % 5;
	images[i].classList.toggle('showing');
}
if (images.length > 0) setInterval(initSlideshow, 4000);

const hamburger = document.querySelector('.custom-toggler');
const navbar = hamburger.parentElement;

hamburger.addEventListener('click', () => {
	if (navbar.classList.contains('show')) {
		navbar.classList.remove('show');
	} else {
		navbar.classList.add('show');
	}
});
