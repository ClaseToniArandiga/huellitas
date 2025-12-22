//Los datos de los perros
const perros = [
    { nombre: "Rocky", edad: "3 meses", sexo: "macho", tamaño: "mediano", categoriaEdad: "cachorro", imagen: "img/husky.avif" },
    { nombre: "Toby", edad: "5 años", sexo: "macho", tamaño: "grande", categoriaEdad: "adulto", imagen: "img/husky.avif" },
    { nombre: "Mina", edad: "8 años", sexo: "hembra", tamaño: "mediano", categoriaEdad: "senior", imagen: "img/husky.avif" },
    { nombre: "Firulais", edad: "6 meses", sexo: "macho", tamaño: "mediano", categoriaEdad: "cachorro", imagen: "img/husky.avif" },
    { nombre: "Roberto", edad: "7 años", sexo: "macho", tamaño: "mediano", categoriaEdad: "adulto", imagen: "img/husky.avif" },
    { nombre: "Patricia", edad: "3 años", sexo: "hembra", tamaño: "grande", categoriaEdad: "adulto", imagen: "img/husky.avif" },
    { nombre: "Matias", edad: "2 años", sexo: "macho", tamaño: "pequeño", categoriaEdad: "joven", imagen: "img/husky.avif" },
    { nombre: "papeitaLosPalotes", edad: "2 años", sexo: "hembra", tamaño: "pequeño", categoriaEdad: "joven", imagen: "img/husky.avif" }
];

// LOS FILTROS PARA EL BUSCADOR
const contenedor = document.getElementById('grupoPerros');
const selectTamaño = document.getElementById('tamaño');
const selectEdad = document.getElementById('edad');
const selectSexo = document.getElementById('sexo');

// Función para mostrar los perros en el HTML
function mostrarPerros(lista) {
    // Limpieza
    contenedor.innerHTML = "";

    // si hay perros o no hay perros
    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron perros con esos filtros.</p>";
        return;
    }

    lista.forEach(perro => {
        const articulo = document.createElement('section');
        articulo.classList.add('perroDatos');
        
  
  

        articulo.innerHTML = `
            <img src="${perro.imagen}" alt="${perro.nombre}" width="250px">
            <section class="info">
                <p><strong>Nombre:</strong> ${perro.nombre}</p>
                <p><strong>Edad:</strong> ${perro.edad}</p>
                <p><strong>Sexo:</strong> ${perro.sexo}</p>
                <p><strong>Tamaño:</strong> ${perro.tamaño}</p>
            </section>
        `;
        contenedor.appendChild(articulo);
    });
}

// Función de los fitros
function filtrarPerros() {
    const valorTamaño = selectTamaño.value;
    const valorEdad = selectEdad.value;
    const valorSexo = selectSexo.value;

    const resultado = perros.filter(perro => {
        // Si el select está vacío (Todos), la condición es verdadera
        const cumpleTamaño = valorTamaño === "" || perro.tamaño === valorTamaño;
        const cumpleEdad = valorEdad === "" || perro.categoriaEdad === valorEdad;
        const cumpleSexo = valorSexo === "" || perro.sexo === valorSexo;

        return cumpleTamaño && cumpleEdad && cumpleSexo;
    });

    mostrarPerros(resultado);
}

//Función para Resetear el buscadro
function resetearFiltros() {
    selectTamaño.value = "";
    selectEdad.value = "";
    selectSexo.value = "";
    mostrarPerros(perros);
}

//lo carga todo
mostrarPerros(perros);