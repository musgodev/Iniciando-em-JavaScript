var listaDePessoas = ["Paulo", "Pedro", "Plinio"]
var listaDePeso = [55, 83, 95]
var listaDeAltura = [1.65, 1.7, 1.70]
var listaDeResultados = ["Muito abaixo do peso", "Abaixo do peso", "Peso Normal", "Acima do Peso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"]

for(let num=0; num < listaDePessoas.length; num++) {

clienteSelecionado = num

nomeDoCliente = listaDePessoas[clienteSelecionado]
pesoDoCliente = listaDePeso[clienteSelecionado]
alturaDoCliente = listaDeAltura[clienteSelecionado]
imcDoCliente = pesoDoCliente / (alturaDoCliente **2)



console.log("Nome:",nomeDoCliente)
console.log("Peso:",pesoDoCliente, "KG")
console.log("Altura:",alturaDoCliente, "M")



function calcularIMC (massa,altura) {
  
  var imc = pesoDoCliente / (alturaDoCliente **2)

  return imc
  
} 

resultado = ""
  
function verificarNivel(imcDoCliente) {


  if(imcDoCliente <= 16.9) 
    { nivel = 1
      resultado = listaDeResultados[0]}

  else if(imcDoCliente <= 18.4) 
    { nivel = 2
      resultado = listaDeResultados[1]}

  else if(imcDoCliente <= 24.9) 
    { nivel = 3
      resultado = listaDeResultados[2]}

  else if(imcDoCliente <= 29.9) 
    { nivel = 4
      resultado = listaDeResultados[3]}

  else if(imcDoCliente <= 34.9) 
    { nivel = 5
      resultado = listaDeResultados[4]}

  else if(imcDoCliente <= 40.0)  
    { nivel = 6
      resultado = listaDeResultados[5]}

  else   
    { nivel = 7
      resultado = listaDeResultados[6]}

  return nivel

  
} 
console.log("Seu IMC é de:", imcDoCliente)
console.log("E seu estágio é:", verificarNivel(imcDoCliente))
console.log("Resultado:", resultado)
console.log("")
}