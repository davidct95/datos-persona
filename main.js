fetch("https://fb25-190-151-133-2.ngrok-free.app/lista", {
  method: "GET",
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json", // Ajusta los encabezados según lo necesites
    // Puedes agregar otros encabezados aquí si es necesario, como tokens de autenticación
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parsea la respuesta JSON
  })
  .then((data) => {
    const tbody = document.querySelector("#tabla tbody");

    data.forEach((item) => {
      const fila = document.createElement("tr");
      const nombre = item.nombre;
      const celdaNombre = document.createElement("td");
      celdaNombre.textContent = nombre;
      fila.appendChild(celdaNombre);

      tbody.appendChild(fila);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
