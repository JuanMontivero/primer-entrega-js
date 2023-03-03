var sumaEdades = 0;

for (var i = 1; i <= 5; i++) {
  var edad = parseInt(prompt("Ingrese la edad de la persona " + i + ":"));

  if (isNaN(edad) || edad <= 0) {
    alert("Ingrese una edad válida");
    i--; 
  } else {
    sumaEdades += edad;
  }
}

var promedioEdades = Math.round(sumaEdades / 5);  // Uso Math.round para que al calcular el promedio de edades redondee al numero entero mas cercano

console.log("El promedio de edades es " + promedioEdades);
