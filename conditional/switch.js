let tipofruta = 'Maçã';

switch (tipofruta) {
  case "Laranja":
     console.log("O quilo da laranja está R$0,59.\n");
     break;
  case "Maçã":
     console.log("O quilo da maçã está R$0,32.\n");
     break;
  case "Banana":
     console.log("O quilo da banana está R$0,48.\n");
     break;
  case "Cereja":
     console.log("O quilo da cereja está R$3,00.\n");
     break;
  case "Manga":
     console.log("O quilo da manga está R$0,56.\n");
      break;
  case "Mamão":
     console.log("O quilo do mamão está R$2,23.\n");
     break;
  default:
     console.log("Desculpe, não temos " + tipofruta + ".\n");
}
console.log("Gostaria de mais alguma coisa?\n");