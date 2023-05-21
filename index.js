//Landing Page
function Call(event) {
    let country = event.target.getAttribute("value");
    localStorage.setItem("Country_Name", country);
    document.getElementById("Options").style.display="none";
    const api_url = `http://api.weatherapi.com/v1/current.json?key=e44917d5033a4b33bb3105551232005&q=`+country+`&aqi=no`;
    result(api_url);
    
}

function Display() {
    document.getElementById("Countries").style.display = "block";
    document.getElementById("select").style.display="none";
}

// Result Page
async function result(url) {
    const response = fetch(url);
    var data = await response.json();
    show(data);
}


function show(data) {

    let text = "";
    let i = 0;
    let country = localStorage.getItem("Country_Name");
    text += `Region : ${country} \n`;
    i++;
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
    document.getElementById("Data_Box").style.display="block";
    document.getElementById("Expectations").style.display="block";
    document.getElementById("Weather").style.display="block";
    document.getElementById("Data").innerText = text;
    console.log(text);
}



