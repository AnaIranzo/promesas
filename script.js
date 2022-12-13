//crear los divs para los ejercicios

let div1 = document.createElement("div1");
let img1 = document.createElement("img1")
document.querySelector('main').appendChild(div1);
document.querySelector("div1").appendChild(img1);

let div2 = document.createElement("div2");
document.querySelector('main').appendChild(div2)


let div3 = document.createElement("div3");
document.querySelector('main').appendChild(div3)


//LIST ALL BREEDS

// 1º - Imprimir por consola la lista de razas de todos los perros.

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((json) => console.log(json));

// 2º - Imprimir por consola una imagen random de una raza.

fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
  .then((res) => res.json())
  .then((product) => document.querySelector('div1').innerHTML = `<img src='${product.message}'/>`);
                                                                        //.src = `${product.message}`)

// 3º- Imprimir por consola todas las imágenes de una raza concreta.

fetch("https://dog.ceo/api/breed/collie/images")
  .then((res) => res.json())
  .then((product) => console.log(product.message));

function cambiarRazaImagenes(raza1) {
  fetch(`https://dog.ceo/api/breed/${raza1}/images`)
    .then((res) => res.json())
    .then((product) => console.log(product.message));
}
cambiarRazaImagenes("pitbull");
//4º - Y si ahora te pidieramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.

function cambiarRaza(raza) {
  fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
    .then((res) => res.json())
    .then((product) => console.log(product.message));
}

cambiarRaza("african");

//2. ¿Quieres saber mi información? Aquí la tienes.
//https://api.github.com/users/{username}.

 document.querySelector('#buscar').addEventListener('click',function(){
    searchUser(document.querySelector('#user').value)
 })


function searchUser(userName) {
   
    fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((user) => document.querySelector('div3').innerHTML = `<p>${user.login}</p> <p>${user.public_repos}</p> <img src='${user.avatar_url}'>`);
    
}  

// 3. Promesas, promesas y más promesas.
// Dada una lista de usuarios de github guardada en una array, utiliza 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.


// Objetivo: Usar Promise.all()
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// Pregunta. ¿cuántas promesas tendremos?
// Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.


// Pasos:

// Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
// Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
// Cuando Promise.all() haya terminado:
// Consigue que se imprima por consola la url del repositorio de cada usuario.
// Consigue que se imprima por consola el nombre de cada usuario.

let usuarios = fetch(`https://api.github.com/users`)

Promise.all([usuarios])
    .then(respuestas => {
        respuestas.map(respuesta => {
            console.log(respuesta.url, respuesta.login)
        })
    })



        