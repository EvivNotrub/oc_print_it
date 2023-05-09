// it is important here to keap the slide number at the end of the image name
// and DO NOT include a number other than the slide number in the 9 last characters 
// of the image name including the extension.
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

// here we create the dots with a class for styling all and a specific class for each dot
for (let i in slides) {
	const j = parseInt(i) + 1;
	const dot = document.createElement("span");
	dot.classList.add("dot");
	dot.classList.add("dot"+ j);
	dots.appendChild(dot);
	// here we get the current slide number to add some style on the corresponding dot
	const slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
	newDotSelected.classList.add("dot_selected");
};


function previousImage() {
	
	let slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
	let m;
	if (slideNumber == 1) {
		m = slides.length;
	}else{
		m = slideNumber - 1;
	};

	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine);
};


function nextImage() {
	
	let slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
	let m;
	if (slideNumber == slides.length) {
		m = 1;
	}else{
		m = slideNumber + 1;
	};
	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine);
};

function changeDotSelection() {
	const dotSelected = document.querySelector(".dot_selected");
	dotSelected.classList.remove("dot_selected");
	const slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
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