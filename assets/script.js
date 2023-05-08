const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener('click', changeSlide);

const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener('click', changeSlide );

const dots = document.querySelector(".dots");

const slide = document.querySelector(".banner-img");
let slideSource = slide.getAttribute("src");

for (let i in slides) {
	const j = parseInt(i) + 1;
	const dot = document.createElement("span");
	dot.classList.add("dot");
	dot.classList.add("dot"+ j);
	dots.appendChild(dot);
	const slideNumber = slideSource.charAt(slideSource.length-5);
	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
	newDotSelected.classList.add("dot_selected");
};

function previousImage() {
	
	let slideNumber = slideSource.charAt(slideSource.length-5);
	let m;
	if (slideNumber == 1) {
		m = slides.length;
	}else{
		m = parseInt(slideNumber) - 1;
	};

	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine);
};


function nextImage() {
	
	let slideNumber = slideSource.charAt(slideSource.length-5);
	let m;
	if (slideNumber == slides.length) {
		m = 1;
		console.log(m);
	}else{
		m = parseInt(slideNumber) + 1;
		console.log(m);	
	};
	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine);
};

function changeDotSelection() {
	const dotSelected = document.querySelector(".dot_selected");
	dotSelected.classList.remove("dot_selected");
	const slideNumber = slideSource.charAt(slideSource.length-5);
	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
	newDotSelected.classList.add("dot_selected");
};

function changeSlide() {
	if (this.classList.contains("arrow_left")) {
		previousImage();
	} else {
		nextImage();
	};
	changeDotSelection();
};