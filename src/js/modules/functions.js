/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function toggleMobileMenu(){
	const openMenuButton = document.querySelector('.toggle_menu');

	openMenuButton.addEventListener("click", toggleMenu);

	function toggleMenu () {
		if ( document.body.classList.contains('open_menu') ) {
			document.body.classList.remove('open_menu');

		} else {
			document.body.classList.add('open_menu');

		}
	}

}

export function parallax () {
	let scrollPosition = 0;
	const parallax_bg = document.querySelectorAll('.parallax_bg');

	document.addEventListener('scroll', function(){
		scrollPosition = window.pageYOffset;

		if (parallax_bg) {
			parallax_bg.forEach(function (item) {
				item.style.transform = 'translate(-50%, -'+scrollPosition / 2+'px)';
				return true;
			});
		}
	});
}

export function dropDownMenu(){
	const dropDownLink = document.querySelectorAll('.drop_down_link');

	if (dropDownLink) {
		dropDownLink.forEach(function (item) {
			item.addEventListener("click", toggleDropDown);
			return true;
		});
	}

	function toggleDropDown () {
		let dropDownLinkActive = document.querySelectorAll('.drop_down_link.active');

		if ( this.classList.contains('active') ) {
			this.classList.remove('active');
			this.parentNode.querySelector('.drop_down_menu').classList.remove('active');
		} else {
			if ( dropDownLinkActive.length > 0 ) {
				document.querySelector('.drop_down_link.active').classList.remove('active');
				document.querySelector('.drop_down_menu.active').classList.remove('active');
			}
			this.classList.add('active');
			this.parentNode.querySelector('.drop_down_menu').classList.add('active');
		}
	}

}

export function slider () {
	const sliderBlock = document.querySelector('.slider');
	const slidesList = sliderBlock.querySelector('.slide_list').querySelectorAll('.slide');
	const sliderNav = sliderBlock.querySelector('.nav').querySelectorAll('.item');
	const slidesTextList = document.querySelector('.header_sub_slider').querySelector('.slide_text_list').querySelectorAll('.slide');

	const sliderNextSlide = document.querySelector('.slider .next');
	const sliderPrevSlide = document.querySelector('.slider .prev');

	if (sliderBlock) {
		sliderNextSlide.addEventListener("click", nextSlide);
		sliderPrevSlide.addEventListener("click", prevSlide);
		sliderNav.forEach(function (item) {
			item.addEventListener("click", changeNavSlide);
			return true;
		});
	}

	function changeNavSlide () {
		let currentSlideIndex = [...sliderNav].indexOf(this);

		changeSlide(currentSlideIndex);
	}

	function nextSlide () {
		let activeSlideIndex = [...slidesList].indexOf(sliderBlock.querySelector('.slide_list').querySelector('.slide.active'));
		let nextSlideIndex = activeSlideIndex;

		if (activeSlideIndex === slidesList.length - 1) {
			nextSlideIndex = 0;
		} else {
			nextSlideIndex += 1;
		}

		changeSlide(nextSlideIndex);
	}

	function prevSlide () {
		let activeSlideIndex = [...slidesList].indexOf(sliderBlock.querySelector('.slide_list').querySelector('.slide.active'));
		let prevSlideIndex = activeSlideIndex;

		if (activeSlideIndex === 0) {
			prevSlideIndex = slidesList.length - 1;
		} else {
			prevSlideIndex = activeSlideIndex - 1;
		}

		changeSlide(prevSlideIndex);
	}

	function changeSlide (nextSlideIndex) {
		sliderBlock.querySelector('.slide_list').querySelector('.slide.active').classList.remove('active');
		sliderBlock.querySelector('.nav').querySelector('.active').classList.remove('active');
		document.querySelector('.header_sub_slider').querySelector('.slide.active').classList.remove('active');
		[...slidesList][nextSlideIndex].classList.add('active');
		[...slidesTextList][nextSlideIndex].classList.add('active');
		[...sliderNav][nextSlideIndex].classList.add('active');
	}

}