const text = document.querySelector(".sec-text");

const Load = () => {
	setTimeout(() => {
		text.textContent = "Full Stack Developer";
	}, 0);
	setTimeout(() => {
		text.textContent = "Machine Learning Engineer";
	}, 4000);
	setTimeout(() => {
		text.textContent = "UI Designer";
	}, 8000);
	setTimeout(() => {
		text.textContent = "Programmer";
	}, 12000);
}

Load();
setInterval(Load, 16000);