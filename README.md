Registro de Desarrolladores V1.0

Esta aplicacion permite Registrar, Editar, Listay y Eliminar Desarrolladores y las tecnologias que conocen.

El backend de la aplicacion esta desarrollado en nodejs ulizando la libreria express y se encarga de proporcionar los endopoints.

La datos son almacenados en una base no relacional MongoDB la cual se encuantra hosteada en cloud.mongo.db.

El frontend fue desarrollado utilizando reactjs y consta con la siguiente estructura: 
Cuenta con una sola pagina con un formulario para el registro y edicion de los desarrolladores. junto a este formulario se encuentra un listado de todos los registros, cada registro cuenta con una opcion para eliminar dicho registro. Para editar un registro hay que seleccionar el registro deseado en el listado, lo cual cargara la informacion en el formulario listo para editar y actualizar los datos

Ejecucion construccion y ejecucion del contenedor.

docker build -t APP_NAME .
docker run -p PUERTO:3000 -t APP_NAME 