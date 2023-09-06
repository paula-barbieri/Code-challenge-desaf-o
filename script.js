document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();


        // Obtener los valores del formulario
        const nombre = document.getElementById("txtNombre").value;
        const apellido = document.getElementById("txtApellido").value;
        const fechaNacimiento = document.getElementById("txtNacimiento").value;

        //crear un objeto con los datos del formulario
        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        //Enviar los datos al endpoint usando fetch
        
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`La solicitud falló con estado ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); // Muestra la respuesta en la consola
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});