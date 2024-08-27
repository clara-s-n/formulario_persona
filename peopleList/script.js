const API_URL = 'http://localhost:3000';
const personList = document.getElementById('personList');

async function getPersonList() {
    try {
        const response = await fetch(`${API_URL}/personas`);
        const data = await response.json();
        personList.innerHTML = '';

        // Crear y añadir la tarjeta de "Agregar Persona"
        const addPersonCard = document.createElement('div');
        addPersonCard.classList.add('card', 'add-person-card');
        addPersonCard.innerHTML = `
            <div class="container">
                <h1>Agregar Persona</h1>
                <button id="addPerson">
                    <i class="fas fa-user-plus"></i> <!-- Ícono de Font Awesome -->
                </button>
            </div>
        `;
        personList.appendChild(addPersonCard);

        // Añadir evento de clic al botón "Agregar Persona"
        const addPersonButton = addPersonCard.querySelector('#addPerson');
        addPersonButton.addEventListener('click', () => {
            window.location.href = '../form/form.html';
        });

        // Crear y añadir las tarjetas de personas
        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg" class="icon" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4>${person.nombre} ${person.apellido}</h4>
                    <p>${person.email}</p>
                    <p>C.I: ${person.cedula}</p>
                    <p>RUT: ${person.rut}</p>
                </div>
            `;
            personList.appendChild(card);
        });

    } catch (error) {
        console.error('Error al obtener el listado de personas:', error);
    }
}

// Cargar el listado inicial
getPersonList();
