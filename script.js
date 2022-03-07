const pad = document.querySelector(".sketch-pad");
const colors = document.myForm.color;
let color = "black";
let clicked = true;

function generateBoard(size) {
	clear();
	pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		let pixel = document.createElement("div");
		pixel.addEventListener("mouseover", colorPixel);
		pixel.classList.add("pixel");
		pixel.style.backgroundColor = "white";
		pad.appendChild(pixel);
	}
}

function clear() {
	pad.innerText = "";
}

document.querySelector("#myRange").addEventListener("mouseup", (e) => {
	generateBoard(e.target.value);
});

colors.forEach((input) => {
	input.addEventListener("change", () => (color = input.value));
});

function colorPixel() {
	if (clicked) {
		if (color === "random") {
			this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
		} else {
			this.style.backgroundColor = color;
		}
	}
}

document.querySelector(".clear").addEventListener("click", () => {
	const elements = Array.from(document.querySelectorAll(".pixel"));
	elements.forEach((element) => {
		element.style.backgroundColor = "white";
	});
});

pad.addEventListener("click", () => {
	const mode = document.querySelector("#coloringMode");
	if (clicked) {
		clicked = false;
		mode.style.color = "red";
		mode.innerText = "PAUSED";
	} else {
		clicked = true;
		mode.style.color = "green";
		mode.innerText = "Active";
	}
});

generateBoard(16);
