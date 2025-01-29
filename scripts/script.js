// This function serves the purpose of helping the user in selecting a path
// or a free roaming and possibly also the default difficulty for the texts

const welcome = document.querySelector("#welcome-dialog");
const roamfree = document.querySelector("#roamfree");
const legacy = document.querySelector("#legacypath-btn");
const origin = document.querySelector("#originpath-btn");
const map = document.querySelector("svg");
const container = document.querySelector("#grid-container");
const nav = document.querySelector("nav");

roamfree.addEventListener("click", () => {
	welcome.style.display = "none";
	map.style.display = "block";
	container.append(nav);
	nav.className = "nav-interface";
});
legacy.addEventListener("click", () => {
	welcome.style.display = "none";
	map.style.display = "block";
	container.append(nav);
	nav.className = "nav-interface";
});
origin.addEventListener("click", () => {
	welcome.style.display = "none";
	map.style.display = "block";
	container.append(nav);
	nav.className = "nav-interface";
	const rightmask = document.querySelector("#rightMask");
	rightmask.style.display = "block";
});
