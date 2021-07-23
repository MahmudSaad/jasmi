let myBtn = document.getElementById("btn");
let myDiv = document.getElementById("test");
let user = {
    name : "Name",
    age : 30
    
};

myBtn.onclick = function () {
myDiv.innerHTML = `<h1 class = "col">${user.name}</h1>`;

}