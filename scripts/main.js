/* Add this code right below the closing body tag </body> in order to display / run the javascript file 

<script src="scripts/main.js"></script>
*/

/* This function will cause an alert to pop up whenever you click anywhere in the HTML document that states to stop poking me */
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}