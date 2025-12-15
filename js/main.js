const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav');

if (btnMenu && navMenu) {
  btnMenu.addEventListener('click', () => {
    const abierto = navMenu.style.display === 'block';
    navMenu.style.display = abierto ? 'none' : 'block';
    btnMenu.src = `img/svg/menu${abierto ? '' : 'X'}.svg`;
  });
}

//a partir de aqui el codigo de los perros


const dogsData = {
  roko: {
    id: 'roko',
    name: 'Roko',
    breed: 'Mestizo',
    age: 'joven',
    ageLabel: '2 años',
    tam: 'mediano',
    sexo: 'macho',
    etiquetas: ['Activo', 'Juguetón'],
    qualities: ['Activo', 'Juguetón', 'Sociable'],
    story: 'Roko fue rescatado de una carretera secundaria. Le encanta correr y acompañar a familias activas.',
    fee: '120 €',
    photo: 'img/dogs/roko-card.jpg',
    photoLarge: 'img/dogs/roko-modal.jpg'
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    breed: 'Galgo Español',
    age: 'adulto',
    ageLabel: '4 años',
    tam: 'grande',
    sexo: 'hembra',
    etiquetas: ['Tranquila', 'Niños OK'],
    qualities: ['Tranquila', 'Cariñosa'],
    story: 'Luna es muy dulce y perfecta para hogares tranquilos con niños o personas mayores.',
    fee: '150 €',
    photo: 'img/dogs/luna-card.jpg',
    photoLarge: 'img/dogs/luna-modal.jpg'
  },
  thor: {
    id: 'thor',
    name: 'Thor',
    breed: 'Mix Pastor Alemán',
    age: 'cachorro',
    ageLabel: '6 meses',
    tam: 'grande',
    sexo: 'macho',
    etiquetas: ['Enérgico', 'Cachorro'],
    qualities: ['Enérgico', 'Aprendiz'],
    story: 'Thor está aprendiendo obediencia y busca una familia activa que continúe con su socialización.',
    fee: '140 €',
    photo: 'img/dogs/thor-card.jpg',
    photoLarge: 'img/dogs/thor-modal.jpg'
  },
  nala: {
    id: 'nala',
    name: 'Nala',
    breed: 'Podenco Andaluz',
    age: 'adulto',
    ageLabel: '3 años',
    tam: 'mediano',
    sexo: 'hembra',
    etiquetas: ['Juguetona', 'Mediana'],
    qualities: ['Juguetona', 'Exploradora'],
    story: 'Nala adora los paseos y responderá genial en un hogar con paciencia y juegos.',
    fee: '130 €',
    photo: 'img/dogs/nala-card.jpg',
    photoLarge: 'img/dogs/nala-modal.jpg'
  },
  coco: {
    id: 'coco',
    name: 'Coco',
    breed: 'Terrier Mix',
    age: 'senior',
    ageLabel: '9 años',
    tam: 'pequeño',
    sexo: 'macho',
    etiquetas: ['Senior', 'Tranquilo'],
    qualities: ['Senior', 'Tranquilo'],
    story: 'Coco adora las siestas al sol y los paseos cortos. Muy fácil de manejar.',
    fee: '110 €',
    photo: 'img/dogs/coco-card.jpg',
    photoLarge: 'img/dogs/coco-modal.jpg'
  },
  bimba: {
    id: 'bimba',
    name: 'Bimba',
    breed: 'Labrador Retriever',
    age: 'joven',
    ageLabel: '1 año',
    tam: 'grande',
    sexo: 'hembra',
    etiquetas: ['Sociable', 'Niños OK'],
    qualities: ['Sociable', 'Niños OK'],
    story: 'Bimba es energía pura y necesita actividad diaria, agua y excursiones.',
    fee: '180 €',
    photo: 'img/dogs/bimba-card.jpg',
    photoLarge: 'img/dogs/bimba-modal.jpg'
  },
  pintas: {
    id: 'pintas',
    name: 'Pintas',
    breed: 'Mestizo',
    age: 'cachorro',
    ageLabel: '8 meses',
    tam: 'mediano',
    sexo: 'macho',
    etiquetas: ['Juguetón', 'Cachorro'],
    qualities: ['Juguetón', 'Curioso'],
    story: 'Pintas está aprendiendo obediencia. Busca una familia paciente y activa.',
    fee: '130 €',
    photo: 'img/dogs/pintas-card.jpg',
    photoLarge: 'img/dogs/pintas-modal.jpg'
  },
  dana: {
    id: 'dana',
    name: 'Dana',
    breed: 'American Staffordshire',
    age: 'adulto',
    ageLabel: '5 años',
    tam: 'mediano',
    sexo: 'hembra',
    etiquetas: ['Leal', 'PPP'],
    qualities: ['Leal', 'Equilibrada'],
    story: 'Dana es muy noble y está habituada a la vida en piso. Requiere licencia PPP.',
    fee: '160 €',
    photo: 'img/dogs/dana-card.jpg',
    photoLarge: 'img/dogs/dana-modal.jpg'
  }
};

