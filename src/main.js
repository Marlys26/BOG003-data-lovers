<<<<<<< HEAD
import { sortData} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
=======
import {sortData} from './data.js';
>>>>>>> 3b1e116 (Se comienza a crear y realizar funcionalidad de la ventana modal)
import data from './data/pokemon/pokemon.js';

//------------ Permite navegar por la galeria -------------------------
/*verifica si la cantidad de datos en el array es divisible por 6
  de lo contrario agrega datos vacios hasta se se cumpla la condicion*/
const check = (pokeData) => {
  while(pokeData.length % 6 != 0){
    pokeData.push('');
  }
  //copia de la data principal, elimina elemntos vacios
  let pokeDataInfo = pokeData.filter(el => el != '');
  //Retorna los datos que se usaran paa crear la galeria y la info de cada card
  return {pokeData, pokeDataInfo};
}

//Funcion que permite crear las card de cada pokemon
const pokeTemplate = (pokeData) => {

  //Contenedor que mostrara la list de pokemon
  const list = document.getElementById('pokemonList');

  //Ciclo que permite crear los divs necesarios para cada pokemon
  check(pokeData).pokeData.forEach((item) => {

    //se crea un div por cada pokemon
    let div = document.createElement('div');
    div.className = 'poke-div';
    //se agrega cada div al index.html
    list.appendChild(div);
    /*verifica si existe un dato vacio dentro del array y pone con opacidad 0
      el div que lo contiene*/
    if(item == ""){
      div.style.opacity = '0';
    }
  });

  /*Ciclo que permite mostrar toda la informacion de cada pokemon dentro
    de su div individual*/
  check(pokeData).pokeDataInfo.forEach((item, i) => {
    //Se obtiene cada div que contedra la info pokemon
    const pokeDiv = document.getElementsByClassName('poke-div')[i];
    // Div q contendra #pokedex y tipo/elemnto
    let divInfo = document.createElement('div');
    divInfo.className = 'info-div'
    //Se crean los elemento que contendran la info pokemon
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let imagen = document.createElement('img');
    //se obtiene el nombre, numero e imagen de la data
    h2.textContent = item.name;
    h3.textContent = '# ' + item.num;
    imagen.src = item.img;
    //se agrega cada div al index.html
    pokeDiv.appendChild(divInfo);
    divInfo.appendChild(h3);
    pokeDiv.appendChild(imagen);
    pokeDiv.appendChild(h2);

    //Ciclo que permite mostrar tipo/elemnto de cada pokemon
    item.type.forEach((element) => {
      let type = document.createElement('span');
      type.className = 'type';
      //---------------- primera letra mayuscula "capitalize" desde .js -----
      type.textContent = element[0].toUpperCase() + element.substring(1);
      document.getElementsByClassName('info-div')[i].appendChild(type);
    });

    //evento que permite aparecer la ventana modal
    let startModal = document.getElementsByClassName('poke-div')[i];
    startModal.addEventListener("click", () => modal(item.name));
  });

}

