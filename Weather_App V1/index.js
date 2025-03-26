const wheatherForm=document.querySelector(".wheatherForm");
const cityInput = document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apiKey="key";

wheatherForm.addEventListener("submit", async event=>{

    event.preventDefault();

    const city=cityInput.value;

    if(city){
        try{
            const whetherData = await getwhetherData(city);
            displayWheatherInfo(whetherData);
            console.log(whetherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please enter a City");
    }

});
async function getwhetherData(city) {
    
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const reponse = await fetch(apiurl);

    if(!reponse.ok){
        throw new Error("Could not fetch weather Data");
    }
    return await reponse.json();
}

function displayWheatherInfo(data){

    const {name:city, 
        main:{temp,humidity,feels_like},
        weather:[{description,id}],
        sys:{sunrise,sunset},
        dt:current_time}=data;
        updateCardBackground(sunrise,sunset,current_time);

    card.textContent="";
    card.style.display = "flex";

    const cityDisplay=document.createElement("h1");
    const tempDisplay=document.createElement("p");
    const FeelliketempDisplay=document.createElement("p");
    const humidityDisply=document.createElement("p");
    const descDisplay=document.createElement("p");
    const wheatherEmoji=document.createElement("p");

    cityDisplay.textContent=city;
    tempDisplay.textContent=`Original temperature: ${(temp - 273.15).toFixed(1)}°C`;
    FeelliketempDisplay.textContent=(`Feels like: ${(feels_like - 273.15).toFixed(1)}°C`);
    humidityDisply.textContent=`Humidity: ${humidity}`;
    descDisplay.textContent=description;
    wheatherEmoji.textContent=getWhetherEmoji(id,sunrise,sunset,current_time);
        
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    FeelliketempDisplay.classList.add("feelliketemp");
    humidityDisply.classList.add("humidityDisply");
    descDisplay.classList.add("descDisplay");
    wheatherEmoji.classList.add("wheatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(FeelliketempDisplay);
    card.appendChild(humidityDisply);
    card.appendChild(descDisplay);
    card.appendChild(wheatherEmoji);
}
function getWhetherEmoji(weatherId,sunrise,sunset,current_time){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 505):
            return "🌦️";
        case (weatherId >= 505 && weatherId < 600):
            return "🌧️";  
        case (weatherId >= 600 && weatherId < 700):
            return "🌨️";    
        case (weatherId >= 700 && weatherId < 800):
                return "🌫";    
        case (weatherId === 800):
            return (current_time > sunrise && current_time < sunset) ? "☀️" : "🌙";
        case (weatherId>800 && weatherId < 804):
            return "⛅"
        case (weatherId >= 804 && weatherId<810):
            return "☁️";    
        default:
            return "?"; 
    }

}
function displayError(message){

    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}

function updateCardBackground(sunrise, sunset, current_time) {
    if (current_time > sunrise && current_time < sunset) {
        card.style.background="linear-gradient(180deg,hsl(261, 100%, 75%),hsl(39, 100%, 71%))";
    } 
    else {
        card.style.background="linear-gradient(180deg,hsl(281, 100%, 71%),hsl(229, 80%, 38%))";
    }
}