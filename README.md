# Reto NodeJS - HTTP Requests - Bases de Datos
# Segunda Versión (Node + Typescript)

## Instrucciones

- Para instalar dependencias: ```npm install ``` o  ```npm i ``` \

## En modo desarrollo
- Por tener Typescript, considere primero generar la versión Javascript por transpilación: 
- Correr modo desarrollador: ```npm run dev ```
- Para apagar servidor, presionar la combinación de teclas ```Ctrl + C``` o en ```Command + C``` en Mac \

## En modo desarrollo 
- Precondición: haber probado el **modo desarrollo**
- Arrancar la aplicación en modo producción:  ```npm run start ```
- El servidor se apaga una vez logra el objetivo de decodificar el código secreto. 

## Salida de sistema
- Visualizar código secreto obtenido y comparar la pista obtenida por medio de un endpoint.


## Bases de datos
- Redis
- Mongo DB 

## Funcionamiento
- Realiza solicitud http a un endpoint para obtener las credenciales de acceso a una BD en redis.
- Con las credenciales anteriores, toma unas credenciales para acceder a una colección en un cluster de MongoDB.
- Accede a la BD y a la colección objetivo para obtener el campo requerido referente al código.
- Decodifica el código secreto y lo muestra.



Reto:
NodeJS - HTTP Requests -Bases de Datos \
[Enlace Reto](https://paper.dropbox.com/doc/Reto-de-Node-HTTP-y-Bases-de-Datos-p9dWNgBSNXj8ZpZfK9C60) \
[Enlace versión original](https://github.com/ht1204/reto-node)