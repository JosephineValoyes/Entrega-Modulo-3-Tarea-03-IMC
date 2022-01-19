function calcularIMC(){
  let peso;
  let estatura;
  let sexo;
  let edad;
  let resultadoIMC;
  let comentario;
  personas = []

  var persona = {
    "sexo": sexo,
    "edad": edad,
    "peso": peso,
    "altura": estatura
}

personas.push(persona);
console.log(persona)
localStorage.personas = JSON.stringify(personas);

  peso = document.getElementById("peso").value;
  estatura = document.getElementById("estatura").value;
  edad = document.getElementById("edad").value;
  sexo = document.getElementById("sexo").value;

  
  if(estatura != "" && peso != "") {
    estatura = parseInt(estatura) / 100;
    resultadoIMC = peso / Math.pow(estatura,2);
    document.getElementById("imc").innerHTML = resultadoIMC.toFixed(2);
  }

  if(resultadoIMC >18.5 && resultadoIMC <= 24.9) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " -saludable" + " EDAD"+ edad + " SEXO"+ sexo;
  
  } else if(resultadoIMC > 25.0 && resultadoIMC <= 29.9) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " -Con sobrepeso"+ " EDAD"+ edad + " SEXO"+ sexo;

  } else if(resultadoIMC > 30 && resultadoIMC <= 39.9) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Obeso"+ " EDAD"+ edad + " SEXO"+ sexo;

  } else if(resultadoIMC > 40 ) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Obesidad extrema o de alto riesgo"+ " EDAD"+ edad + " SEXO"+ sexo;
  
  } 
  document.getElementById("comentario").innerHTML = comentario;
  
}

