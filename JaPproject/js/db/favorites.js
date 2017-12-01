function addFavorite(username, itemid){
	if(userHasFavorites(username)){
		addNewItemToUser(username, itemid);
	}else{
		var favorito = new Object();
		favorito.username = username;
		favorito.items = [];
		favorito.items.push(itemid);
		favorites.push(favorito);
	}
	persistData();
}

function userHasFavorites(username){
	var i = 0;
	while(i <= favorites.length-1 && favorites[i].username != username){
		i++
	}
	return (i < favorites.length);
}

function addNewItemToUser(username, itemid){
	var i = 0;
	while(i <= favorites.length -1 && favorites[i].username != username){
		i++
	}

	if (favorites[i].items.indexOf(itemid) === -1) {
		favorites[i].items.push(itemid);
	}
}

function getFavItems(username) {
	var favItems = [];
	var i = 0;
	var j = 0;
	if (userHasFavorites(username)) {
		while(i <= favorites.length -1 && favorites[i].username != username){
		i++;
		}
		for (j = 0; j < favorites[i].items.length; j++) {
			favItems.push(getItem(favorites[i].items[j]));
		}
	}
	return (favItems);
}

function printFavoritos() {
	var favItems = getFavItems(sessionStorage.getItem('username'));
	var text = '';
	for (var i = 0; i <= favItems.length -1 ; i++) {
		/**Cuando i es múltiplo de 3, i%3==0*/
		if (i%3==0) {
			text += '<div class="col row rowCont">';	
		}																																																																																												
		text += '<div class="card" style="width: 20rem;"><img class="card-img-top" src="'+favItems[i].img+'" alt="Card image cap"><div class="card-block"><h4 class="card-title">'+favItems[i].name+'</h4><p class="card-text">'+favItems[i].desc+'</p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+favItems[i].price+'</li></ul></div>';
		if (i != 0 && (i+1)%3 == 0) {																																																															
			text += '</div>';
		}
	}
	if (!(i != 0 && (i+1)%3 == 0)) {
		text += '</div>';
	}
	document.getElementById("favoritosdiv").innerHTML = text;
}