export class Dog {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.breed = data.breed;
        this.sex = data.sex;
        this.size = data.size;
        this.ageStr = data.ageStr;
        this.ageType = data.ageType;
        this.tags = data.tags;
        this.image = data.image;
    }

    createCardHTML() {
        const tagsHTML = this.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');

        return `
            <article class="dog-card">
                <div class="card-image-wrapper">
                    <img src="${this.image}" alt="${this.name}" class="card-image" loading="lazy">
                    <span class="age-badge">${this.ageStr}</span>
                    <div class="card-overlay">
                        <h2 class="dog-name">${this.name}</h2>
                    </div>
                </div>
                <div class="card-content">
                    <div class="breed-info">
                        <h3>${this.breed}</h3>
                        <p class="breed-details">${this.sex} • ${this.size}</p>
                    </div>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <button class="view-btn">Ver Perfil</button>
                </div>
            </article>
        `;
    }
}