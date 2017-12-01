function addUser(username, password, mail){
	var user = new Object();
	user.name = username;
	user.mail = mail;
	user.password = password;
	users.push(user);
};
/*Registro de usuario*/
function registerUser() {
	recoverData();
	name = document.getElementById('username').value;
	password = document.getElementById('password').value;
	mail = document.getElementById('mail').value;
	if (userIsValid(name, password, mail)) {
		addUser(name, password, mail);
		persistData();
		window.location = "\exito.html";
	} else {
		document.getElementById("registerfail").innerHTML='<div class="alert alert-dismissible alert-danger">'+'<button type="button" class="close" data-dismiss="alert">&times;</button>'+'<strong>Oh rayos!</strong> <a href="#" class="alert-link">Cambia tus datos</a> e intentalo de nuevo!</div>';
	}
}

function userIsValid(name, password, mail) {
	var i=0;
	while( ( i <=(users.length-1) ) && name != users[i].name && mail != users[i].mail){
		i++;
	}
	return (i==users.length);
}
/*Inicio de sesion de usuario*/
function loginUser() {
	name = document.getElementById('username').value;
	password = document.getElementById('password').value;
	if (!userExist(name)) {
		alert ("El usuario o la contraseña son incorrectos");
	} else {
		var user = searchUsername(name);
		
		if (comparar(password, user.password)) {
			sessionStorage.setItem('isLogged','1');
			sessionStorage.setItem('username', name);
			window.location = "\exito.html";
		} else {
			document.getElementById("loginfail").innerHTML='<div class="alert alert-dismissible alert-danger">'+'<button type="button" class="close" data-dismiss="alert">&times;</button>'+'<strong>Oh rayos!</strong> <a href="#" class="alert-link">Cambia tus datos</a> e intentalo de nuevo!</div>';
		}
	}
}

function logoutUser(){
	sessionStorage.setItem('isLogged','0');
	window.location = "\login.html";
}

function userExist(name) {
	var i=0;
	while( ( i <=(users.length-1) ) && name != users[i].name){
		i++;
	}
	return ( i <=(users.length-1) );
}

function searchUsername(name) {
	var i=0;
	while( ( i <=(users.length-1) ) && name != users[i].name){
		i++;
	}
	return(users[i]);
}

function comparar(passworduser, passwordingresada) {

	return (passworduser == passwordingresada);

}

function userIsLoggedOn(){
	var x = sessionStorage.getItem('isLogged');
	return (x!=null && x=='1');
}