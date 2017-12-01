function addItem(id, name, price, desc, img, isDestacado){
	var item = new Object();
	item.id = id;
	item.name = name;
	item.price = price;
	item.desc = desc;
	item.img = img;
	item.destacado = isDestacado;
	articulos.push(item);
}

function getItem (id) {
	var i=0;
	while(i < articulos.length && articulos[i].id != id){
		i++;
	}
	return (articulos[i]);
}

function getDestacados(){
	var destacados = [];
	for(var i = 0; i <= articulos.length -1; i++){
		if(articulos[i].destacado == true){
			destacados.push(articulos[i]);
		}
	}
	return destacados;
}

function getFiltered(filter){
	var filteredItems = [];
	for(var i = 0; i <= articulos.length -1; i++){
		if( articulos[i].name.includes(filter) ||  articulos[i].desc.includes(filter) ){
			filteredItems.push(articulos[i]);
		}
	}
	return filteredItems;
}

function printDestacados() {
	var destacados = getDestacados();
	var text = '';
	for(var i = 0; i <= destacados.length -1; i++){
		text += '<div class="card" style="width: 20rem;"><img class="card-img-top" src="'+destacados[i].img+'" alt="Card image cap"><div class="card-block"><h4 class="card-title">'+destacados[i].name+'</h4><p class="card-text">'+destacados[i].desc+'</p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+destacados[i].price+'</li></ul></div>';
	}
	document.getElementById("itemsdestacados").innerHTML = text;
}

function printOfertas() {
	var text = '';
	for (var i = 0; i <= articulos.length -1 ; i++) {
		if (i%3==0) {
			text += '<div class="col row rowCont">';
		}
		text += '<div class="card" style="width: 20rem;"><img class="card-img-top" src="'+articulos[i].img+'" alt="Card image cap"><div class="card-block"><h4 class="card-title">'+articulos[i].name+'<button type="button" class="btn btn-info" onclick="addFavorite(sessionStorage.getItem(\'username\'), '+articulos[i].id+')">Añadir a Favoritos</button>'+'</h4><p class="card-text">'+articulos[i].desc+'</p></div><ul class="list-group list-group-flush"><li class="list-group-item"><div class="pricestyle"><p>'+articulos[i].price+'</p></div></li></ul></div>';
		if (i != 0 && (i+1)%3 == 0) {
			text += '</div>';
		}
	}
	if (!(i != 0 && (i+1)%3 == 0)) {
		text += '</div>';
	}
	document.getElementById("ofertasdiv").innerHTML = text;
}

