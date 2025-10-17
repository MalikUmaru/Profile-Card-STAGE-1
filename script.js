function updateTime() {
  const timeDisplay = document.getElementById("user-time");
  timeDisplay.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
