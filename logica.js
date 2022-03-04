var listaDeNomes = ["Vinicius", "Deborah", "Gabriel", "Brida"]
var listaDeNotas = [ [2.5,2.0], [4.5,7.5], [8.5,7.0], [10,10] ]

for(num=0; num < listaDeNomes.length; num++) {

  alunoSelecionado = num

nomeDoAluno = listaDeNomes[alunoSelecionado]
notaDoAluno = listaDeNotas [alunoSelecionado]

nota1 = notaDoAluno[0]
nota2 = notaDoAluno[1]
media = (nota1 + nota2) / 2

conceito = ""

if (media <= 4.0) 
    { conceito = "Ruim" }

else if (media <=7.0)
    { conceito = "Regular" }

else if (media <=8.0)
    { conceito = "Bom" }

else
    { conceito = "Excelente" }

  
console.log(nomeDoAluno,":")
console.log("Nota da primeira prova :", nota1)
console.log("Nota da segunda prova :", nota2)
console.log("Sua média final é :", media)

switch (conceito) {
  case "Ruim": 
    console.log("Precisa estudar mais.")
  break;

  case "Regular": 
    console.log("Esta quase lá.")
  break;

  case "Bom": 
    console.log("Continue assim.")
  break;

  case "Excelente": 
    console.log("Mandou bem.")
  break;
}  

console.log("")

}