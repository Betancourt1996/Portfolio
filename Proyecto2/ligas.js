let id_default = "arg.1"
document.addEventListener('DOMContentLoaded', () => {
    cargarSelect();
    cargarTabla();
    interaccionTabla();
    cargarSeasons();
}
)
let cargarSelect = () => {
    (async () => {
        try {
            let seleccion = document.getElementById("select");
            seleccion.innerHTML = "";
            const response = await fetch("https://api-football-standings.azharimm.site/leagues");
            const data = await response.json();
            ligas = data.data
            let rank = 0
            ligas.forEach((liga) => {
                let id = liga.id
                let name = liga.name
                let plantilla = `
                <option value="${id}" >${name}</option>
                `
                seleccion.innerHTML += plantilla;
            });


        } catch (err) {
            console.error(err);
        }
    })();

}


let cargarTabla = (idLiga = id_default,anho="2022") => {

    (async () => {
        try {


            let tableBody = document.getElementById("tabla");
            tableBody.innerHTML = "";

            const response = await fetch("https://api-football-standings.azharimm.site/leagues/" + idLiga + "/standings?season="+anho+"&sort=asc");
            const data = await response.json();

            posiciones = data.data.standings
            let tableGraf = document.getElementById("grafBarras");
            tableGraf.innerHTML = "";
            let rank = 0
            posiciones.forEach((posicione) => {

                let equipo = posicione.team.name;
                let pj = posicione.stats[3].value
                let g = posicione.stats[0].value;
                let pt = posicione.stats[6].value
                rank++;
                let plantilla = `
                <tr>
                <th class="tbpos" scope="row">${rank}</th>
                <td class="tbclub">${equipo}</td>
                <td class="tbpj">${pj}</td>
                <td class="tbg">${g}</td>
                <td class="tbpt">${pt}</td>
                </tr>
                `
                tableBody.innerHTML += plantilla;



                let perdidos = pj - g
                let porcGanados = g / pj
                let porcPerdidos = perdidos / pj
                let plantillaGraf = `
                <tr class="table-primary">
                <td scope="col"  style="--size:${porcGanados}; --color:rgba(38, 193, 0, 0.8)">${g}</th>
                <td scope="col"  style="--size:${porcPerdidos}; --color:rgba(214, 0, 0, 0.8)">${perdidos}</th>
              </tr>
                
                `
                tableGraf.innerHTML += plantillaGraf;
            });
            totalEquipos=document.getElementById("totalEquipos")
            totalEquipos.innerText=rank;

        } catch (err) {
            console.error(err);
        }
    })();
}

let interaccionTabla = () => {
    let select = document.getElementById("select");
    let seasons = document.getElementById("seasons")
    select.addEventListener('change', () => {
        nameLiga = document.getElementById("NombreLiga");
        nameLiga.innerText = select.options[select.selectedIndex].textContent
        cargarTabla(select.value);
        cargarSeasons(select.value,seasons.value)
        cargarLogo(select.value);

    });
    seasons.addEventListener('change', () => {
        cargarTabla(select.value,seasons.value);        
    });

}

let cargarSeasons = (nliga="arg.1",temporada="2020") => {


    (async () => {
        try {
            let seasons = document.getElementById("seasons")
            seasons.innerHTML = "";
            const response = await fetch("https://api-football-standings.azharimm.site/leagues/" +nliga+ "/seasons");
            const data = await response.json();
            temp = data.data.seasons
            
            temp.forEach((liga) => {
                
                anho=liga.year
                let plantilla = `
                <option value="${anho}" >${anho}</option>
                `
                seasons.innerHTML += plantilla;
            });


        } catch (err) {
            console.error(err);
        }
    })();
}

let cargarLogo = (idLiga)=>{
    (async () => {
        try {
            let logo = document.getElementById("logo")
            logo.innerHTML = "";
            const response = await fetch("https://api-football-standings.azharimm.site/leagues/"+idLiga);
            const data = await response.json();
            logoUrl = data.data.logos.light
            logo.innerHTML=`
            <img src=${logoUrl} alt="logo" class="img-fluid">
            `


        } catch (err) {
            console.error(err);
        }
    })();
}