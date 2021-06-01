var button = document.getElementById('open');
var close = document.getElementById('close');
var modal = document.getElementById('modal');

button.addEventListener('click', function(event) {
	event.preventDefault();
	modal.style.display = 'block';
})

close.addEventListener('click', function(event) {
	event.preventDefault();
	modal.style.display = 'none';		
})
let form = document.querySelector('.modal__form');
let validateBtn = form.querySelector('.btn');
let nameUser = form.querySelector('.form__name');
let telUser = form.querySelector('.form__tel');
let emailUser = form.querySelector('.form__email');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	if (!nameUser.value) {
		nameUser.classList.add('error');
		nameUser.value = 'Поле для обязательного заполнения';
	}
	if (!telUser.value) {
		telUser.classList.add('error');
		telUser.value = 'Поле для обязательного заполнения';
	}
	if (!emailUser.value) {
		emailUser.classList.add('error');
		emailUser.value = 'Поле для обязательного заполнения';
	}

})

nameUser.onfocus = function () {
	nameUser.classList.remove('error');
	nameUser.value = '';
}

telUser.onfocus = function () {
	telUser.classList.remove('error');
	telUser.value = '';
}

emailUser.onfocus = function () {
	emailUser.classList.remove('error');
	emailUser.value = '';
}
//автоматическон слайд-шоу
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 4000);
}


/*let slideIndex = 1;
showSlides(slideIndex);

//next/previovs controls
function plusSlides(n){
	showSlides(slideIndex +=n);
}

//thumbnail image conrols
function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if(n > slides.length){slideIndex = 1}
	if(n < 1) {slideIndex = slides.length}
	for (i = 0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i<dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += " active";
}*/
let sidebarMenuItem = document.getElementsByClassName('sidebar-menu__item');

for (let i = 0; i<sidebarMenuItem.length; i++){
	sidebarMenuItem[i].addEventListener('mouseenter', showSub, false);
	sidebarMenuItem[i].addEventListener('mouseleave', hideSub, true);
}

function hideSub(e){
	if (this.children.length>1){
		this.children[1].style.height = '0px';
		this.children[1].style.overflow = 'hidden';
		this.children[1].style.opasity = '0';
	}
}

function showSub(e){
	if (this.children.length>1){
		this.children[1].style.height = 'auto';
		this.children[1].style.overflow = 'visible';
		this.children[1].style.opasity = '1';
	}else{
		return false;
	}
}
let burgerMenu = document.querySelector('#top-burger');
let topMenu = document.querySelector('.top-menu__items');
let computedStyle = getComputedStyle(topMenu);
burgerMenu.addEventListener('click', function(event){
	console.log(topMenu.className);
	console.log(computedStyle.display);
	topMenu.classList.toggle('show');
})

let sideBurger = document.querySelector('#sidebar-burger');
let sidebarMenu = document.querySelector('.sidebar__menu');
sideBurger.addEventListener('click', function(event){
	sidebarMenu.classList.toggle('show');
})