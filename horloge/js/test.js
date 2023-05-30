
//------------------------------------------------------------------------------------------------
// Get elements from the DOM
var hHour = document.getElementById("hour");
var hMin = document.getElementById("min");
var hSec = document.getElementById("sec");

// Function to update the time
function updateTime() {
  var currentDate = new Date();
  var hour = currentDate.getHours();
  var min = currentDate.getMinutes();
  var sec = currentDate.getSeconds();

  // Insert hour, min, and sec into the HTML elements
  hHour.innerHTML = hour;
  hMin.innerHTML = min;
  hSec.innerHTML = sec;
}

// Initial call to update the time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);






