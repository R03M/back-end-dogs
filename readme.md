# API for Dogs App **by Mr. Blue**

Api sobre razas de perros, en la que se puede :

| metodo/ruta | necesitas | Propósito                     |
| ----------- | --------- | ----------------------------- |
| GET/dogs    | n/a       | Consultar todas las razas (DB / <a href="https://api.thedogapi.com/v1/breeds" target="_blank" rel="noreferrer">API</a>)|
|GET/dogs?name=[NAME]|nombre de raza a buscar|Conseguir info de las razas que coincidan con la busqueda|
|GET/dogs/[:id]|idDog|Encuentra una raza por su id|
|POST/dogs|info por body|Crear una nueva raza|
|PUT/dogs/[:id]|idDog, info por body|Actualizar una raza en específico|
|DELETE/dogs/[:id]|idDog|Eliminar una raza en específico|
|GET/temperaments|n/a|Optener todos los temperamentos existentes|


## Arrancar el proyecto de manera local

0. Crear una nueva base de datos, en la consola de PostgreSQL ejecuta el comando `CREATE DATABASE dogs`. 

1. Instalar las dependencias, ejecuta el comando `npm install`.

2. Renombra el archivo `.env.template` a `.env`  y completa los valores. 

3. Ejecutar el comando `npm start`. 

4. Para visualizar el frontEnd descargar el repo <a href="https://github.com/MrBluegru/DogsApp-FrontEnd" target="_blank" rel="noreferrer">DogsApp-FrontEnd</a> 

## Tecnologias usadas

- NodeJS
- Express
- PostgreSQL
- Sequelize
