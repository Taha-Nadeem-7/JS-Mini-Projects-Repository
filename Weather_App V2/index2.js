const PayerTiming = document.querySelector(".PayerTiming");
const card = document.querySelector(".card");

async function getPrayerData(date) {  
    const apiurl = `https://api.aladhan.com/v1/timingsByCity/${date}?city=karachi?country=pakistan`; // Specify city
    console.log("Fetching data from:", apiurl); // Log the API URL
    const response = await fetch(apiurl);

    if (!response.ok) {
        const errorData = await response.json();
        console.error("API error:", errorData); // Log the error response
        throw new Error(errorData.message || "Could not fetch prayer data");
    }
    return await response.json();
}

PayerTiming.addEventListener("submit", async (event) => {
    event.preventDefault();

    const date = "13-10-2024"; // Correct date format
    try {
        const data = await getPrayerData(date);
        displayPayerInfo(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayError(error.message || "An error occurred");
    }
});

function displayPayerInfo(data) {
    const timings = data.data.timings;            
    card.textContent = "";
    card.style.display = "flex";

    const Fajar_timming = document.createElement("h1");
    const Zuhur_timming = document.createElement("p");
    const Asr_timming = document.createElement("p");
    const Maghrib_timming = document.createElement("p");
    const Isha_timming = document.createElement("p");

    Fajar_timming.textContent = `Fajr: ${timings.Fajr}`;
    Zuhur_timming.textContent = `Dhuhr: ${timings.Dhuhr}`;
    Asr_timming.textContent = `Asr: ${timings.Asr}`;
    Maghrib_timming.textContent = `Maghrib: ${timings.Maghrib}`;
    Isha_timming.textContent = `Isha: ${timings.Isha}`;

    card.appendChild(Fajar_timming);
    card.appendChild(Zuhur_timming);
    card.appendChild(Asr_timming);
    card.appendChild(Maghrib_timming);
    card.appendChild(Isha_timming);
}

function displayError(message) {
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}
