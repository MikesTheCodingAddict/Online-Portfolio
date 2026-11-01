/* Author: Michael Cortez
   Filename: banner.js
   Last updated: Oct. 31, 2026 */

// Creating the banner.
const banner = document.createElement('details');
banner.className = 'banner';
banner.innerHTML = `<summary style="font-size: 0.8rem; padding: 0.2rem;" id="summaryBanner">
                    <b>IMPORTANT ANNOUCEMENT</b></summary>
                    <p>I'm happy to say that I have finished writing the fourth version of my website's code. 
                    This version I personally believe makes the third look half-baked in comparison. Setting 
                    my web developer's opinion aside &lpar;See what I did there&quest;&rpar;, I hope you like 
                    what I now have to offer here on my website. I worked tremendously hard on this project. Hehe.
                    <br>Anyway, enjoy browsing around here and feel free to leave me any constructive feedback 
                    via my contact form, which you can find linked on my Contact Me webpage. <h2>Have a great day!
                    </h2></p>`;

// Styling the banner.
banner.style.display = 'block'; // Determines the visibility of the banner.
banner.style.position = 'relative';
banner.style.zIndex = '9997';
banner.style.top = '0';
banner.style.marginLeft = '5px';
banner.style.marginRight = '5px';
banner.style.width = 'fit-content';
banner.style.borderBottomLeftRadius = '15px';
banner.style.borderBottomRightRadius = '15px';
banner.style.backgroundColor = 'yellow';
banner.style.color = 'black';
banner.style.fontSize = '1.2rem';
banner.style.textAlign = 'center';
banner.style.padding = '15px';
banner.style.justifySelf = 'center';
banner.style.alignSelf = 'center';
banner.style.cursor = 'pointer';

// Prepending the banner to the top of the webpage's body.
document.body.prepend(banner);

// Getting the summary tag.
const summaryTag = document.getElementById('summaryBanner');

// These two if statements responsively increases or decreases the font size of the summary tag and the details content after the summary tag.
if (window.matchMedia('(min-width: 1440px)').matches) {
    banner.style.fontSize = '1.6rem';
    summaryTag.style.fontSize = '2rem';
}
if (window.matchMedia('(min-width: 2560px)').matches) {
    banner.style.fontSize = '2.4rem';
    summaryTag.style.fontSize = '3rem';
}