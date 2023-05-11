// it is important here to keap the slide number at the end of the image name
// and DO NOT include a number other than the slide number in the 9 last characters 
// of the image name including the extension. The string under slides[].image
// should be the SAME as the image name in the assets folder.
// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ];

// const leftArrow = document.querySelector(".arrow_left");
// leftArrow.addEventListener('click', changeSlide);

// const rightArrow = document.querySelector(".arrow_right");
// rightArrow.addEventListener('click', changeSlide );

// const dots = document.querySelector(".dots");
// // here we get the current slide source
// const slide = document.querySelector(".banner-img");
// let slideSource = slide.getAttribute("src");



// // here we create the dots with a class to give them all style
// // and a specific class for each dot with a number to select them
// // and we give the image-corresponding dot the class "dot_selected" to style it 
// for (let i in slides) {
// 	const j = parseInt(i) + 1;
// 	const dot = document.createElement("span");
// 	dot.classList.add("dot");
// 	dot.classList.add("dot"+ j);
// 	dots.appendChild(dot);
// 	// here we get the current slide number to add some style on the corresponding dot
// 	const slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
// 	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
// 	newDotSelected.classList.add("dot_selected");
// };
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
const slide = document.querySelector(".banner-img");
let slideSource = slide.getAttribute("src");

function changeDotSelection() {
	// here we remove the class "dot_selected" from the current dot if available
	let dotSelected = document.querySelector(".dot_selected");
	dotSelected = dotSelected != null ? (dotSelected.classList.remove("dot_selected")) : 1;
	// and extract the slide number to add the selected class to the corresponding dot
	const slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
	newDotSelected.classList.add("dot_selected");
}

function main() {

	const leftArrow = document.querySelector(".arrow_left");
	leftArrow.addEventListener('click', changeSlideSource);

	const rightArrow = document.querySelector(".arrow_right");
	rightArrow.addEventListener('click', changeSlideSource);

	const dots = document.querySelector(".dots");
	// below we get the current slide source
	slideSource = slide.getAttribute("src");
	// below we create the dots with a class to give them all style
	// and a specific class for each dot with a number to select them
	// and we give the image-corresponding dot the class "dot_selected" to style it 
	for (let i in slides) {
		const j = parseInt(i) + 1;
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dot.classList.add("dot"+ j);
		dots.appendChild(dot);
	}
	// here we get the current slide number to add some style on the corresponding dot
	changeDotSelection();
}

function changeSlideSource() {
	let m, slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));
	if (this.classList.contains("arrow_left")){
		m = slideNumber == 1 ? (slides.length) : (slideNumber - 1);
	}else{
		m = slideNumber == slides.length ? (1) : (slideNumber +1);
	}
	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
 	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine);
	changeDotSelection();
}
// function previousImage() {
	//here we extract the slide number from the image source
/*let slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));*/
	// let m = slideNumber == 1 ? (slides.length) : (slideNumber - 1);
// if (slideNumber == 1) {
// 	m = slides.length;
// }else{
// 	m = slideNumber - 1;
// }
	// here we change the image source number and the alternative text
// slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
// slide.setAttribute("src", slideSource);
// slide.setAttribute("alt", slides[m-1].tagLine);
// }


// function nextImage() {
	//here we extract the slide number from the image source
/* let slideNumber = parseInt((slideSource.slice(-9)).match(/\d+/g));*/
	// let m = slideNumber == slides.length ? (1) : (slideNumber +1);
// if (slideNumber == slides.length) {
// 	m = 1;
// }else{
// 	m = slideNumber + 1;
// };
	// here we change the image source number and the alternative text
// slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
// slide.setAttribute("src", slideSource);
// slide.setAttribute("alt", slides[m-1].tagLine);
// }

// function changeSlide() {
	
// 	if (this.classList.contains("arrow_left")) {
// 		previousImage();
// 	} else {
// 		nextImage();
// 	};
// 	// here the dot selection should be done AFTER the image change!!
// 	changeDotSelection();
// }

main();
