// Creating the banner.
const banner = document.createElement('div');
banner.className = 'banner';
banner.innerHTML = "<b><p>This website is currently under construction. Some content and features may not be available yet. Please check back later for updates. Thank you for your patience and understanding.</p></b>";

// Styling the banner.
banner.style.display = 'block'; // Determines the visibility of the banner.
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.backgroundColor = 'yellow';
banner.style.color = 'black';
banner.style.textAlign = 'center';
banner.style.padding = '10px 10px 10px 10px';
banner.style.justifySelf = 'center';
banner.style.transform = 'translateY(-4%)';

// Prepending the banner to the webpage.
document.body.prepend(banner);