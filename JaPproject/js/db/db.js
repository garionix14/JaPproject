var users = [];
var	articulos = [];
var favorites = [];

window.onload = recoverData();

function persistData(){
	localStorage.setItem('users', JSON.stringify(users));
	localStorage.setItem('items', JSON.stringify(articulos));
	localStorage.setItem('favs', JSON.stringify(favorites));
}

function recoverData(){
	users = retrieveArrayData(users, 'users');
	articulos = retrieveArrayData(articulos, 'items');
	favorites = retrieveArrayData(favorites, 'favs');
}

function retrieveArrayData(arr, name){
	var x = JSON.parse(localStorage.getItem(name));
	if(x != null){
		arr = x;
	}
	return arr;
}