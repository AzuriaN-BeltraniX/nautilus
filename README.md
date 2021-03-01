# **Proyecto: Nautilus**

**_Aplicacion multiplataforma para la gestion de distintos giros comerciales_**

 ## Descripcion:
Proyecto Nautilus contiene una aplicacion cliente-servidor del tipo MVC(model-view-controller) via http y consta de dos partes:

* **_servidor backend desarrolado en Node.JS v14.4.0 y MongoDB_**
* **_cliente frontend desarrollado con Ionic Framework_** 


El servidor-backend node esta alojado en la carpeta raiz, y el cliente-frontend Ionic reside en la carpeta "frontend"

El directorio "/www" contiene el cliente compilado (Ionic build) y es la carpeta raiz al navegar a la url del proyecto.

Descripcion mas detallada disponible en futuras versiones.

----

* ## Instalacion:
Ejecutar desde carpeta raiz
```
    npm install
```

---

* ## **v1.0.0 - _"Sistema básico":_**
    * Incluye:
        * Sistema de Usuarios:
            * _Registro de usuarios._
            * _Inicio de sesión._
            * _Actualización de datos de perfil._
        * Sistema de Médicos:
            * _Registro de Médicos._
            * _Actualización de datos del Médico._
        * Sistema de Pacientes:
            * _Registro de pacientes dependiendo de algún médico ya registrado._
            * _Actualización de datos del paciente._
        * Generación de Tokens (JWT).
        * Sistema de Rutas para peticiones HTTP.
        * Sistema de subida de archivos:
            * _Acepta archivos de imagen: **jpg, jpeg, png, gif.**_
            * _Ruta para visualizar las imágenes subidas mediante una URL._
        * Sistema de mantenimiento de Usuarios:
            * _Actualiza datos, incluyendo imágenes, de los usuarios registrados._
            * _Eliminación de usuarios registrados en la aplicación._
            * _Proporcionar privilegios de Administrador o Común._
        * Sistema de mantenimiento de Médicos:
            * _Actualiza datos, incluyendo imágenes, de los médicos registrados._
            * _Eliminación de médicos registrados en la aplicación._
        * Sistema de mantenimiento de Pacientes:
            * _Actualiza datos, incluyendo imágenes, de los pacientes registrados._
            * _Eliminación de pacientes registrados en la aplicación._
        * Creación de _BRANCH_: **desarrollo-isaac**
