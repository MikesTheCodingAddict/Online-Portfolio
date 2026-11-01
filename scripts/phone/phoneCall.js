/* Author: Michael Cortez 
   Filename: phoneCall.js
   Last updated: Oct. 31, 2026 */

document.addEventListener("DOMContentLoaded", function() {
	const countCode = "+1";
	const area = "774";
	const middle = "205";
	const line = "1787";
	const full = countCode + area + middle + line;
	const buttonLink = document.getElementById("phoneCallButtonLink");
	const link = document.getElementById("phoneCallLink");

	if (link) {
		link.addEventListener("click", function() {
			window.location.href = `tel:${full}`;
		});
	}
	if (buttonLink) {
		buttonLink.addEventListener("click", function() {
			window.location.href = `tel:${full}`;
		});
	}
});