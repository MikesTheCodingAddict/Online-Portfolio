/* This is my very first JavaScript file ever written! Let's try to have
   some fun with it (While learning along the way, of course)! */

/* I researched how to automatically update the date of when I update my
   website's code. 
   UPDATE: I modified my JavaScript code here to teach myself more on
   how some of the exception handling features work through the
   experience of doing so. */

try {
   document.getElementById("footerDate").textContent = "Created and run by Michael Cortez. Page last updated on " + document.lastModified + " EDT";
   console.log("Footer content loaded successfully.");
} catch (exception) {
   if (exception instanceof TypeError) {
      console.log("Footer content did not load properly.");
   } else {
      console.log("An unknown error occured trying to load the footer content.");
   }
}