const map = (() => {
	let a = document.querySelectorAll("a");
	let dialog = document.querySelector("dialog");
	let span = document.querySelector("#closeDialog");
	span.addEventListener("click", () => {
		dialog.close();
	});
	a.forEach((a) =>
		a.addEventListener("click", () => {
			dialog.showModal();
		})
	);
})();
