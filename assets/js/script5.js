var hour = new Date().getHours();

if (hour >= 6 && hour <= 12) {
  alert("Good morning!")
}

else if (hour >= 12 && <= 18) {
  alert("Good day!")
}

else {
  alert("Good evening!")
}
