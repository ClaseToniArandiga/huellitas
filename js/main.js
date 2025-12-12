
// Clase para las cards de los perros
class DogCard {
    constructor(name, age, gender, size, imageUrl) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.imageUrl = imageUrl;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('dog-card');
        card.innerHTML = `
            <img src="${this.imageUrl}" alt="Imagen de ${this.name}" loading="lazy">
            <div class="dog-info">
                <h3>${this.name}</h3>
                <p><strong>Edad:</strong> ${this.age}</p>
                <p><strong>Sexo:</strong> ${this.gender}</p>
                <p><strong>Tamaño:</strong> ${this.size}</p>
                <button class="btn-adoptar">🐾 Adoptar</button>
            </div>
        `;
        card.querySelector('.btn-adoptar').addEventListener('click', () => {
            alert(`¡Gracias por tu interés en adoptar a ${this.name}!`);
        });
        return card;
    }
}

// Array de perros
const dogs = [
    new DogCard('Max', '2 años', 'Macho', 'Mediano', 'https://placedog.net/400/300?id=1'),
    new DogCard('Luna', '1 año', 'Hembra', 'Pequeño', 'https://placedog.net/400/300?id=2'),
    new DogCard('Rocky', '3 años', 'Macho', 'Grande', 'https://placedog.net/400/300?id=3'),
    new DogCard('Bella', '4 años', 'Hembra', 'Mediano', 'https://placedog.net/400/300?id=4'),
    new DogCard('Toby', '5 años', 'Macho', 'Grande', 'https://placedog.net/400/300?id=5'),
    new DogCard('Coco', '2 años', 'Hembra', 'Pequeño', 'https://placedog.net/400/300?id=6'),
    new DogCard('Bruno', '1 año', 'Macho', 'Mediano', 'https://placedog.net/400/300?id=7'),
    new DogCard('Nala', '3 años', 'Hembra', 'Grande', 'https://placedog.net/400/300?id=8'),
];

// Elementos del DOM
const container = document.getElementById('dog-cards');
const sizeFilter = document.getElementById('size');
const ageFilter = document.getElementById('age');
const genderFilter = document.getElementById('gender');
const clearBtn = document.getElementById('clear-filters');

// Función para mostrar las cards filtradas
function showCards(filteredDogs) {
    container.innerHTML = '';
    filteredDogs.forEach(dog => container.appendChild(dog.createCard()));
}

// Función para filtrar los perros
function filterDogs() {
    const size = sizeFilter.value.toLowerCase();
    const age = ageFilter.value.toLowerCase();
    const gender = genderFilter.value.toLowerCase();

    const filtered = dogs.filter(dog => {
        // Filtro por tamaño
        if (size && dog.size.toLowerCase() !== size) return false;
        
        // Filtro por sexo
        if (gender && dog.gender.toLowerCase() !== gender) return false;
        
        // Filtro por edad
        if (age) {
            const years = parseInt(dog.age);
            if (age === 'cachorro' && years >= 1) return false;
            if (age === 'joven' && (years < 1 || years > 3)) return false;
            if (age === 'adulto' && (years < 3 || years > 8)) return false;
            if (age === 'senior' && years <= 8) return false;
        }
        
        return true;
    });

    showCards(filtered);
}

// Eventos de los filtros
sizeFilter.addEventListener('change', filterDogs);
ageFilter.addEventListener('change', filterDogs);
genderFilter.addEventListener('change', filterDogs);

// Limpiar filtros
clearBtn.addEventListener('click', () => {
    sizeFilter.value = '';
    ageFilter.value = '';
    genderFilter.value = '';
    showCards(dogs);
});

// Mostrar todas las cards al inicio
showCards(dogs);




