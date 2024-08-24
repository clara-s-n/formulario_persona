const API_URL = 'http://localhost:3000';
const personList = document.getElementById('personList');

async function getPersonList() {
    try {
        const response = await fetch(`${API_URL}/personas`);
        const data = await response.json();
        personList.innerHTML = '';
        data.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.nombre}</td>
                <td>${person.apellido}</td>
                <td>${person.email}</td>
                <td>${person.cedula}</td>
                <td>${person.rut}</td>
            `;
            personList.appendChild(row);
        });
    } catch (error) {
        console.error('Error al obtener el listado de personas:', error);
    }
}

// Cargar el listado inicial
getPersonList();