const dogs = Object.values(dogsData);


const cardsContainer = document.querySelector('.perros');

function createFiltersForm() {
  if (!cardsContainer) return null;

  const existing = document.querySelector('#filtros');
  if (existing) return existing;

  const form = document.createElement('form');
  form.id = 'filtros';
  form.className = 'filtros';
  form.innerHTML = `
    <label class="filtro">
      <span>Tamaño</span>
      <select name="tam">
        <option value="todos">Todos los tamaños</option>
        <option value="pequeño">Pequeños</option>
        <option value="mediano">Medianos</option>
        <option value="grande">Grandes</option>
      </select>
    </label>
    <label class="filtro">
      <span>Edad</span>
      <select name="edad">
        <option value="todas">Todas las edades</option>
        <option value="cachorro">Cachorros</option>
        <option value="joven">Jóvenes</option>
        <option value="adulto">Adultos</option>
        <option value="senior">Senior</option>
      </select>
    </label>
    <label class="filtro">
      <span>Sexo</span>
      <select name="sexo">
        <option value="cualquiera">Cualquiera</option>
        <option value="macho">Machos</option>
        <option value="hembra">Hembras</option>
      </select>
    </label>
    <button type="button" id="limpiar">Limpiar Filtros</button>
  `;

  cardsContainer.insertAdjacentElement('beforebegin', form);
  return form;
}

const form = createFiltersForm();
const selects = form ? form.querySelectorAll('select') : [];

function renderDogs(lista = []) {
  if (!cardsContainer) return;
  cardsContainer.innerHTML = lista
    .map(dog => `
      <article class="card" data-id="${dog.id}">
        <img src="${dog.photo}" alt="Foto de ${dog.name}">
        <h3>${dog.name}</h3>
        <p>Raza: ${dog.breed} · ${dog.tam} · ${dog.ageLabel || dog.age}</p>
        <div class="tags">${(dog.etiquetas || []).map(tag => `<span>${tag}</span>`).join('')}</div>
        <button class="ver-perfil">Ver Perfil</button>
      </article>
    `)
    .join('');
}


let dogModal;

