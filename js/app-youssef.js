
import { Dog } from "./card-dog-youssef.js";

export class App {
    constructor(data) {
        this.dogs = data.map(dogData => new Dog(dogData));
        this.filters = {
            size: 'all',
            age: 'all',
            sex: 'all'
        };

        this.container = document.getElementById('dogsGrid');
        this.initFilters();
        this.render();
    }

    initFilters() {
        // Select elements
        this.sizeSelect = document.getElementById('sizeFilter');
        this.ageSelect = document.getElementById('ageFilter');
        this.sexSelect = document.getElementById('sexFilter');
        this.clearBtn = document.getElementById('clearFiltersBtn');

        // Add event listeners
        this.sizeSelect.addEventListener('change', (e) => this.handleFilterChange('size', e.target.value));
        this.ageSelect.addEventListener('change', (e) => this.handleFilterChange('age', e.target.value));
        this.sexSelect.addEventListener('change', (e) => this.handleFilterChange('sex', e.target.value));

        this.clearBtn.addEventListener('click', () => this.clearFilters());
    }

    handleFilterChange(type, value) {
        this.filters[type] = value;
        this.render();
    }

    clearFilters() {
        this.filters = {
            size: 'all',
            age: 'all',
            sex: 'all'
        };

        // Reset select values
        this.sizeSelect.value = 'all';
        this.ageSelect.value = 'all';
        this.sexSelect.value = 'all';

        this.render();
    }

    getFilteredDogs() {
        return this.dogs.filter(dog => {
            const matchesSize = this.filters.size === 'all' || dog.size === this.filters.size;
            const matchesAge = this.filters.age === 'all' || dog.ageType === this.filters.age;
            const matchesSex = this.filters.sex === 'all' || dog.sex === this.filters.sex;

            return matchesSize && matchesAge && matchesSex;
        });
    }

    render() {
        const filteredDogs = this.getFilteredDogs();

        // Fade out effect could go here, but doing direct replacement for simplicity
        this.container.innerHTML = filteredDogs
            .map(dog => dog.createCardHTML())
            .join('');

        if (filteredDogs.length === 0) {
            this.container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;">
                    <h3>No se encontraron peludos con estos filtros 🐶</h3>
                    <p>Prueba con otros criterios de búsqueda.</p>
                </div>
            `;
        }
    }
}