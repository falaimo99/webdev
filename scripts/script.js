const adventurers = [
	{
		adventurer: "Merry & Pippin",
		text: "You like to stroll around peacefully, taking your time, but you're not interested in long and complicate explanations. (Perfect for young students and casual visitors who don't have much time)",
	},
	{
		adventurer: "Aragorn & Eowin",
		text: "You want to take action and feel completely satisfied of your visit, unfortunately you're not an elf and you don't have all the time in this world (Ideal for the casual visitors who wants to have a memorable visit, the classic museal experience)",
	},
	{
		adventurer: "Elrond & Galadriel",
		text: "You're well versed in the Lore of Arda, these items resound with you in profound ways, but this can also be the beginning that will lead you to learn something unexpected (Texts and insights written having in mind tolkien scholars and university students, who wants to know more about one of the most important narratives of the last century)",
	},
];

const container = document.querySelector("#grid-container");

const welcomeDialog = () => {
	const pathBtns = document.querySelectorAll(".path-button");
	const welcomeDialog = document.querySelector(".welcomeDialog");
	pathBtns.forEach((element) => {
		element.addEventListener("click", () => {
			console.log("test");
			welcomeDialog.style.display = "none";
			charDialog();
		});
	});
};

const charDialog = () => {
	const dialog = document.createElement("dialog");

	const inner = `
            <h1>What kind of Adventurer are you?</h1>
            <span class="material-symbols-outlined" id='arrow-back'>arrow_back_ios</span>
            <img src="http://screenrant.com/wp-content/uploads/2017/03/Merry-and-Pippin-Are-undervalued-in-LOTR.jpg"></img>
            <span class="material-symbols-outlined" id='arrow-forward'>arrow_forward_ios</span>
            <p>Placeholder</p>`;
	dialog.innerHTML = inner;
	dialog.className = "charDialog";
	container.appendChild(dialog);
	dialog.show();
};

welcomeDialog();
