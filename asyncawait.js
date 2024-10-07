//ASYNC AND AWAIT PRACTICE

/*const fetchAdviceById = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.json();
    })
    .then((data) => {
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${id}): ${advice}`);
    })
    .catch((error) => {
        console.error("Error fetching advice:", error.message)
    });
};*/


/*const fetchAdviceById = async(id) => {
    try{
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`)
        if (!response.ok){
            throw new Error ("Network response was not ok");
        }
        const data = await response.json();
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${id}): ${advice}`);
    }catch (error) {
        console.log(error);
    }
};
fetchAdviceById(13); */

/*const weatherInHelsingborg = async () => {
    try {
        const response = await fetch 
        ("https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&current=temperature_2m&timezone=Europe%2FBerlin");
        const data = await response.json();
        console.log("The temperature in Helsingborg is currently " 
            + data.current.temperature_2m
            + data.current_units.temperature_2m);
    } catch (err) {
        console.log(err);
    }
};
weatherInHelsingborg();*/



const apiKey = "b94ce6fe065c918eef660d7b7b19b45f";
const lat = 56.0467;
const lon = 12.6944;
const units = "metric";
const weatherInHelsingborg = async () => {
    try {
        const response = await fetch 
        (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);

        const data = await response.json();
        console.log("The temperature in " + data.name + " is " + data.main.temp + " degrees celcius.");

    } catch (err) {
        console.log(err);
    }
};
weatherInHelsingborg();


