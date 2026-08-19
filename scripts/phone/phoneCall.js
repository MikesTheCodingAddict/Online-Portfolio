document.addEventListener("DOMContentLoaded", function() {
	const countCode = "+1";
	const area = "774";
	const middle = "205";
	const line = "1787";
	const full = countCode + area + middle + line;
	const link = document.getElementById("phoneCallLink");

	link.href = `tel:${full}`;
	link.textContent = "Call Me!";
});