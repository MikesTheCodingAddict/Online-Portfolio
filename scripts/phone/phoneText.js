/* Author: Michael Cortez
   Filename: phoneText.js
   Last updated: Oct. 31, 2026 */

document.addEventListener("DOMContentLoaded", function() {
	const countCode = "+1";
	const area = "774";
	const middle = "205";
	const line = "1787";
	const full = countCode + area + middle + line;
	const link = document.getElementById("phoneTextLink");
	const buttonLink = document.getElementById("phoneTextButtonLink");

	if (link) {
		link.addEventListener("click", function() {
			window.location.href = `sms:${full}`;
		});
	}
	if (buttonLink) {
		buttonLink.addEventListener("click", function() {
			window.location.href = `sms:${full}`;
		});
	}
});