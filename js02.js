/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Anna Moore
      Date:   2/2/2026

      Filename: js02.js
 */
// set the form's default values

function setupForm() {
      document.getElementById("photoNum").value=1;
      document.getElementById("photoHrs").value=2;
      document.getElementById("makeBook").checked=false;
      document.getElementById("photoRights").checked=false;
      document.getElementById("photoDist").value=0;

}
//setup form when page loads

window.addEventListener("load",setupForm);

//declare global constants for the app
const EMP_COST = 100; //photographer per hour
const BOOK_COST=350; //memory book cost
const REPRO_COST=1250; //cost of reproduction rights
const TRAVEL_COST=2; //cost per mile travelled

//estimate total cost of service
function getEstimate() {
      let totalCost=0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance=document.getElementById("photoDist").value;
      //add costs for hours and distance
      totalCost+= photographers * hours * EMP_COST;
      totalCost+= photographers * distance * TRAVEL_COST;
}