<<<<<<< HEAD
 // pokecards caracteristicas para cada pokemon.
   const pokeCard = data.pokemon[0];
  //  console.log(pokeCard);  

        check(data.pokemon).pokeDataInfo.forEach((item, i) => {
      //creo el div que contendra la informacion de cada pokemon
        const contentDiv = document.getElementById('content');
        const pokemonCard = document.createElement('div');
        pokemonCard.className =('bigCard');
        contentDiv.appendChild(pokemonCard);

        const twoDiv = document.createElement('div');
        twoDiv.className = 'twoDiv';
        pokemonCard.appendChild(twoDiv);
       

        
      // imagen de la bigcard
        let imagen = document.createElement('img');
        imagen.src = item.img;
        twoDiv.appendChild(imagen);
       // numero de pokemon card
        let h3 = document.createElement('h3');
        h3.textContent = '# ' + item.num;
        twoDiv.appendChild(h3);



       //nombre de la bigcard
        let h2 = document.createElement('h2');
        h2.textContent = item.name;
        twoDiv.appendChild(h2);

  //Poke stats 

const statsDiv = document.createElement('div');
statsDiv.className = 'statsDiv';
twoDiv.appendChild(statsDiv);


const batack = document.createElement('span');
batack.textContent = "Atack " + item.stats['base-attack'];
statsDiv.appendChild(batack);
 
const baseDefense = document.createElement('span');
baseDefense.textContent ="Defense " + item.stats['base-defense'];
statsDiv.appendChild(baseDefense);
 
const stamina = document.createElement('span');
stamina.textContent ="Stamina " + item.stats['stamina'];
 
const cp = document.createElement('span');
cp.textContent = "CP " + item.stats['max-cp'];
statsDiv.appendChild(cp);
 
const hp = document.createElement('span');
hp.textContent = "HP " + item.stats['max-hp'];
statsDiv.appendChild(hp);


// resistencia y debilidad 
item.resistant.forEach((element) => { 

let resistDiv = document.createElement('div');
resistDiv.className = 'resistDiv';
twoDiv.appendChild(resistDiv);

 let resistance = document.createElement('span');
  resistance.className = 'resist'
  resistance.textContent = element[0].toUpperCase() + element.substring(1);
   document.getElementsByClassName('twoDiv')[i].appendChild(resistance);
   if(element == "grass"){
    resistance.style.backgroundColor = '#73B050';
  }
  if(element == "poison"){
    resistance.style.backgroundColor = '#663366';
  }
  if(element == "fire"){
    resistance.style.backgroundColor = '#FF6900';
  }
  if(element == "flying"){
    resistance.style.background = 'linear-gradient(to bottom, #4079BF 40%, #424556 70%)';
  }
  if(element == "water"){
    resistance.style.backgroundColor = '#4079BF';
  }
  if(element == "bug"){
    resistance.style.backgroundColor = '#567F3B';
  }
  if(element == "normal"){
    resistance.style.backgroundColor = '#474851';
  }
  if(element == "electric"){
    resistance.style.backgroundColor = '#FFB600';
  }
  if(element == "ground"){
    resistance.style.background = 'linear-gradient(to bottom, #725003 40%, #FFB600 70%)';
  }
  if(element == "fighting"){
    resistance.style.backgroundColor = '#732222';
  }
  if(element == "psychic"){
    resistance.style.backgroundColor = '#C4377E';
  }
  if(element == "rock"){
    resistance.style.backgroundColor = '#725003';
  }
  if(element == "ice"){
    resistance.style.backgroundColor = '#95D6F9';
    resistance.style.color = 'black';
  }
  if(element == "ghost"){
    resistance.style.backgroundColor = '#5A4A77';
  }
  if(element == "dragon"){
    resistance.style.background = 'linear-gradient(to bottom, #474851 40%, #732222 70%)';
  }
  if(element == "fairy"){
    resistance.style.backgroundColor = '#C15B93';
  }
  if(element == "dark"){
    resistance.style.backgroundColor = '#1D1E21';
  }
  if(element == "steel"){
    resistance.style.background = 'linear-gradient(to bottom, #474851, white)';
    resistance.style.color = 'black';
  }
      


});
 item.weaknesses.forEach((element) => {
  
  let debility = document.createElement('span');
  debility.className = 'debility'
  debility.textContent = element[0].toUpperCase() + element.substring(1);
   document.getElementsByClassName('twoDiv')[i].appendChild(debility);
   if(element == "grass"){
    debility.style.backgroundColor = '#73B050';
  }
  if(element == "poison"){
    debility.style.backgroundColor = '#663366';
  }
  if(element == "fire"){
    debility.style.backgroundColor = '#FF6900';
  }
  if(element == "flying"){
    debility.style.background = 'linear-gradient(to bottom, #4079BF 40%, #424556 70%)';
  }
  if(element == "water"){
    debility.style.backgroundColor = '#4079BF';
  }
  if(element == "bug"){
    debility.style.backgroundColor = '#567F3B';
  }
  if(element == "normal"){
    debility.style.backgroundColor = '#474851';
  }
  if(element == "electric"){
    debility.style.backgroundColor = '#FFB600';
  }
  if(element == "ground"){
    debility.style.background = 'linear-gradient(to bottom, #725003 40%, #FFB600 70%)';
  }
  if(element == "fighting"){
    debility.style.backgroundColor = '#732222';
  }
  if(element == "psychic"){
    debility.style.backgroundColor = '#C4377E';
  }
  if(element == "rock"){
    debility.style.backgroundColor = '#725003';
  }
  if(element == "ice"){
    debility.style.backgroundColor = '#95D6F9';
    debility.style.color = 'black';
  }
  if(element == "ghost"){
    debility.style.backgroundColor = '#5A4A77';
  }
  if(element == "dragon"){
    debility.style.background = 'linear-gradient(to bottom, #474851 40%, #732222 70%)';
  }
  if(element == "fairy"){
    debility.style.backgroundColor = '#C15B93';
  }
  if(element == "dark"){
    debility.style.backgroundColor = '#1D1E21';
  }
  if(element == "steel"){
    debility.style.background = 'linear-gradient(to bottom, #474851, white)';
    debility.style.color = 'black';
  }

});
 });
