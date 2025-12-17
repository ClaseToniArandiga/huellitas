import { App } from "./app-youssef.js";
import { DOGS_DATA } from "./data-dog-youssef.js";

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const divContainer = document.createElement('div');
    divContainer.className = 'container';
    divContainer.id = 'filtersContainer';
    main.appendChild(divContainer);
    divContainer.innerHTML = ` <section class="filters-container">
                <div class="filter-group">
                    <label for="sizeFilter">Tamaño</label>
                    <select id="sizeFilter">
                        <option value="all">Todos los tamaños</option>
                        <option value="Pequeño">Pequeño</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="ageFilter">Edad</label>
                    <select id="ageFilter">
                        <option value="all">Todas las edades</option>
                        <option value="Cachorro">Cachorro (< 1 año)</option>
                        <option value="Adulto">Adulto (1-7 años)</option>
                        <option value="Senior">Senior (> 7 años)</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="sexFilter">Sexo</label>
                    <select id="sexFilter">
                        <option value="all">Cualquiera</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                </div>

                <div class="filter-actions">
                    <button id="clearFiltersBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                        Limpiar Filtros
                    </button>
                </div>
            </section>`;
    main.appendChild(divContainer);

    const dogsGrid = document.createElement('div');
    dogsGrid.id = 'dogsGrid';
    dogsGrid.className = 'dogs-grid';
    
    main.appendChild(dogsGrid);
    new App(DOGS_DATA);
});
