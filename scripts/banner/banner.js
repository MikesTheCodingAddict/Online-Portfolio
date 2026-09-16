// Creating the banner.
const banner = document.createElement('details');
banner.className = 'banner';
banner.innerHTML = `<summary style="font-size: 1.2em;" id="summaryBanner">
                    <b>IMPORTANT ANNOUCEMENT</b></summary>
                    <p>Author of the website here: I'm happy to say that I have finished writing the third version of my website's code. 
                    This was a few months' long endeavor. But it was very much worth it. I love how my website looks right now. Although, 
                    as I've stated on my website's source code GitHub repository, I am open to constructive criticism. Feel free to send 
                    me a message via the contact form I've written, which can be found on my Contact Me webpage.<br><h2>Have a great day!
                    </h2></p>`;

// Styling the banner.
banner.style.display = 'block'; // Determines the visibility of the banner.
banner.style.position = 'relative';
banner.style.zIndex = '9999';
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

// This is a function that dynamically expands the top banner on desktop screens.
const isDesktop = window.matchMedia('(min-width: 1024px)');

function desktopBreakpoint(event) { banner.open = event.matches; }
isDesktop.addEventListener('change', desktopBreakpoint);
desktopBreakpoint(isDesktop);

// Adjusting the font size of the summary tag.
const summaryTag = document.getElementById('summaryBanner');
summaryTag.style.padding = '0.2rem';

// These two if statements responsively increases or decreases the font size of the summary tag and the details content after the summary tag.
if (window.matchMedia('(min-width: 1440px)').matches) {
    banner.style.fontSize = '1.4rem';
    summaryTag.style.fontSize = '1.6rem';
}
if (window.matchMedia('(min-width: 2560px)').matches) {
    banner.style.fontSize = '1.8rem';
    summaryTag.style.fontSize = '3rem';
}