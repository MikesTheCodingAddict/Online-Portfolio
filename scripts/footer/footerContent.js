/* Author: Michael Cortez
   Filename: footerContent.js
   Last updated: Oct. 11, 2026 */
/* This is my very first JavaScript file ever written! Let's try to have
   some fun with it (While learning along the way, of course)! */
/* UPDATE: I modified my JavaScript code here to teach myself more on
   how some of the exception handling features work through the
   experience of doing so.
   NEW UPDATE: Removed exception handling feature in placement of appending the bottom copyright text. */

const footer = document.getElementById("footer");
footer.innerHTML = `
<div class="footer-nav">
   <h4>Navigation</h4>
   <ul style="list-style-type: none;" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="about_me.html">About Me</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="contact_me.html">Contact Me</a></li>
   </ul>
</div>
<div class="footer-nav">
   <h4>Contact</h4>
   <ul style="list-style-type: none;" role="list">
      <li><a href="contact_form.html">Contact Form</a></li>
      <li><a href="" id="phoneCallLink">Call Me</a></li>
      <li><a href="" id="phoneTextLink">Text Me</a></li>
   </ul>
</div>
<div class="footer-nav">
   <h4>Social Links</h4>
   <ul style="list-style-type: none;" role="list">
      <li><a href="https://www.linkedin.com/in/michael-cortez-15586b25b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="https://github.com/MikesTheCodingAddict" target="_blank" rel="noopener noreferrer">GitHub</a></li>
   </ul>
</div>
<div class="logo-and-copyright">
   <div class="imageWrapper">
      <img src="./images/websiteLogo/websiteLogoFull.jpeg" class="websiteLogoFullImage" alt="Website logo.">
   </div>
   <p>
      &copy; 2026 Michael Cortez, All rights reserved.
   </p>
</div>`;