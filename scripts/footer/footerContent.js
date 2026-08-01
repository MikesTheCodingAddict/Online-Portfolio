/* This is my very first JavaScript file ever written! Let's try to have
   some fun with it (While learning along the way, of course)! */

/* UPDATE: I modified my JavaScript code here to teach myself more on
   how some of the exception handling features work through the
   experience of doing so. */

try {
   const footerDate = document.getElementById("footerDate");

   footerDate.textContent = "Created and run by Michael Cortez.";
   console.log("Footer content loaded successfully.");
} catch (exception) {
   console.error("An error occured trying to load the footer content: ", exception);
}