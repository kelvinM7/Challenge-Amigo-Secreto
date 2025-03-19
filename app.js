// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //array para alamcenar los nombres


//agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //if para validar que el campo no esta vacio
    if (nombreAmigo === "") {
        alert("Por favor inserte un nombre valido");
        return;

    }


    amigos.push(nombreAmigo); //para agregar el nombre al array

    actualizarLista();

    //para limpiar los campos de entrada
    inputAmigo.value = ""; 
    inputAmigo.focus();


}

// para actualizar la lista que sera visual
function actualizarLista () {
 const listaAmigoUl = document.getElementById ("listaAmigos")
 listaAmigoUl.innerHTML = "";

 amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigoUl.appendChild(li);

 });

}

// para sortear amigo
function sortearAmigo() {
  if (amigos.length === 0){
    alert("No hay amigos para sortear. Agregar nombres primero.");
    return
  }

  const indiceAleatorio = Math.floor(Math.random()* amigos.length); //crea un indice aleatorio
  
  const amigoSorteado = amigos[indiceAleatorio]; //para obetener el nombre sorteado

  const resultadoUl = document.getElementById("resultado");
  resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}


//asigna los eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
  });