APUNTES

Instalar extension CSS Modules para autocompletado de clase module.

Al autcompletar pueden haver 2 casos:

.itemRow {
  .....
}
.item-text {
  .....
}

si la clse tiene un guion en su nombre los pone asi:
styles['item-text']
caso contrario, asi:
styles.itemRow



Codigo fuente del profesor:
https://github.com/DevTalles-corp/react-first-steps/tree/fin-seccion-04


