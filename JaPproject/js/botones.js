var botones = [];
inicializarBotones();
crearBotones();

function addBotones (nombrebtn, linkbtn, event) {
	var btn = new Object();
	btn.name = nombrebtn;
	btn.link = linkbtn;
	btn.event = event;
	botones.push(btn);
}

function inicializarBotones () {
	if (botones.length == 0) {
		addBotones ("Inicio", "index.html", "#");
		addBotones ("Ofertas", "ofertas.html", "#");
		addBotones ("Nosotros", "chanma.html", "#");
		if(userIsLoggedOn()){
			addBotones ("Favoritos", "favoritos.html", "#");
			addBotones ("Desconectar", "#", "logoutUser()");
		}else {
		addBotones ("Registrate", "registro.html", "#");
		addBotones ("Inicia sesion", "login.html", "#");
		}
	}
}

function crearBotones () {
	var text ="";
	for (var i = 0; i <= botones.length-1; i++) {
		text += '<li class="nav-item">';
		text += '<a class="nav-link"';
		text+=' href="'+botones[i].link+'"';
		if(botones[i].event != "#"){
			text+=' onclick="'+ botones[i].event +'"';
		}
		text+='>'+botones[i].name+'</a></li>';
	}
	document.getElementById('mainbtn').innerHTML=text;
}

function searchItems(){
	localStorage.setItem('search',document.getElementById("searchmenuimput").value);
	window.location = "galeria.html";
}
