//LÓGICA DEL BOTÓN DEL MENÚ DESPLEGABLE

// 1. Encuentra el botón por su id
const btnMenu = document.getElementById("btn-menu");

// 2. Añade el evento clic directamente
btnMenu.onclick = () => {
  // cambiar el style del menú desplegable a display:none/block
  const menuDesplegable = document.getElementById("nav");
  if (menuDesplegable.style.display === "block") {
    menuDesplegable.style.display = "none";
    btnMenu.src = "img/svg/menu.svg";
  } else {
    // cambio de estilo de CSS en HTML
    menuDesplegable.style.display = "block";
    // cambiar el contenido del atributo src de la imagen (menu.svg a menuX.svg)
    btnMenu.src = "img/svg/menuX.svg";
  }
};

// LÓGICA DE LAS CARDS DE PERROS

// Array con los datos de los perros
const perros = [
  {
    id: 1,
    imagen: "../img/perro.avif",
    edad: 2,
    nombre: "Roko",
    raza: "Mestizo",
    sexo: "Macho",
    tamaño: "Mediano",
    cualidades: ["Activo", "Juguetón", "Sociable"],
    descripcion:
      "Roko es un mestizo lleno de energía y amor. Fue rescatado de una carretera secundaria. Le encanta correr y jugar a la pelota.",
    tasa: 120,
  },
  {
    id: 2,
    imagen: "../img/perro2.avif",
    edad: 4,
    nombre: "Luna",
    raza: "Labrador",
    sexo: "Hembra",
    tamaño: "Grande",
    cualidades: ["Cariñosa", "Tranquila", "Obediente"],
    descripcion:
      "Luna es una labrador muy dulce que busca un hogar donde recibir mucho cariño.",
    tasa: 150,
  },
  {
    id: 3,
    imagen: "../img/perro3.avif",
    edad: 1,
    nombre: "Max",
    raza: "Beagle",
    sexo: "Macho",
    tamaño: "Pequeño",
    cualidades: ["Curioso", "Alegre", "Activo"],
    descripcion: "Max es un cachorro beagle muy curioso y lleno de energía.",
    tasa: 100,
  },
  {
    id: 4,
    imagen: "../img/perro4.avif",
    edad: 3,
    nombre: "Maya",
    raza: "Bulldog",
    sexo: "Hembra",
    tamaño: "Mediano",
    cualidades: ["Leal", "Protector", "Calmado"],
    descripcion:
      "Maya es una bulldog leal y protectora que busca una familia que la cuide.",
    tasa: 130,
  },
  {
    id: 5,
    imagen: "../img/perro5.avif",
    edad: 5,
    nombre: "Rocky",
    raza: "Pastor Alemán",
    sexo: "Macho",
    tamaño: "Grande",
    cualidades: ["Inteligente", "Fuerte", "Valiente"],
    descripcion:
      "Rocky es un pastor alemán inteligente y valiente, ideal para familias activas.",
    tasa: 160,
  },
  {
    id: 6,
    imagen: "../img/perro6.avif",
    edad: 2,
    nombre: "Nala",
    raza: "Golden Retriever",
    sexo: "Hembra",
    tamaño: "Grande",
    cualidades: ["Amistosa", "Juguetona", "Leal"],
    descripcion:
      "Nala es una golden retriever muy amistosa y juguetona, perfecta para familias con niños.",
    tasa: 140,
  },
  {
    id: 7,
    imagen: "../img/perro7.avif",
    edad: 3,
    nombre: "Toby",
    raza: "Dálmata",
    sexo: "Macho",
    tamaño: "Mediano",
    cualidades: ["Energético", "Sociable", "Curioso"],
    descripcion:
      "Toby es un dálmata lleno de energía y curiosidad, ideal para familias activas.",
    tasa: 125,
  },
  {
    id: 8,
    imagen: "../img/perro8.avif",
    edad: 4,
    nombre: "Bella",
    raza: "Cocker Spaniel",
    sexo: "Hembra",
    tamaño: "Pequeño",
    cualidades: ["Cariñosa", "Tranquila", "Obediente"],
    descripcion:
      "Bella es una cocker spaniel muy cariñosa y obediente, perfecta para hogares tranquilos.",
    tasa: 115,
  },
];

//crear Class para Cards de perros del main de la index.html
class Card {
  constructor(id, imagen, edad, nombre, raza, sexo, tamaño, cualidades, descripcion, tasa
  ) {
    this.id = id;
    this.imagen = imagen;
    this.edad = edad;
    this.nombre = nombre;
    this.raza = raza;
    this.sexo = sexo;
    this.tamaño = tamaño;
    this.cualidades = cualidades; // Array: ['Activo', 'Juguetón', 'Sociable']
    this.descripcion = descripcion;
    this.tasa = tasa;
  }

  //Método para la card con filtros, donde se mete el HTML
  cardFiltro() {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${this.imagen}" alt="${
      this.nombre
    }" style="width: 20%; height: 200px; object-fit: cover;">
            <div class="info-lista">
                <span class="edad">${this.edad} años</span>
                <h3>${this.nombre}</h3>
                <p class="raza">${this.raza}</p>
                <p class="caracteristicas">${this.sexo} • ${this.tamaño}</p>
                <div class="cualidades-lista">
                    ${this.cualidades
                      .slice(0, 2) // Solo los 2 primeros elementos del array, luego en cardVerPerfil se muestran los 3
                      .map((c) => `<span class="tag-pequeño">${c}</span>`)
                      .join("")}
                </div>
                <button class="btn-perfil">Ver Perfil</button>
            </div>
        `;

    return card;
  }

  //Método para ver el perfil completo del perro
}

//Ejemplo de card, con un bucle para crear todas las cards

const contenedorCards = document.querySelector("#perros");

// Crear una card para cada perro usando forEach
perros.forEach((perro) => {
  const card = new Card(
    perro.id,
    perro.imagen,
    perro.edad,
    perro.nombre,
    perro.raza,
    perro.sexo,
    perro.tamaño,
    perro.cualidades,
    perro.descripcion,
    perro.tasa
  );

  // Renderizar la card en la página
  contenedorCards.appendChild(card.cardFiltro());
});
