

const barsBtn = document.querySelector(".bars")
const navList = document.querySelector(".nav-list")
barsBtn.addEventListener("click",function(){
if(navList.style.display == "block"){
    navList.style.display = "none"
}else{
    navList.style.display = "block"
}
})

const currentTemp = document.getElementById("currentTemp")
const city = document.getElementById("city")
const currentCloud = document.getElementById("currentCloud")
const currCondIcon = document.getElementById("currCondIcon")
const windK = document.getElementById("windK")

const secondIcon=document.getElementById("secondIcon")
const secondMaxTemp=document.getElementById("secondMaxTemp")
const secondMinTemp=document.getElementById("secondMinTemp")
const secondCloud=document.getElementById("secondCloud")

const thirdIcon=document.getElementById("thirdIcon")
const thirdMaxTemp=document.getElementById("thirdMaxTemp")
const thirdMinTemp=document.getElementById("thirdMinTemp")
const thirdCloud=document.getElementById("thirdCloud")

const todayOfWeek = document.getElementById("todayOfWeek")
const todayDate = document.getElementById("todayDate")
const secondDay = document.getElementById("secondDay")
const thirdDay = document.getElementById("thirdDay")

var date = new Date()
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days =     ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 
 var month =  date.getMonth();
 var day   =  date.getDay();
  

todayDate.innerHTML = (date.getDate().toString())+(months[month])
todayOfWeek.innerHTML = (days[day])

if(day == 5){
    secondDay.innerHTML = (days[day+1])
    thirdDay.innerHTML = (days[0])
}else if(day==6){
    secondDay.innerHTML = (days[0])
    thirdDay.innerHTML = (days[1])
}else{
    secondDay.innerHTML = (days[day+1])
thirdDay.innerHTML = (days[day+2])
}
 
async function getcity() {
    const x= await  fetch("https://ipapi.co/json/")
    const data = await x.json()
       data.city.toLowerCase()
       getCurrentApi(data.city.toLowerCase())
  }
  getcity()
async function getCurrentApi(land) {
    const y = await  fetch(`http://api.weatherapi.com/v1/forecast.json?key=f8785782be3945b0b43174702241112&q=${land}&days=7`);
    const x = await y.json();

     city.innerHTML= x.location.name
     currentTemp.innerHTML = x.current.temp_c 
     currCondIcon.setAttribute("src",`https:${x.current.condition.icon}`)
     currentCloud.innerHTML = x.current.condition.text
     windK.innerHTML = Math.floor(x.current.wind_kph )

      secondMaxTemp.innerHTML = x.forecast.forecastday[1].day.maxtemp_c
      secondMinTemp.innerHTML = x.forecast.forecastday[1].day.mintemp_c
      secondCloud.innerHTML = x.forecast.forecastday[1].day.condition.text
      secondIcon.setAttribute("src",`https:${x.forecast.forecastday[1].day.condition.icon}`)

      thirdMaxTemp.innerHTML = x.forecast.forecastday[2].day.maxtemp_c
      thirdMinTemp.innerHTML = x.forecast.forecastday[2].day.mintemp_c
      thirdCloud.innerHTML = x.forecast.forecastday[2].day.condition.text
      thirdIcon.setAttribute("src",`https:${x.forecast.forecastday[2].day.condition.icon}`)    

}
function search(land){
    getCurrentApi(land)
}


 

