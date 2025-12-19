// --- DATOS Y ARRANQUE (BD está en memoria -en un array de objetos-, sino, la tendríamos en un servidor tipo supaBase) ---
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
    edad: 0.4,
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
    edad: 0.7,
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

// --- CLASES ---
class Perro {
  constructor({ id, imagen, edad, nombre, raza, sexo, tamaño, cualidades, descripcion, tasa }) {
    this.id = id;
    this.imagen = imagen;
    this.edad = edad;
    this.nombre = nombre;
    this.raza = raza;
    this.sexo = sexo;
    this.tamaño = tamaño;
    this.cualidades = cualidades;
    this.descripcion = descripcion;
    this.tasa = tasa;
  }

  cardFiltro() {
    const card = document.createElement("div");
    card.classList.add("card");
    const tagsHTML = [];
    this.cualidades.slice(0, 2).forEach((cualidad) => {
      tagsHTML.push(`<span class="tag-pequeño">${cualidad}</span>`);
    });

    const edadTexto =
      this.edad < 1
        ? `${Math.round(this.edad * 12)} meses`
        : `${this.edad} año${this.edad !== 1 ? "s" : ""}`;

    card.innerHTML = `
      <img class="card-img" src="${this.imagen}" alt="${this.nombre}">
      <span class="edad">${edadTexto}</span>
      <h3>${this.nombre}</h3>
      <p class="raza">${this.raza}</p>
      <p class="caracteristicas">${this.sexo} ${this.tamaño}</p>
      ${tagsHTML.join("")}
      <button class="btn-perfil">Ver Perfil</button>
    `;
    return card;
  }

  cardVerPerfil() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const tagsHTML = [];
    this.cualidades.forEach((cualidad) => {
      tagsHTML.push(`<span class="tag">${cualidad}</span>`);
    });

    const edadTexto =
      this.edad < 1
        ? `${Math.round(this.edad * 12)} meses`
        : `${this.edad} año${this.edad !== 1 ? "s" : ""}`;

    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <img class="modal-img" src="${this.imagen}" alt="${this.nombre}">
        <div class="modal-header">
          <h2>${this.nombre}</h2>
          <span class="modal-raza">${this.raza}</span>
          <span class="modal-tasa">Tasa: ${this.tasa}€</span>
        </div>
        <div class="modal-caracteristicas">
          <span>${edadTexto}</span>
          <span>${this.sexo}</span>
          <span>${this.tamaño}</span>
        </div>
        <h4>Mi Historia</h4>
        <p>${this.descripcion}</p>
        <h4>Mis Cualidades</h4>
        ${tagsHTML.join("")}
        <button class="btn-adoptar">Solicitar Adopción</button>
        <div class="modal-info-tasa">
          Tasa de adopción incluye vacunas, chip y esterilización.
        </div>
      </div>
    `;

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => modal.remove());

    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.remove();
    });

    return modal;
  }
}

class Refugio {
  constructor(perros) {
    this.perros = [];
    perros.forEach((p) => {
      this.perros.push(new Perro(p));
    });
    this.contenedorCards = document.getElementById("perros");
    this.renderizarCards(this.perros);
  }

  renderizarCards(listaPerros) {
    this.contenedorCards.innerHTML = "";
    listaPerros.forEach((perro) => {
      const cardElement = perro.cardFiltro();
      this.contenedorCards.appendChild(cardElement);

      const btnPerfil = cardElement.querySelector(".btn-perfil");
      btnPerfil.addEventListener("click", () => {
        const modalExistente = document.querySelector(".modal");
        if (!modalExistente) {
          const modal = perro.cardVerPerfil();
          document.body.appendChild(modal);
        }
      });
    });
  }
}

class Filtro {
  constructor(refugio) {
    this.refugio = refugio;
    this.filtroTamaño = document.getElementById("filtro-tamaño");
    this.filtroEdad = document.getElementById("filtro-edad");
    this.filtroSexo = document.getElementById("filtro-sexo");
    this.btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");

    this.filtroTamaño.addEventListener("change", () => this.aplicarFiltros());
    this.filtroEdad.addEventListener("change", () => this.aplicarFiltros());
    this.filtroSexo.addEventListener("change", () => this.aplicarFiltros());
    this.btnLimpiarFiltros.addEventListener("click", () =>
      this.limpiarFiltros()
    );
  }

  aplicarFiltros() {
    const valores = {
      tamaño: this.filtroTamaño.value,
      edad: this.filtroEdad.value,
      sexo: this.filtroSexo.value,
    };

    const filtrados = this.refugio.perros.filter((perro) => {
      const matchTamaño =
        valores.tamaño === "todos" || perro.tamaño === valores.tamaño;
      const matchSexo =
        valores.sexo === "cualquiera" || perro.sexo === valores.sexo;

      let matchEdad = true;
      if (valores.edad === "cachorro") matchEdad = perro.edad < 1;
      else if (valores.edad === "joven")
        matchEdad = perro.edad >= 1 && perro.edad <= 3;
      else if (valores.edad === "adulto")
        matchEdad = perro.edad >= 4 && perro.edad <= 8;
      else if (valores.edad === "senior") matchEdad = perro.edad > 8;

      return matchTamaño && matchSexo && matchEdad;
    });

    this.refugio.renderizarCards(filtrados);
  }

  limpiarFiltros() {
    this.filtroTamaño.value = "todos";
    this.filtroEdad.value = "todas";
    this.filtroSexo.value = "cualquiera";
    this.refugio.renderizarCards(this.refugio.perros);
  }
}

//EL MOTOR
//new Refugio crea una nueva instacia de la clase Refugio, pasando el array perros como argumento del constructor
//new Filtro se encarga de gestionar los filtros, recibe la instancia de Refugio para poder llamar a su método renderizarCards
const refugio = new Refugio(perros);
new Filtro(refugio);
