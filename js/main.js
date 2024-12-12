

var barsBtn = document.querySelector(".bars")
var navList = document.querySelector(".nav-list")
barsBtn.addEventListener("click",function(){
if(navList.style.display == "block"){
    navList.style.display = "none"
}else{
    navList.style.display = "block"
}
})

var currentTemp = document.getElementById("currentTemp")
var city = document.getElementById("city")
var currentCloud = document.getElementById("currentCloud")
var currCondIcon = document.getElementById("currCondIcon")
var windK = document.getElementById("windK")

var secondIcon=document.getElementById("secondIcon")
var secondMaxTemp=document.getElementById("secondMaxTemp")
var secondMinTemp=document.getElementById("secondMinTemp")
var secondCloud=document.getElementById("secondCloud")

var thirdIcon=document.getElementById("thirdIcon")
var thirdMaxTemp=document.getElementById("thirdMaxTemp")
var thirdMinTemp=document.getElementById("thirdMinTemp")
var thirdCloud=document.getElementById("thirdCloud")

var todayOfWeek = document.getElementById("todayOfWeek")
var todayDate = document.getElementById("todayDate")
var secondDay = document.getElementById("secondDay")
var thirdDay = document.getElementById("thirdDay")

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
    var x= await  fetch("https://ipapi.co/json/")
    var data = await x.json()
       data.city.toLowerCase()
       getCurrentApi(data.city.toLowerCase())
  }
  getcity()
async function getCurrentApi(land) {
    var x = await (await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f8785782be3945b0b43174702241112&q=${land}&days=7`)).json()
    
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


 

