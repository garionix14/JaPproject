dummyGen();

function dummyGen(){
	if(users.length == 0 && articulos.length == 0 && favorites.length == 0){
		userGen();
		itemGen();
		favGen();
		persistData();
	}
}

function userGen(){
	addUser("user1", "12345", "user1@example.com");
	addUser("user2", "12345", "user2@example.com");
	addUser("user3", "12345", "user3@example.com");
	addUser("user4", "12345", "user4@example.com");
	addUser("user5", "12345", "user5@example.com");
}

function itemGen(){
	addItem(1,"Castle Crashers", "$60", "2D arcade game. Recorre tu el mundo en busca de tus princesas!", "recursos/juego1.png", true);
	addItem(2,"Nier:Automata", "$1000", "Juega la historia de los 3 androides 2B, 9S y A2 que luchan para recuperar su mundo!", "recursos/juego2.png", true);
	addItem(3,"Borderlands 2", "$500", "FPS, RPG, juego de acción y recolección! No te lo pierdas", "recursos/juego3.png", true);
	addItem(4,"The Witcher 3: Wild hunt", "$800", "Métente en la piel de un cazarrecomensas marginado en un mundo fantástico!", "recursos/juego4.png", false);
	addItem(5,"Dying Light", "$850", "Vaga por una ciudad, devastada por una misteriosa epidemia, en busca de suministros y elaborando tus propias armas para sobrevivir!", "recursos/juego5.png", false);
	addItem(6,"Grand Theft Auto V", "$750", "Explora este mundo abierto! Sigue la historia, participa en carreras... Las posibilidades son infinitas!", "recursos/juego6.png", false);
	addItem(7,"Yanderee Simulator", "Oferta: Free!!!", "Yanderee es un término usado para describir personas que ocultan una personalidad violenta y brutal.. Se protagonista en este simulador!", "recursos/juego7.png", false);
}

function favGen(){
	addFavorite("user1", 1);
	addFavorite("user1", 2);
}