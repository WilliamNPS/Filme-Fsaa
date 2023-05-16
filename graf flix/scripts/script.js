
// Propriedade do cadastro
class Propriedade {
  constructor(tipo, area, ) {
    this.tipo = tipo;
    this.area = area;

  }
}

class App {
  addpropriedades() {
    event.preventDefault();
    let tipo = document.querySelector("select[name='tipo']").value;
    let area = document.querySelector("input[name='area']").value;
    let limpa = document.getElementById("naoexiste").innerHTML = "";

   
  
    let novaPropriedade = new Propriedade(tipo, area,limpa);

    this.propriedadelista(novaPropriedade);
    this.limparArea();
  }

  propriedadelista(propriedade) {
    //cria elemento
    let listar = document.createElement("li");
 
    let propriedadesInfor = "Seu Comentário " + propriedade.tipo + " Nivel de Satisfação  " + propriedade.area ;


    



    
    listar.innerHTML += propriedadesInfor;
    let buttonRemover = this.limpar();

    listar.appendChild(buttonRemover);

    document.getElementById("lista").appendChild(listar);
  }


  limpar() {
    let remover = document.createElement("button");
    remover.setAttribute("onclick", "app.remover()");
    remover.innerText = "remover";
    return remover;
  }

  limparArea() {
    document.querySelector("input[name='area']").value = "";

  }



  remover(){
      let liRemover = event.target.parentNode
      document.getElementById("lista").removeChild(liRemover)
    }
    
}






let app = new App


