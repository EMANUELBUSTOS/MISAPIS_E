fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
    .then(res => res.json())
    .then(data => {
        let html = "";
        data.results.forEach(poke => {
            html += `
            <div class="col-3 p-2">
                <div class="card p-3 text-center">
                    <h5>${poke.name}</h5>
                </div>
            </div>`;
        });
        document.getElementById("pokemonList").innerHTML = html;
    });
