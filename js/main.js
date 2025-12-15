// LÓGICA DEL BOTÓN DEL MENÚ DESPLEGABLE

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

//***************************************************/

// LÓGICA DE LAS CARDS DE PERROS

// Array con los datos de los perros como objetos. Es como tener una base de datos simple en memoria.
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
      "Roko es un mestizo lleno de energía y amor. Fue rescatado de una carretera secundaria. Le encanta correr y jugar a la pelota. Es ideal para una familia activa que disfrute de excursiones al campo. Se lleva bien con otros perros.",
    tasa: 120,
  },
  {
    id: 2,
    imagen: "../img/perro2.avif",
    edad: 4,
    nombre: "Luna",
    raza: "Galgo Español",
    sexo: "Hembra",
    tamaño: "Grande",
    cualidades: ["Tranquila", "Ideal Pisos", "Tímida"],
    descripcion:
      "Luna es una galga retirada de la caza. Es la definición de elegancia y calma. En casa es una 'alfombra', le encanta dormir horas y horas. Es algo tímida al principio con extraños, pero muy cariñosa cuando coge confianza. Ideal para piso.",
    tasa: 150,
  },
  {
    id: 3,
    imagen: "../img/perro3.avif",
    edad: 0.4, // 5 meses ≈ 0.4 años
    nombre: "Thor",
    raza: "Mix Pastor Alemán",
    sexo: "Macho",
    tamaño: "Grande",
    cualidades: ["Cachorro", "Inteligente", "Energía Alta"],
    descripcion:
      "¡Un torbellino de alegría! Thor es un cachorro que busca una familia con paciencia para enseñarle. Es muy inteligente y aprende rápido. Necesitará ejercicio y estimulación mental cuando crezca.",
    tasa: 180,
  },
  {
    id: 4,
    imagen: "../img/perro4.avif",
    edad: 3,
    nombre: "Nala",
    raza: "Podenco Andaluz",
    sexo: "Hembra",
    tamaño: "Mediano",
    cualidades: ["Cariñosa", "Familiar", "Leal"],
    descripcion:
      "Nala es pura dulzura. Los podencos son perros muy sensibles y leales. Le encanta olfatear en los paseos pero en casa es muy tranquila. Se lleva genial con niños y otros perros.",
    tasa: 120,
  },
  {
    id: 5,
    imagen: "../img/perro5.avif",
    edad: 1,
    nombre: "Coco",
    raza: "Terrier Mix",
    sexo: "Macho",
    tamaño: "Pequeño",
    cualidades: ["Senior", "Tranquilo", "Pequeño"],
    descripcion:
      "Coco es un abuelito que solo busca un sofá y mimos. A pesar de su edad, está sano y tiene mucho amor para dar. Paseos cortos y siestas largas son su rutina ideal. Perfecto para personas mayores.",
    tasa: 90,
  },
  {
    id: 6,
    imagen: "../img/perro5.avif",
    edad: 1,
    nombre: "Bimba",
    raza: "Labrador Retriever",
    sexo: "Hembra",
    tamaño: "Grande",
    cualidades: ["Sociable", "Niños OK", "Gatos OK"],
    descripcion:
      "Bimba es todo corazón. Una labradora joven, sociable y muy glotona. Se lleva bien con todo el mundo: perros, gatos y niños. Necesita una familia que controle su dieta y le dé mucho cariño.",
    tasa: 150,
  },
  {
    id: 7,
    imagen: "../img/perro6.avif",
    edad: 0.7, // 8 meses ≈ 0.7 años
    nombre: "Pintas",
    raza: "Mestizo",
    sexo: "Macho",
    tamaño: "Mediano",
    cualidades: ["Juguetón", "Cachorro", "Divertido"],
    descripcion:
      "Pintas apareció en una caja junto a sus hermanos. Es el último que queda por adoptar. Es un poco trasto pero muy divertido. Busca alguien que juegue mucho con él.",
    tasa: 120,
  },
  {
    id: 8,
    imagen: "../img/perro8.avif",
    edad: 5,
    nombre: "Dana",
    raza: "American Staffordshire",
    sexo: "Hembra",
    tamaño: "Mediano",
    cualidades: ["Leal", "PPP", "Carñosa"],
    descripcion:
      "Dana es una perra incomprendida. Es puro amor con las personas, le encantan los besos. Necesita licencia PPP para su adopción, pero te recompensará con una lealtad inquebrantable. Preferiblemente hija única.",
    tasa: 100,
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
      <img class="card-img" src="${this.imagen}" alt="${this.nombre}">
      <div class="info-lista">
        <span class="edad">${this.edad} años</span>
        <h3>${this.nombre}</h3>
        <p class="raza">${this.raza}</p>
        <p class="caracteristicas">${this.sexo} • ${this.tamaño}</p>
        <div class="cualidades-lista">
          ${this.cualidades
            .slice(0, 2)
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
                Solicitar Adopción
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

const contenedorCards = document.querySelector("#perros");

// --- FILTROS ---
const filtroTamaño = document.getElementById("filtro-tamaño");
const filtroEdad = document.getElementById("filtro-edad");
const filtroSexo = document.getElementById("filtro-sexo");
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");

// Función para filtrar perros según los selects
function filtrarPerros() {
  const tamañoSeleccionado = filtroTamaño.value;
  const edadSeleccionada = filtroEdad.value;
  const sexoSeleccionado = filtroSexo.value;

  // Si todos los filtros están en su valor por defecto, mostrar todos los perros
  const sinFiltros =
    (tamañoSeleccionado === "todos" || !tamañoSeleccionado) &&
    (edadSeleccionada === "todas" || !edadSeleccionada) &&
    (sexoSeleccionado === "cualquiera" || !sexoSeleccionado);

  let perrosFiltrados = perros;

  if (!sinFiltros) {
    perrosFiltrados = perros.filter((perro) => {
      // Tamaño
      const cumpleTamaño =
        tamañoSeleccionado === "todos" || perro.tamaño === tamañoSeleccionado;

      // Edad
      let cumpleEdad = true;
      if (edadSeleccionada === "cachorro") {
        cumpleEdad = perro.edad < 1;
      } else if (edadSeleccionada === "joven") {
        cumpleEdad = perro.edad >= 1 && perro.edad <= 3;
      } else if (edadSeleccionada === "adulto") {
        cumpleEdad = perro.edad >= 4 && perro.edad <= 8;
      } else if (edadSeleccionada === "senior") {
        cumpleEdad = perro.edad > 8;
      }

      // Sexo
      const cumpleSexo =
        sexoSeleccionado === "cualquiera" || perro.sexo === sexoSeleccionado;

      return cumpleTamaño && cumpleEdad && cumpleSexo;
    });
  }

  renderizarCards(perrosFiltrados);
}

// Renderiza una lista de perros (cards)
function renderizarCards(listaPerros) {
  contenedorCards.innerHTML = "";

  if (!listaPerros.length) {
    contenedorCards.innerHTML = `
      <div class="no-resultados">
        <p>No se encontraron perros con los filtros seleccionados.</p>
      </div>
    `;
    return;
  }

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
    cardElement.querySelector(".btn-perfil").addEventListener("click", () => {
      // Evitar múltiples modales abiertos
      if (!document.querySelector(".modal")) {
        const modal = card.cardVerPerfil();
        document.body.appendChild(modal);
      }
    });
  });
}

// Limpia los filtros y muestra todas las cards
function limpiarFiltros() {
  filtroTamaño.value = "todos";
  filtroEdad.value = "todas";
  filtroSexo.value = "cualquiera";
  renderizarCards(perros);
}

// Event listeners
filtroTamaño.addEventListener("change", filtrarPerros);
filtroEdad.addEventListener("change", filtrarPerros);
filtroSexo.addEventListener("change", filtrarPerros);
btnLimpiarFiltros.addEventListener("click", limpiarFiltros);

// Mostrar todas las cards al cargar la página
renderizarCards(perros);
