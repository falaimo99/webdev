const adventurers = [
	{
		adventurer: "Merry & Pippin",
		text: `You like to stroll around peacefully, taking your time, but you're not interested in long and complicate explanations.	
		<br><br>(Perfect for <b>young students</b> and <b>casual visitors</b> who don't have much time)`,
		url: `http://screenrant.com/wp-content/uploads/2017/03/Merry-and-Pippin-Are-undervalued-in-LOTR.jpg`,
		level: 0,
	},
	{
		adventurer: "Aragorn & Eowin",
		text: "You want to take action and feel completely satisfied of your visit, unfortunately you're not an elf and you don't have all the time in this world (Ideal for the casual visitors who wants to have a memorable visit, the classic museal experience)",
		url: `https://c4.wallpaperflare.com/wallpaper/166/202/477/the-lord-of-the-rings-aragorn-horses-viggo-mortensen-eowyn-the-two-towers-miranda-otto-animals-horses-hd-art-wallpaper-preview.jpg`,
		level: 1,
	},
	{
		adventurer: "Elrond & Galadriel",
		text: "You're well versed in the Lore of Arda, these items resound with you in profound ways, but this can also be the beginning that will lead you to learn something unexpected (Texts and insights written having in mind tolkien scholars and university students, who wants to know more about one of the most important narratives of the last century)",
		url: `https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/amazons-lord-of-the-rings-right-to-recast-galadriel-and-elrond.jpg`,
		level: 2,
	},
];

const container = document.querySelector("#grid-container");

const welcomeDialog = () => {
	const pathBtns = document.querySelectorAll(".path-button");
	const welcomeDialog = document.querySelector(".welcomeDialog");
	pathBtns.forEach((element) => {
		element.addEventListener("click", () => {
			welcomeDialog.style.display = "none";
			charDialog();
		});
	});
};

const charDialog = () => {
	const dialog = document.createElement("dialog");
	let counter = 0;
	const inner = `
            <h1>What kind of Adventurer are you?</h1>
			<h2>${adventurers[counter].adventurer}</h2>
            <span class="material-icons" id='arrow-back'>arrow_back</span>
            <img src="${adventurers[counter].url}"></img>
            <span class="material-icons" id='arrow-forward'>arrow_forward</span>
            <p>${adventurers[counter].text}</p>
			<button class='path-button' id='select-adventurer'>Select</button>`;
	dialog.innerHTML = inner;
	dialog.className = "charDialog";
	container.appendChild(dialog);
	const selectBtn = document.querySelector("#select-adventurer");
	selectBtn.addEventListener("click", () => {
		const map = document.querySelector("svg");
		console.log("in");
		dialog.style.display = "none";
		map.style.display = "block";
	});
};

welcomeDialog();
