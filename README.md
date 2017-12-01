# JaPproject
Proyecto de JaP 2017
Proyecto "Jóvenes a Programar"

G&R Game Shop

------------------------------------------------------------------------------------------
Descripción y funcionalidades principales:

El sitio creado es una tienda virtual de videojuegos. En este, los usuarios pueden
registrarse en el mismo, así como iniciar o cerrar sesión, a través de un "menú principal"
de botones, situado en la parte superior de la página.
El sitio cuenta con una página de inicio, en la cual se muestran las ofertas destacadas,
una página en dónde aparecen todas las ofertas que ofrece el sitio y un apartado en
dónde se muestra la información común de "¿Quiénes somos?" y demás.
En caso del usuario no están "loggeado" en el sitio, tendrá disponibles las opciones de
Registrse o iniciar sesión. En caso de estar loggeado, tendrá la opción de ir a la página
de "Favoritos" en dónde podrá ver los items que marcó como tal o la opción de cerrar sesión.

------------------------------------------------------------------------------------------

Guía de carpetas y archivos:

En la carpeta principal, JaPproject, encontraremos todos los ".html". Además veremos otras
3 carpetas; css, js y recursos.

En la primera, se encuentra, primeramente, una carpeta "bootstrap" con contenido referente
a bootstrap precisamente. Lo segundo es un archivo styles.css el cual contiene estilos 
particulares para la página.

En la segunda carpeta, js, encontramos 2 carpetas y un archivo .js. 
El archivo botones.js, contiene la funcionalidad de los botones del "menú principal".
La primer carpeta, bootstrap, nuevamente contiene archivos de bootstrap.
La segunda, "db", contiene otros archivos .js, referente a todas las funcionalidades de la
página. Estos están separados por funcionalidades; 
db.js para cargar los datos al abrir la página
dummy.js para trabajar con datos de prueba a la hora de usar probar la página, actualmente 
	sirve para guardar datos, como lo son los articulos o los usuarios.
favorites.js para manejar lo referente al manejo de articulos favoritos (añadir, corroborar
	mostrarlos, etc)
items.js para trabajar con lo referente a los artículos generales, como es el mostrar los
	destacados en el inicio o todos los archivos en el apartado de ofertas.
users.js para manejar el inicio, registro, cierre de sesión de los usuarios.

En la tercer carpeta, recursos, encontramos todas las imágenes utilizadas en el sitio.

------------------------------------------------------------------------------------------

Librerías utilizadas:

Bootstrap

------------------------------------------------------------------------------------------

Recursos Externos utilizados:

"Bootswatch" https://bootswatch.com/cosmo/
"w3 schools" https://www.w3schools.com/
"Steam" http://store.steampowered.com/?l=spanish

------------------------------------------------------------------------------------------

Otros:

Dificultades:
	Cómo fue nombrado en la defensa del proyecto, días previos a la defensa del mismo,
	mi equipo sufrió de un daño en el disco duro y perdí, literalmente, toda la página.
	El único backup se encontraba en un pendrive, el cual requirió de ser 
	formateado y luego olvidé guardar nuevamente los datos.
	La página tuvo que ser nuevamente creada desde cero, razón por la cual varias
	funcionalidades, como lo son la del carrito de compras o los filtrados de objetos
	no están terminadas ni funcionales, o que la página no sea 100% responsive.
