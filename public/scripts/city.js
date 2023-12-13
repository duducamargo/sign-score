let resul = document.getElementById("resultado");
let bot = document.getElementById("change");
let aviso = document.getElementById("aviso");
let i = 0;

let city = localStorage.getItem("cidadevalue");

axios({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/geocoding?city=" + city,
  headers: {
    "X-Api-Key": "yrfCnwAaKOMqP8QRyV4WZg==jIUypKfcBeX1yrlk",
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    resul.innerHTML = `Name: ${JSON.stringify(
      response.data[i].name
    )}<br>Longitude: ${JSON.stringify(
      response.data[i].longitude
    )}<br>Latitude: ${JSON.stringify(
      response.data[i].latitude
    )}<br>Country: ${JSON.stringify(
      response.data[i].country
    )}<br>State: ${JSON.stringify(response.data[i].state)}`;
  })
  .catch((error) => {
    console.error(
      "Error: ",
      error.response ? error.response.data : error.message
    );
  });

bot.addEventListener("click", change);

function change() {
  i = i + 1;

  if (i > 1) {
    aviso.innerHTML =
      "If the error persists, check if the name of the city you entered is written correctly";
  }

  axios({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/geocoding?city=" + city,
    headers: {
      "X-Api-Key": "yrfCnwAaKOMqP8QRyV4WZg==jIUypKfcBeX1yrlk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      resul.innerHTML = `Name: ${JSON.stringify(
        response.data[i].name
      )}<br>Longitude: ${JSON.stringify(
        response.data[i].longitude
      )}<br>Latitude: ${JSON.stringify(
        response.data[i].latitude
      )}<br>Country: ${JSON.stringify(
        response.data[i].country
      )}<br>State: ${JSON.stringify(response.data[i].state)}`;
    })
    .catch((error) => {
      console.error(
        "Error: ",
        error.response ? error.response.data : error.message
      );
    });
}
