let n: number = 0;
let i: number = 0;
let array: number[] = new Array(n);
let positivos: number = 0,
  negativos: number = 0,
  ceros: number = 0;

function cargarN() {
  n = Number(prompt("ingrese la longitud del arreglo"));
}

function ingresarValoresyVerificar() {
  for (i = 0; i < n; i++) {
    array[i] = Number(prompt("ingrese los valores a cargar en V:" + (i + 1)));
    console.log("usted ingreso " + array[i], "en la posicion " + (i + 1));
    if (array[i] > 0) {
      positivos++;
    } else if (array[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }
}

cargarN();
ingresarValoresyVerificar();
console.log(array);
console.log(
  "se ingresaron " + positivos,
  "positivos, " + negativos,
  "negativos, " + ceros,
  "ceros."
);
