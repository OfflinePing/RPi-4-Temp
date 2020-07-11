document.addEventListener('contextmenu', event => event.preventDefault());
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
eel.expose(update);
function update(text) {
	var fieldNameElement = document.getElementById('update');
	fieldNameElement.innerHTML = text;
}
function ddos(){
	var port = document.getElementById("PORT").value
	var ip = document.getElementById("IP").value
	var size = document.getElementById("SIZE").value
	var time = document.getElementById("TIME").value
	eel.StartDDOS(ip, port, size, time)
}
function sendmessage() {
	var amount = document.getElementById("amount").value
	var word = document.getElementById("word").value
	eel.WhatsappSpammer(word, amount)
}
function stop() {
	eel.StopDDOS()
}
function log() {
	var user = document.getElementById("User").value
	var pass = document.getElementById("Pass").value
	eel.Login(user, pass)
}
eel.expose(go);
function go() {
	window.location.href = "index.html";
}