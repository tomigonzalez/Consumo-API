var nombrePokemon = document.getElementById('nombre-pokemon');
    var tipoPokemon = document.getElementById('tipo-pokemon');
    var alturaPokemon = document.getElementById('altura-pokemon');
    var inputVacio = document.getElementById('input-vacio');
    var imgPokemon = document.getElementById("img-pokemon");
    var pesoPokemon = document.getElementById("peso-pokemon");
    var elije = document.getElementById("elije");
  

    const caja = document.getElementById("caja");
    const obtPokemon = async(pokemon) => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
            .then(
                (res) => res.json()
            ).catch(
                (error) => console.log(error)
            );
        return data
    }



    const buscarPokemon = async() => {
        let valueid = document.getElementById('value').value;
        loadSpinner();
        const data = await obtPokemon(valueid)
        if (valueid == "") {
            cardEmpty()
            return inputVacio.textContent = "Debes ingresar un valor numerico.",
                    elije.style.visibility="visible";
        }
        if (data == undefined) return elije.style.visibility="visible",
                                          inputVacio.textContent = "Debes ingresar un valor valido.";
        

        
        renderCard(data)
    }



    const cardEmpty = (data) => {
        caja.innerHTML = "";
    }

   

    const renderCard = (data) => {
        elije.style.visibility="hidden"
        inputVacio.textContent="";
        caja.innerHTML = html = `
        <div class="card">
        <img id="img-pokemon" src="${data.sprites.other.home.front_default}" alt="Avatar" style="width:200px">
        <div class="container">
            <p style="text-align:center;"><span class="texts" id="nombre-pokemon">${data.name.toUpperCase()}.</span></p>
            <div class="container-info">
                <p>Tipos: <span class="texts" id="tipo-pokemon">${data.types
                .map((types) => {
                    return types.type.name.toUpperCase()
                }).join(", ")}.</span></p>
                <p>Altura: <span class="texts" id="altura-pokemon">${data.height / 10 + "Mts"}.</span></p>
                <p>Peso: <span class="texts" id="peso-pokemon">${data.weight / 10 + "Kg"}s.</span></p>
            </div>
        </div>
        `


    }




    const loadSpinner = () => {
        caja.innerHTML = `
        <div class="fa-3x">
        
        </div>
        `;
    };