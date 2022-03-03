const parentDiv = document.querySelector(".container");

document.querySelector("button").addEventListener("click", restart);

function restart() {
	while (parentDiv.firstChild) {
		parentDiv.removeChild(parentDiv.firstChild);
	}
	drawGrid();
}

function drawGrid() {
	let customWidth = prompt("Please Enter Number of Boxes per row: max:100");
	for (let j = 0; j < customWidth; j++) {
		for (let i = 0; i < customWidth; i++) {
			let newDiv = document.createElement("div");
			newDiv.classList.add("box");
			parentDiv.appendChild(newDiv);
		}
	}

	const widthHeight = `width: calc(95vw * (1 / ${customWidth}));height: calc(95vw * (1 / ${customWidth}));`;

	const boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		box.style.cssText = widthHeight;
		box.addEventListener("click", () => {
			box.classList.toggle("clicked");
		});
	});
}
