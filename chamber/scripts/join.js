const pwd1 = document.querySelector("#password1");
const pwd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pwd1.value !== pwd2.value) {
		message.textContent = "❗passwords DO NOT MATCH!";
		message.style.visibility = "show";
		pwd2.style.backgroundColor = "#fff0f3";
		pwd2.value = "";
		kpw2.focus();
	} else {
		message.style.display = "none";
		pwd2.style.backgroundColor = "#fff";
		pwd2.style.color = "#000";
	}
}