=======
//Funcion que permite darle estilos al tipo/elemento pokemon
const typeStyle = () => {
  for (var i = 0; i < document.getElementsByClassName('type').length; i++) {
    let type = document.getElementsByClassName('type')[i];
    let nameType = document.getElementsByClassName('type')[i].textContent;

    //Se agregan estilos de acuerdo al tipo/elemento
    if(nameType == "Grass"){
      type.style.backgroundColor = '#73B050';
    }
    if(nameType == "Poison"){
      type.style.backgroundColor = '#663366';
    }
    if(nameType == "Fire"){
      type.style.backgroundColor = '#FF6900';
    }
    if(nameType == "Flying"){
      type.style.background = 'linear-gradient(to bottom, #4079BF 40%, #424556 70%)';
    }
    if(nameType == "Water"){
      type.style.backgroundColor = '#4079BF';
    }
    if(nameType == "Bug"){
      type.style.backgroundColor = '#567F3B';
    }
    if(nameType == "Normal"){
      type.style.backgroundColor = '#474851';
    }
    if(nameType == "Electric"){
      type.style.backgroundColor = '#FFB600';
    }
    if(nameType == "Ground"){
      type.style.background = 'linear-gradient(to bottom, #725003 40%, #FFB600 70%)';
    }
    if(nameType == "Fighting"){
      type.style.backgroundColor = '#732222';
    }
    if(nameType == "Psychic"){
      type.style.backgroundColor = '#C4377E';
    }
    if(nameType == "Rock"){
      type.style.backgroundColor = '#725003';
    }
    if(nameType == "Ice"){
      type.style.backgroundColor = '#95D6F9';
      type.style.color = 'black';
    }
    if(nameType == "Ghost"){
      type.style.backgroundColor = '#5A4A77';
    }
    if(nameType == "Dragon"){
      type.style.background = 'linear-gradient(to bottom, #474851 40%, #732222 70%)';
    }
    if(nameType == "Fairy"){
      type.style.backgroundColor = '#C15B93';
    }
    if(nameType == "Dark"){
      type.style.backgroundColor = '#1D1E21';
    }
    if(nameType == "Steel"){
      type.style.background = 'linear-gradient(to bottom, #474851, white)';
      type.style.color = 'black';
    }
  }
}
>>>>>>> 3b1e116 (Se comienza a crear y realizar funcionalidad de la ventana modal)

//se inicia contador
let num = 6
// se muestran los primeros 6 pokemon de la lista
const pokeGallery = () => {
  for(let i = num - 6; i < num; i++){
    document.getElementsByClassName('poke-div')[i].style.display = 'block';
  }
}

//Limpia galeria
const galleryClean = () =>{
  //volver a iniciar contador
  num = 6;
  //nodo padre
  let pokeList = document.getElementById('pokemonList');
  //ciclo que permite eliminar los nodos hijos
  //----------Mientras exista "poke-div" se repite el ciclo---------"
  while (document.getElementsByClassName('poke-div').length != 0) {
    pokeList.removeChild(document.getElementsByClassName('poke-div')[0]);
  }
}

/*Funcion que permite mostrar los siguientes 6 pokemon de la lista, y
oculta los anteriores 6*/
const following = () => {
  //Sale de la funcion si se supera el tamaño del array
  if(num == document.getElementsByClassName('poke-div').length){
    return
  }
  else {
    //Contador que permite avanzar por el array
    num += 6;
    //permite mostrar solo 6 pokemon en la pantalla
    for(let i = num - 6; i < num; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'block';
    }
    for(let i = num - 12; i < num - 6; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'none';
    }
  }
}

/*Funcion que permite mostrar los anteriores 6 pokemon de la lista, y
oculta los siguientes 6*/
const behind = () => {
  //Sale de la funcion si es menos de lo mostrado en pantalla
  if (num == 6){
    return
  }
  else{
    //Contador que permite retroceder por el array
    num -= 6;
    //permite mostrar solo 6 pokemon en la pantalla
    for(let i = num - 6; i < num; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'block';
    }
    for(let i = num; i < num + 6; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'none';
    }
  }

 

}

