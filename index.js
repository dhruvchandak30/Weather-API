function call() {
    let country = document.getElementById("country").value;
    let text = "http://api.weatherapi.com/v1/current.json?key=e44917d5033a4b33bb3105551232005&q=" + country + "&aqi=no";

    let p = fetch("http://api.weatherapi.com/v1/current.json?key=e44917d5033a4b33bb3105551232005&q=London&aqi=no");
    p.then((value1) => {
        return value1.json();
    }).then((value2) => {
        console.log(value2);
    })
}
