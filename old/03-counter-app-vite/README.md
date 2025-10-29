
https://create-react-app.dev/docs/getting-started

https://vite.dev/

https://es.react.dev/reference/react-dom/components/common#react-event-object

https://es.legacy.reactjs.org/docs/hooks-intro.html

https://github.com/Klerith/react-intro-javascript/blob/master/src/bases/07-deses-arr.js

https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4

https://jestjs.io/

Nota de Actualización - Extensión de archivos
En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."


Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs


Para ver mas detalles al respecto pueden ir a https://nodejs.org/docs/latest/api/modules.html#enabling.

yarn add --dev jest

{
  "scripts": {
    "test": "jest"
  }
}

yarn add --dev babel-jest @babel/core @babel/preset-env

Testing para javascript, orientada a aserciones y mocks de funciones que necesito evaluar, por ejemplo que llego al backend
https://jestjs.io/docs/tutorial-react

yarn add --dev @testing-library/react

Testing componentes de React, orientada a interacciones de usuarios
https://testing-library.com/docs/react-testing-library/intro


--Inatalar para hacer pruebas al component, previamente configurar el archivo jest.config.js

yarn add -D jest-environment-jsdom
yarn add -D @babel/preset-react


solucion error:  Cannot find module '@testing-library/dom' from 'node_modules/@testing-library/react/dist/pure.js'

yarn add --dev @testing-library/dom

El siguiente codigo genera un snapshot, el cual genera un archivo con la foto actual del componente, por ejemplo si hubo un cambio, despues de generar la foto, saldra un error con la parte que esta distinta entre nuestro componente y el snapshot.
Esto es recomendable para componentes que no cambian tanto.
Si queremos actualizar la snapshot, presionamos u
expect( container ).toMatchSnapshot();

https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-5



