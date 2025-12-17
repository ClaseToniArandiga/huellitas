
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
            <p><strong>Edad:</strong> ${this.age}</p>
                <h3>${this.name}</h3>
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

// Clase para gestionar el refugio de perros
class Refugio {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.dogs = [];
        this.filters = {
            size: document.getElementById('size'),
            age: document.getElementById('age'),
            gender: document.getElementById('gender')
        };
        this.clearBtn = document.getElementById('clear-filters');
        this.initEvents();
    }

    addDog(name, age, gender, size, imageUrl) {
        this.dogs.push(new DogCard(name, age, gender, size, imageUrl));
    }

    showCards(dogs = this.dogs) {
        this.container.innerHTML = '';
        dogs.forEach(dog => this.container.appendChild(dog.createCard()));
    }

    filterDogs() {
        const size = this.filters.size.value;
        const age = this.filters.age.value;
        const gender = this.filters.gender.value;

        const filtered = this.dogs.filter(dog => {
            if (size && dog.size !== size) return false;
            if (gender && dog.gender !== gender) return false;
            if (age) {
                const years = parseInt(dog.age);
                if (age === 'cachorro' && years >= 1) return false;
                if (age === 'joven' && (years < 1 || years > 3)) return false;
                if (age === 'adulto' && (years < 3 || years > 8)) return false;
                if (age === 'senior' && years <= 8) return false;
            }
            return true;
        });

        this.showCards(filtered);
    }

    clearFilters() {
        Object.values(this.filters).forEach(f => f.value = '');
        this.showCards();
    }

    initEvents() {
        Object.values(this.filters).forEach(f => 
            f.addEventListener('change', () => this.filterDogs())
        );
        this.clearBtn.addEventListener('click', () => this.clearFilters());
    }
}

// Crear refugio y añadir perros
const refugio = new Refugio('dog-cards');

const perros = [
    { nombre: 'Max', edad: '2 años', sexo: 'Macho', tamaño: 'Mediano', imagenUrl: 'https://placedog.net/400/300?id=1' },
    { nombre: 'Luna', edad: '1 año', sexo: 'Hembra', tamaño: 'Pequeño', imagenUrl: 'https://placedog.net/400/300?id=2' },
    { nombre: 'Rocky', edad: '3 años', sexo: 'Macho', tamaño: 'Grande', imagenUrl: 'https://placedog.net/400/300?id=3' },
    { nombre: 'Bella', edad: '4 años', sexo: 'Hembra', tamaño: 'Mediano', imagenUrl: 'https://placedog.net/400/300?id=4' },
    { nombre: 'Toby', edad: '5 años', sexo: 'Macho', tamaño: 'Grande', imagenUrl: 'https://placedog.net/400/300?id=5' },
    { nombre: 'Coco', edad: '2 años', sexo: 'Hembra', tamaño: 'Pequeño', imagenUrl: 'https://placedog.net/400/300?id=6' },
    { nombre: 'Bruno', edad: '1 año', sexo: 'Macho', tamaño: 'Mediano', imagenUrl: 'https://placedog.net/400/300?id=7' },
    { nombre: 'Nala', edad: '3 años', sexo: 'Hembra', tamaño: 'Grande', imagenUrl: 'https://placedog.net/400/300?id=8' },
];

perros.forEach(perro => {
    refugio.addDog(perro.nombre, perro.edad, perro.sexo, perro.tamaño, perro.imagenUrl);
});
refugio.showCards();




