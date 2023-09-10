

const API_BASE_URL = "https://restcountries.com/v3.1/name/";


async function traerFetch(pais) {
  try {
    const url = `${API_BASE_URL}${pais}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error trayendo la data:", error);
    throw error; // Re-lanzamos el error para que se maneje en el lugar adecuado
  }
}

ís
async function mostramePais(pais) {
  try {
    let resultado = document.getElementById("resultado");
    let data = await traerFetch(pais);

    resultado.innerHTML = ""; 

    data.forEach(element => {
      resultado.innerHTML += `
      <div class="estilo">
        <h1> ${element.name.common}</h1>
        <img src="${element.flags.png}"/>
        <h1> Nombre oficial : ${element.translations.spa.official}</h1>
        <h2> Capital: ${element.capital[0]}</h2>
        <h3> Continente: ${element.continents[0]}</h3>
        <h3> Lenguaje : ${element.languages.spa}</h3>
        </div>
        `;
    });
  } catch (error) {
    resultado.innerHTML += "<div class='estilo'>Error mostrando el país, pruebe en ingles</div>";
  }
}


function tomandoLocal() {

  const busqueda = document.getElementById("campoTexto").value.trim(); 
  mostramePais(busqueda);
};