function ensureDogModal() {
  if (dogModal) return dogModal;

  dogModal = document.createElement('section');
  dogModal.className = 'dog-modal';
  dogModal.style.display = 'none';
  dogModal.style.position = 'fixed';
  dogModal.style.top = '0';
  dogModal.style.left = '0';
  dogModal.style.width = '100%';
  dogModal.style.height = '100%';
  dogModal.style.zIndex = '9999';
  dogModal.style.padding = '1.5rem';
  dogModal.style.boxSizing = 'border-box';
  dogModal.style.alignItems = 'center';
  dogModal.style.justifyContent = 'center';
  dogModal.style.background = 'rgba(15, 23, 42, 0.65)';
  dogModal.style.backdropFilter = 'blur(2px)';
  dogModal.style.overflowY = 'auto';
  dogModal.setAttribute('aria-hidden', 'true');
  dogModal.innerHTML = `
    <div class="dog-modal__backdrop" data-modal-close style="position:absolute; inset:0; background:rgba(15,23,42,0.65);"></div>
    <article class="dog-modal__dialog" style="position:relative; width:min(640px, 100%); max-height:95vh; overflow-y:auto; background:#fff; border-radius:20px; box-shadow:0 20px 80px rgba(15,23,42,0.45); padding:2rem; display:flex; flex-direction:column; gap:1.25rem;">
      <button class="dog-modal__close" data-modal-close aria-label="Cerrar" style="position:absolute; top:0.75rem; right:0.75rem; border:none; background:rgba(15,23,42,0.1); width:2.5rem; height:2.5rem; border-radius:999px; font-size:1.5rem; line-height:1; cursor:pointer;">×</button>
      <div class="dog-modal__media" style="border-radius:16px; overflow:hidden;">
        <img src="" alt="" style="display:block; width:100%; height:auto; object-fit:cover;" />
      </div>
      <div class="dog-modal__body" style="display:flex; flex-direction:column; gap:1rem;">
        <div class="dog-modal__header" style="display:flex; flex-direction:column; gap:0.35rem;">
          <h3 class="dog-modal__title"></h3>
          <span class="dog-modal__breed"></span>
          <span class="dog-modal__fee"></span>
        </div>
        <p class="dog-modal__meta" style="color:#475467; font-weight:500;"></p>
        <section class="dog-modal__history" style="display:flex; flex-direction:column; gap:0.4rem;">
          <h4>Mi historia</h4>
          <p></p>
        </section>
        <section class="dog-modal__qualities" style="display:flex; flex-direction:column; gap:0.4rem;">
          <h4>Mis cualidades</h4>
          <div class="dog-modal__tags" style="display:flex; flex-wrap:wrap; gap:0.5rem;"></div>
        </section>
        <button class="dog-modal__cta" style="align-self:flex-start; padding:0.75rem 1.5rem; border:none; border-radius:999px; background:#f97316; color:#fff; font-weight:600; cursor:pointer;">Solicitar adopción</button>
      </div>
    </article>
  `;

  document.body.appendChild(dogModal);

  dogModal.addEventListener('click', event => {
    if (event.target.hasAttribute('data-modal-close')) {
      closeDogModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeDogModal();
    }
  });

  return dogModal;
}

function openDogModal(dog) {
  const modal = ensureDogModal();
  if (!modal) return;

  const img = modal.querySelector('img');
  const title = modal.querySelector('.dog-modal__title');
  const breed = modal.querySelector('.dog-modal__breed');
  const fee = modal.querySelector('.dog-modal__fee');
  const meta = modal.querySelector('.dog-modal__meta');
  const history = modal.querySelector('.dog-modal__history p');
  const tags = modal.querySelector('.dog-modal__tags');

  img.src = dog.photoLarge || dog.photo;
  img.alt = `Foto de ${dog.name}`;
  title.textContent = dog.name;
  breed.textContent = dog.breed;
  fee.textContent = dog.fee ? `Tasa: ${dog.fee}` : '';
  meta.textContent = `${dog.ageLabel || ''} · ${dog.sexo} · ${dog.tam}`;
  history.textContent = dog.story || '';
  tags.innerHTML = (dog.qualities || dog.etiquetas || [])
    .map(quality => `<span>${quality}</span>`)
    .join('');

  modal.classList.add('dog-modal--visible');
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDogModal() {
  if (!dogModal) return;
  dogModal.classList.remove('dog-modal--visible');
  dogModal.style.display = 'none';
  dogModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showDogModalById(id) {
  const dog = dogs.find(item => String(item.id) === String(id));
  if (!dog) return;
  openDogModal(dog);
}

function applyFilters() {
  if (!form) {
    renderDogs(dogs);
    return;
  }

  const criterios = Array.from(selects).reduce((acc, sel) => ({ ...acc, [sel.name]: sel.value }), {});
  const filtrados = dogs.filter(dog =>
    (!criterios.tam || criterios.tam === 'todos' || dog.tam === criterios.tam) &&
    (!criterios.edad || criterios.edad === 'todas' || dog.age === criterios.edad) &&
    (!criterios.sexo || criterios.sexo === 'cualquiera' || dog.sexo === criterios.sexo)
  );

  renderDogs(filtrados);
}

if (form) {
  form.addEventListener('change', applyFilters);

  const btnLimpiar = document.querySelector('#limpiar');
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', () => {
      form.reset();
      renderDogs(dogs);
    });
  }
}

if (cardsContainer) {
  cardsContainer.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card) return;

    const dogId = card.dataset.id;
    const isButton = e.target.matches('.ver-perfil');
    const isImage = e.target.matches('.card img');

    if (isButton || isImage) {
      showDogModalById(dogId);
    }
  });
}

renderDogs(dogs);


