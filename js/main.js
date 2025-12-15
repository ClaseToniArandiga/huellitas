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
  constructor(
    id,
    imagen,
    edad,
    nombre,
    raza,
    sexo,
    tamaño,
    cualidades,
    descripcion,
    tasa
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
  cardVerPerfil() {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-body">
          <div class="modal-img">
            <img src="${this.imagen}" alt="${this.nombre}">
          </div>
          <div class="modal-info">
            <div class="modal-header">
              <div>
                <h2>${this.nombre}</h2>
                <span class="modal-raza">${this.raza}</span>
              </div>
              <div>
                <span class="modal-tasa">Tasa: ${this.tasa}€</span>
              </div>
            </div>
            <div class="modal-caracteristicas">
              <span>${this.edad} años</span>
              <span>${this.sexo}</span>
              <span>${this.tamaño}</span>
            </div>
            <h4>Mi Historia</h4>
            <p>${this.descripcion}</p>
            <h4>Mis Cualidades</h4>
            <div class="modal-cualidades">
              ${this.cualidades
                .map((c) => `<span class="tag">${c}</span>`)
                .join("")}
            </div>
            <div class="modal-adoptar">
              <button class="btn-adoptar">
                🐾 Solicitar Adopción
              </button>
              <div class="modal-info-tasa">
                Tasa de adopción incluye vacunas, chip y esterilización.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Cerrar modal al hacer click en el botón de cerrar
    modal.querySelector(".modal-close").onclick = () => modal.remove();

    // Cerrar modal al hacer click fuera del contenido
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };

    return modal;
  }
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
  const cardElement = card.cardFiltro();
  contenedorCards.appendChild(cardElement);

  // Añadir evento al botón "Ver Perfil" de esta card
  cardElement.querySelector(".btn-perfil").addEventListener("click", () => {
    const modal = card.cardVerPerfil();
    document.body.appendChild(modal);
  });
});

// LÓGICA DE FILTROS DE BÚSQUEDA

// Obtener los elementos de los filtros
const filtroTamaño = document.getElementById("filtro-tamaño");
const filtroEdad = document.getElementById("filtro-edad");
const filtroSexo = document.getElementById("filtro-sexo");
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");

// Función para filtrar perros
function filtrarPerros() {
  const tamañoSeleccionado = filtroTamaño.value;
  const edadSeleccionada = filtroEdad.value;
  const sexoSeleccionado = filtroSexo.value;

  // Filtrar el array de perros
  const perrosFiltrados = perros.filter((perro) => {
    // Filtro por tamaño
    const cumpleTamaño =
      tamañoSeleccionado === "todos" || perro.tamaño === tamañoSeleccionado;

    // Filtro por edad
    let cumpleEdad = true;
    if (edadSeleccionada === "cachorro") {
      cumpleEdad = perro.edad <= 1;
    } else if (edadSeleccionada === "joven") {
      cumpleEdad = perro.edad >= 2 && perro.edad <= 4;
    } else if (edadSeleccionada === "adulto") {
      cumpleEdad = perro.edad >= 5;
    }

    // Filtro por sexo
    const cumpleSexo =
      sexoSeleccionado === "cualquiera" || perro.sexo === sexoSeleccionado;

    return cumpleTamaño && cumpleEdad && cumpleSexo;
  });

  // Renderizar las cards filtradas
  renderizarCards(perrosFiltrados);
}

// Función para renderizar cards
function renderizarCards(listaPerros) {
  // Limpiar contenedor
  contenedorCards.innerHTML = "";

  // Si no hay resultados, mostrar mensaje
  if (listaPerros.length === 0) {
    contenedorCards.innerHTML = `
      <div class="no-resultados">
        <p>No se encontraron perros con los filtros seleccionados.</p>
      </div>
    `;
    return;
  }

  // Crear cards para cada perro filtrado
  listaPerros.forEach((perro) => {
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

    const cardElement = card.cardFiltro();
    contenedorCards.appendChild(cardElement);

    // Añadir evento al botón "Ver Perfil"
    cardElement.querySelector(".btn-perfil").addEventListener("click", () => {
      const modal = card.cardVerPerfil();
      document.body.appendChild(modal);
    });
  });
}

// Función para limpiar filtros
function limpiarFiltros() {
  filtroTamaño.value = "todos";
  filtroEdad.value = "todas";
  filtroSexo.value = "cualquiera";
  renderizarCards(perros);
}

// Event listeners para los filtros
filtroTamaño.addEventListener("change", filtrarPerros);
filtroEdad.addEventListener("change", filtrarPerros);
filtroSexo.addEventListener("change", filtrarPerros);
btnLimpiarFiltros.addEventListener("click", limpiarFiltros);
