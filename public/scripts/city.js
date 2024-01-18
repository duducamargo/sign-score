let resul = document.getElementById("resultado");
let next = document.getElementById("change");
let prev = document.getElementById("previous");
let aviso = document.getElementById("aviso");
let i = 0;

let city = localStorage.getItem("cidadevalue");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 1200);

  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  function showContent() {
    const content = document.getElementById("resultado");
    content.style.display = "block";
  }
});

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

next.addEventListener("click", change);
prev.addEventListener("click", previous);

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
      if (i > response.length - 1) {
        i = response.length - 1;
      }

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

function previous() {
  i = i - 1;

  axios({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/geocoding?city=" + city,
    headers: {
      "X-Api-Key": "yrfCnwAaKOMqP8QRyV4WZg==jIUypKfcBeX1yrlk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (i <= 0) {
        i = 0;
      }

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
