/* Author: Michael Cortez
   Filename: darkMode.js
   Last updated: Oct. 29, 2026 */

// Making the button and the icons for it.
const darkModeButton = document.createElement('button');

// Height and width has been adjusted from the original set height and width accordingly.
// <!-- License: CC Attribution. Made by CyCraft: https://github.com/CyCraft/pepicons -->
const darkModeMoonIcon = `
<svg width="2em" height="2em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76447 6.1275C9.07052 4.68767 10.0433 3.51293 11.3637 2.93174C12.2938 2.52236 12.0913 1.14759 11.0826 1.02391C6.47122 0.458427 2.16189 3.52205 1.18835 8.10223C0.15323 12.9721 3.2549 17.7583 8.11727 18.7918C12.9796 19.8254 17.7599 16.7145 18.795 11.8446C18.9477 11.1264 19.0122 10.4004 18.9896 9.67855C18.9577 8.66019 17.6015 8.33612 17.1127 9.23007C16.1656 10.9622 14.1849 11.891 12.2283 11.4751C9.79778 10.9585 8.24645 8.56461 8.76447 6.1275ZM8.53309 16.8355C4.752 16.0318 2.339 12.3083 3.14464 8.51805C3.68521 5.97489 5.54698 4.0327 7.871 3.28807C7.36391 4.00107 6.99737 4.82159 6.80818 5.71168C6.06068 9.22838 8.30068 12.685 11.8125 13.4314C13.445 13.7784 15.0883 13.478 16.449 12.6805C15.176 15.7335 11.8789 17.5467 8.53309 16.8355Z" fill="#000000"/>
</svg>`;

// Height and width has been adjusted from the original set height and width accordingly.
// <!-- License: Apache. Made by Iconscout: https://github.com/Iconscout/unicons -->
const lightModeSunIcon = `
<svg fill="#000000" width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
</svg>`;

// Stylizing the button.
darkModeButton.className = 'darkMode';
darkModeButton.innerHTML = darkModeMoonIcon;
darkModeButton.style.display = 'block';
darkModeButton.style.backgroundColor = 'gray';
darkModeButton.style.borderRadius = '50px';
darkModeButton.style.borderStyle = 'solid';
darkModeButton.style.borderColor = 'red';
darkModeButton.style.borderWidth = '2px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.height = '4em';
darkModeButton.style.width = '4em';
darkModeButton.setAttribute('aria-pressed', 'false');
darkModeButton.type = 'button';

// ---This is where the real magic happens---...
// Trying out the localStorage.
const isEnabled = localStorage.getItem('darkMode');
const isDarkFirst = isEnabled === 'enabled';
if (isDarkFirst) { document.body.classList.add('darkMode'); }

darkModeButton.innerHTML = isDarkFirst ? lightModeSunIcon : darkModeMoonIcon;
darkModeButton.setAttribute('aria-pressed', isDarkFirst);

function darkMode() {
   const darkModeEnabled = document.body.classList.toggle('darkMode');

   darkModeButton.setAttribute('aria-pressed', darkModeEnabled);
   darkModeButton.innerHTML = darkModeEnabled ? lightModeSunIcon : darkModeMoonIcon;

   if (darkModeEnabled) {
      localStorage.setItem('darkMode', 'enabled');
   } else {
      localStorage.setItem('darkMode', 'disabled');
   }
}

// Event listener to detect when the button is clicked on.
darkModeButton.addEventListener("click", darkMode);

// Appending the button onto the same level as the nav bar or the hamburger (Depending on the resolution).
const navBar = document.getElementById('top_nav_bar');
const navBarLinks = document.getElementById('nav-links');
const hamburgerButton = document.getElementById('hamburger');

if (navBarLinks) {
   navBarLinks.after(darkModeButton);
}
else if (navBar) {
   navBar.appendChild(darkModeButton);
} else if (hamburgerButton) {
   hamburgerButton.after(darkModeButton);
}