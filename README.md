# Consumiendo API con NodeJS

###### Para este ejemplo práctico, aprenderás a consumir una API utilizando Node.js y Express, ademas el motor de plantillas EJS. Primero, asegúrate de tener instalado Node.js y Express en tu proyecto. Luego, instala EJS como motor de plantilla html y axios para ejecutar solicitud HTTP

# Instalar

    npm install express axios ejs cors


![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/resultado-api-nodejs.PNG)


### Para correr el proyecto solo ejecutas 

    npm install o npm i

### Ejecutar el proyecto

    node --watch app.js ---->Opcion 1
    node app.js    -----> Opcion 2
    npm run dev  ---> Opcion 3


### Notas

    La propiedad   "type": "module", en el archivo packege.json indica que estamos usando el sistema de modulos ECMAScript(ESM).
    Con el fin de  las palabras claves 'import' y 'export' para importar y exportar modulos respectivamente.
    Cuando usamos (ESM) algunas caracteriscticas de nodejs como require() y module.exports no estan disponibles, en su lugar estan import y export.
