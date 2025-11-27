const API = "http://localhost:4000/api/music/";

const tablaMusica = document.getElementById("tablaMusica");
const form = document.getElementById("formMusic");

const idInput = document.getElementById("musicID");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const genero = document.getElementById("genero");
const portada = document.getElementById("portada");
const audio = document.getElementById("audio");


// 🔵 Cargar Música
async function cargarMusica() {
    const res = await fetch(API);
    const data = await res.json();

    tablaMusica.innerHTML = "";

    data.forEach(m => {
        tablaMusica.innerHTML += `
        <tr>
            <td>${m.titulo}</td>
            <td>${m.artista}</td>
            <td>${m.genero || "-"}</td>
            <td>
                <audio controls src="${m.audio}" style="width:150px;"></audio>
            </td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarMusica('${m._id}')">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarMusica('${m._id}')">Eliminar</button>
            </td>
        </tr>`;
    });
}

cargarMusica();

// 🟡 Editar Música
async function editarMusica(id) {
    const res = await fetch(API + id);
    const data = await res.json();

    idInput.value = data._id;
    titulo.value = data.titulo;
    artista.value = data.artista;
    genero.value = data.genero;
    portada.value = data.portada;
    audio.value = data.audio;
}

// 🔴 Eliminar música
async function eliminarMusica(id) {
    if (!confirm("¿Seguro que deseas eliminar esta canción?")) return;

    await fetch(API + id, { method: "DELETE" });
    cargarMusica();
}

// 🟢 Guardar música (POST o PUT)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const objeto = {
        titulo: titulo.value,
        artista: artista.value,
        genero: genero.value,
        portada: portada.value,
        audio: audio.value
    };

    if (idInput.value === "") {
        // POST
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objeto)
        });
    } else {
        // PUT
        await fetch(API + idInput.value, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objeto)
        });
    }

    form.reset();
    idInput.value = "";
    cargarMusica();
});
