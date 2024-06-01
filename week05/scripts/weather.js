// Selecting the HTML element in the document ,
// first select all of the HTML elements, 
// that will need to be manipulated and assign them to const variables.
const myTemperature = document.querySelector("#temperature");
const myDescription = document.querySelector("#description");
const myTown = document.querySelector("#town");
const myGraphic = document.querySelector("#graphic");
//creating required varriables for the url
const myKey = "437205d363a4387ab2f5dffcea58btee"
const myLat = "0.31689"
const myLon = "32.58540"
//creating a URL path using templete literals,
//Declare a const variable named "url" and assign it a valid URL string as coppied from the openweathermap.org.

const myURL = "https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial";
// Try to grab the current Weather Data
async function apiFetch() {
    try{
      const response = await fetch(myURL);
      if(response.ok) {
        const data = await response.json();
        console.log(data); // testing only
         displayResults(data); //uncomment when ready
      } else{
          throw Error(await response.text());
      }
      } catch (error) {
          console.log(error);
        } 
        //display the jason data on my web page.
    function displayResult(data){
        console.log("hello")
        myTown.innerHTML=data.name
        myDescription.innerHTML=data.weather[0].description
        myTemperature.innerHTML='${data.main.temp}&deg;F';
        const iconscr='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'
        
    }
}
apiFetch();