//Se llama el template de las card
pokeTemplate(data.pokemon);
//llamado de la funcion de estilos
typeStyle();
//llamado para la creacion d ela galeria
pokeGallery();

//Funciones que muestra los grupos de pokemon organizados alfabéticamente
const groupAD = () => {
  //Se hace el llamado para limpiar la galeria
  galleryClean();
  /*Se hace el llamado del template que toma por parametro la lista ordenada
  que retorna el "sortData"*/
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'abcd'));
  typeStyle();
  //se muestran las card por pantalla
  pokeGallery();
  }
// grupo E-H Navbar
const groupEH = () => {
  galleryClean();
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'efgh'));
  typeStyle();
  pokeGallery();
  }

  //grupo I-L navBar
const groupIL = () => {
galleryClean();
pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'ijkl'));
typeStyle();
pokeGallery();
}

//Grupo M-P navBar
const groupMP = () => {
  galleryClean();
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'mno'));
  typeStyle();
  pokeGallery();
  }

// Grupo Q-T navBar
const groupQT = () => {
  galleryClean();
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'pqr'));
  typeStyle();
  pokeGallery();
  }

//Grupo U-W navBar
const groupUW = () => {
  galleryClean();
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'stuv'));
  typeStyle();
  pokeGallery();
  }

  // Grupo X-Z navBar
const groupXZ = () => {
  galleryClean();
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'name', 'wxyz'));
  typeStyle();
  pokeGallery();
  }

    // Grupo A-Z navBar
const groupAZ = () => {
  galleryClean();
  pokeTemplate(data.pokemon);
  typeStyle();
  pokeGallery();
}

//Busqueda de pokemon por nombre
const pokeSearch = () => {
  galleryClean();
  //Se obtiene el nombre con el que se realizara la busqueda
  let pokeName = document.getElementById('search').value;
  //Se muestra result por pantalla
  pokeTemplate(sortData(check(data.pokemon).pokeDataInfo, 'searchName', pokeName));
  typeStyle();
  pokeGallery();
}

const modal = (name) => {
  let main = document.getElementById('main');
  let modalDiv = document.createElement('div');
  modalDiv.className = 'modal-div';
  let modalName = document.createElement('span');
  let p = document.createElement('p')
  //
  main.appendChild(modalDiv);
  modalDiv.appendChild(modalName);

  //
  let pokeData = check(data.pokemon).pokeDataInfo;
  pokeData.forEach((item) => {
    if (name == item.name) {
      modalName.textContent = item.name;

      item.type.forEach((element) => {
        let type = document.createElement('span');
        type.className = 'type';
        //---------------- primera letra mayuscula "capitalize" desde .js -----
        type.textContent = element[0].toUpperCase() + element.substring(1);
        modalDiv.appendChild(type);
      });

      item.resistant.forEach((element) => {
        let type = document.createElement('span');
        type.className = 'type';
        //---------------- primera letra mayuscula "capitalize" desde .js -----
        type.textContent = element[0].toUpperCase() + element.substring(1);
        p.appendChild(type);
      });
    }
  });
  modalDiv.appendChild(p);
  modalDiv.style.display = 'block';
  typeStyle();
}


//Evento que permite el funcionamiento del boton "adelante"
let btnFollowing = document.getElementById('following');
btnFollowing.addEventListener("click", following);

//Evento que permite el funcionamiento del boton "atras"
let btnBehind = document.getElementById('behind');
btnBehind.addEventListener("click", behind);

//Eventos que permite el funcionamiento del navBar para cada grupo de letras
let navAD = document.getElementById('ad');
  navAD.addEventListener("click", groupAD);

let navEH = document.getElementById('eh');
navEH.addEventListener("click", groupEH);

let navIL = document.getElementById('il');
navIL.addEventListener("click", groupIL);

let navMP = document.getElementById('mp');
navMP.addEventListener("click", groupMP);

let navQT = document.getElementById('qt');
navQT.addEventListener("click", groupQT);

let navVW = document.getElementById('uw');
navVW.addEventListener("click", groupUW);

let navXZ = document.getElementById('xz');
navXZ.addEventListener("click", groupXZ);

let navAZ = document.getElementById('az');
navAZ.addEventListener("click", groupAZ);

// funcion que permite ver el boton que haz seleccionado!!
let btnContainer = document.getElementById("allBtn");
let btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Evento que permite el funcionamiento del "search" en tiempo real
let inputSearch = document.getElementById('search');
inputSearch.addEventListener("keyup", pokeSearch);
