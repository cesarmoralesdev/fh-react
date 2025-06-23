
https://getbootstrap.com/

si la funcion increment, no tiene parametros por defecto envia el parametro event y podemos enviarlo de cualquiera de las siguientes 2 formas:
onClick={(event) => increment(event)}
onClick={increment}

Si la funcion increment, tiene parametros, no podemos llamarlo de la forma anterior, la llamaremos de esta forma:
onClick={() => increment(2)}



