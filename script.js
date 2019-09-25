const dropdown = () => {
	const menu = document.getElementById("menu");
	const nav = document.getElementById("nav");
	const exit = document.querySelector(".exit");
	menu.addEventListener("click", () => {
		nav.style.display = "inherit";
	});
	exit.addEventListener("click", () => {
		nav.style.display = "none";
	});
};

const scroll = () => {
	const arrow = document.querySelector(".scroll");
	arrow.addEventListener("click", () => {
		window.scrollTo({ top: 1000, behavior: "smooth" });
	});
};

dropdown();
scroll();
