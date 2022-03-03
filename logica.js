var listaDeNomes = [ "Karen", "Jenifer", "Lucas" ]
var listaDeNotas = [ [3.5,6.0], [6.5,7.5], [9.5,9.0] ]

alunoSelecionado = 0

nomeDoAluno = listaDeNomes [alunoSelecionado]
notaDoAluno = listaDeNotas [alunoSelecionado]

nota1 = notaDoAluno[0]
nota2 = notaDoAluno[1]
media = (nota1 + nota2) / 2

console.log(nomeDoAluno,":")
console.log("Nota da primeira prova :", nota1)
console.log("Nota da segunda prova :", nota2)
console.log("Sua média final é :", media)

conceito = ""

if (media <= 4.0) 
    { conceito = "Ruim" }

else if (media <=7.0)
    { conceito = "Regular" }

else if (media <=8.0)
    { conceito = "Bom" }

else
    { conceito = "Excelente" }


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