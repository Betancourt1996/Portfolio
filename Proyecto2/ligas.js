let id_default="arg.1"
document.addEventListener('DOMContentLoaded', () => {
    cargarSelect();
    cargarTabla();
    interaccionTabla();
}
)
let cargarSelect = () => {
    (async () => {
        try {
            let seleccion = document.getElementById("select");
            seleccion.innerHTML ="";
            const response = await fetch("https://api-football-standings.azharimm.site/leagues");
            const data = await response.json();
            ligas = data.data
            let rank = 0
            ligas.forEach((liga) => {                
                let id=liga.id
                let name=liga.name
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


let cargarTabla = (idLiga=id_default) => {
    
    (async () => {
        try {
           
            
            let tableBody = document.getElementById("tabla");
            tableBody.innerHTML ="";
            
            const response = await fetch("https://api-football-standings.azharimm.site/leagues/"+idLiga+"/standings?season=2020&sort=asc");
            const data = await response.json();
            
            posiciones = data.data.standings
            
            let rank = 0
            posiciones.forEach((posicione) => {
                
                let equipo = posicione.team.name;
                let pj = posicione.stats[3].value
                let g = posicione.stats[0].value;
                let pt = posicione.stats[6].value
                rank++;
                let plantilla = `
                <tr>
                <th scope="row">${rank}</th>
                <td>${equipo}</td>
                <td>${pj}</td>
                <td>${g}</td>
                <td>${pt}</td>
                </tr>
                `
                tableBody.innerHTML += plantilla;
            });


        } catch (err) {
            console.error(err);
        }
    })();
}

let interaccionTabla=()=>{
    let select=  document.getElementById("select");
    let NombreLiga
    select.addEventListener('change',()=>{       
        nameLiga=document.getElementById("NombreLiga");
        nameLiga.innerText=select.options[select.selectedIndex].textContent
          cargarTabla(select.value);
  
    })

}