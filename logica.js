nota1 = 8.0
nota2 = 8.0

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

console.log("Seu desempenho foi", conceito, "com média", media)