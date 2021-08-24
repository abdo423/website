let submitButton = document.getElementById("button");
let arr = JSON.parse(localStorage.getItem("data")) || [];

submitButton.addEventListener("click", () => {
	let email = document.getElementById("em").value;
	let pass = document.getElementById("password").value;
	let found = false;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].email == email) {
			found = true;
			if (arr[i].pass == pass) {
				// alert("login succesfully")
				window.location.href = "./home.html";
				break;
			} else {
				alert("wrong username or password");
				break;
			}
		}
	}
});
