const API = "http://localhost:4000/api/music/";

async function cargarMusica() {
    const res = await fetch(API);
    const data = await res.json();

    let html = "";
    data.forEach(m => {
        html += `
        <div class="col-4 p-3">
            <div class="card p-3">
                <img src="${m.portada}" class="img-fluid rounded">
                <h5>${m.titulo}</h5>
                <p>${m.artista}</p>
                <audio controls src="${m.audio}"></audio>
            </div>
        </div>`;
    });

    document.getElementById("musicList").innerHTML = html;
}

cargarMusica();
