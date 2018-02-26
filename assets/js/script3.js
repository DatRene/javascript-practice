var users = ['Ditte', 'Nicoline', 'Mathias'];
var userIndex = prompt('Write the user index');
console.log(users[userIndex]);

if (typeof(users[userIndex]) === "string") {
    alert("User exists, with user name: " + users[userIndex]);
}

else{
  alert("User does not exists.")
}
