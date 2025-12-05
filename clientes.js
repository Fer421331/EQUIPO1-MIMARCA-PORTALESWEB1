
const clientes = [
    { nombre: "Diunsa", logo: "Diunsa.jpg" },
    { nombre: "Pepsi", logo: "Pepsi.jpg" },
    { nombre: "BAC", logo: "BAC.jpg" },
    { nombre: "Tigo", logo: "Tigo.jpg" },
    { nombre: "Honduras Maya", logo: "HM.jpg" }
];

const contenedor = document.getElementById("clientesContainer");

clientes.forEach(cliente => {
    const card = document.createElement("div");
    card.classList.add("cliente-card");

    card.innerHTML = `
        <img src="${cliente.logo}" alt="logo ${cliente.nombre}">
        <h3>${cliente.nombre}</h3>
    `;

    contenedor.appendChild(card);
});