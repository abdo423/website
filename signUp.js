const hello = document.getElementById("submit");

hello.addEventListener("click", () => {
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass").value;
	let data = JSON.parse(localStorage.getItem("data")) || [];
	let newData = {
		firstName: fname,
		lastName: lname,
		email: email,
		pass: pass,
	};
	data.push(newData);
	localStorage.setItem("data", JSON.stringify(data));
	console.log("Hi");
	window.location.href = "./login.html";
});
