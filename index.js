// Get Value using ENTER KEY
function Enter() {
    var input = document.getElementById("Region");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("select").click();
        }
    });
}


//LANDING PAGE
function Display() {
    let region = document.getElementById("Region").value;
    document.getElementById("select").style.display = "none";
    document.getElementById("Region").style.display = "none";
    localStorage.setItem("Country_Name", region);
    const api_url = `https://api.weatherapi.com/v1/current.json?key=e44917d5033a4b33bb3105551232005&q=` + region + `&aqi=no`;
    result(api_url);
}

// RESULT PAGE
async function result(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}

// TO SHOW DATA
function show(data) {

    let text = "";
    let i = 0;
    let country = localStorage.getItem("Country_Name");
    text += "Name : " + data.location[Object.keys(data.location)[i]] + "\n ";
    i++;
    text += "Region : " + data.location[Object.keys(data.location)[i]] + "\n ";
    i++;
    text += "Country : " + data.location[Object.keys(data.location)[i]] + "\n ";
    i = 1;
    text += "Temperature : " + data.current[Object.keys(data.current)[i]] + " \xB0C\n";
    i++;
    text += "Temperature : " + data.current[Object.keys(data.current)[i]] + " \xB0F\n";
    i++;
    i++;
    text += "Wind Speed : " + data.current[Object.keys(data.current)[i]] + " km/hr\n";
    i++;
    text += "Humidity : " + data.current[Object.keys(data.current)[i]] + " %\n";
    i++;
    text += "Cloud : " + data.current[Object.keys(data.current)[i]] + "\n";
    i++;
    text += "UV : " + data.current[Object.keys(data.current)[i]] + "\n";
    document.getElementById("Data_Box").style.display = "block";
    document.getElementById("Expectations").style.display = "block";
    document.getElementById("Weather").style.display = "block";
    document.getElementById("Data").innerText = text;
    localStorage.removeItem("Country_Name");
    console.log(text);
}



