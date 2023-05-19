// it is important here to KEAP the slide number at the end of the image name
// and DO NOT include a number other than the slide number in the 9 last characters 
// of the image name including the extension. The string under slides[].image
// should be the SAME as the image name in the assets folder.
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
// this is the function to get OR change the slide-source-number
const slide = document.querySelector(".banner-img");
let slideNumber, slideSource = slide.getAttribute("src");

function getSlideEndNumber() {
	return parseInt((slideSource.slice(-9)).match(/\d+/g));
}
function changeSlideInfo(m) {
	slideSource = slideSource.replace(`${slides[slideNumber-1].image}`, `${slides[m-1].image}`);
	slide.setAttribute("src", slideSource);
	slide.setAttribute("alt", slides[m-1].tagLine); 
}

function changeDotSelection() {
	// here we remove the class "dot_selected" from the current dot if available
	let dotSelected = document.querySelector(".dot_selected");
	dotSelected = dotSelected != null ? (dotSelected.classList.remove("dot_selected")) : 1;
	// and extract the slide number to add the selected class to the corresponding dot
	slideNumber = getSlideEndNumber();
	const newDotSelected = document.querySelector(`.dot${slideNumber}`);
	newDotSelected.classList.add("dot_selected");
}

function main() {

	const leftArrow = document.querySelector(".arrow_left");
	leftArrow.addEventListener('click', left => changeSlideSource("left"));
	// AU DESSUS c'est une solution pour que la fonction ne s'exécute pas toute seul au chargement!
	// le but étant de se débarraser de this.classList.contains
	const rightArrow = document.querySelector(".arrow_right");
	rightArrow.addEventListener('click', changeSlideSource);

	const dots = document.querySelector(".dots");

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

function changeSlideSource(direction) {
	let m;
	slideNumber = getSlideEndNumber();
	if (direction == "left"){
		m = slideNumber == 1 ? (slides.length) : (slideNumber - 1);
	}else{
		m = slideNumber == slides.length ? (1) : (slideNumber + 1);
	}
	changeSlideInfo(m);
	changeDotSelection();
}

main();
