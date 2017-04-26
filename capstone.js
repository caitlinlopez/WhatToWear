var key = "945d5475efa4420a94c184150171502"
var weatherURL = ""
var image = ""
var start = document.getElementById("start")

function showAnimal(data) {
  console.log(data)
  var temperature = data['current']['temp_f']
  var temperatureC = data['current']['temp_c']
  var location = data['location']['name']
  var region = data['location']['region']
  var body = document.getElementById("body")
  var condition = data['current']['condition']['text']
  var high = data['forecast']['forecastday'][0]['day']['maxtemp_f']
  var highC = data['forecast']['forecastday'][0]['day']['maxtemp_c']
  var low = data['forecast']['forecastday'][0]['day']['mintemp_f']
  var lowC = data['forecast']['forecastday'][0]['day']['mintemp_c']
  //var forecast = data['forecast']['forecastday'][2]['maxtemp_f']

  if(temperature >= 90){
    //image = "bffls.jpg"
    body.style.backgroundColor = "#ff6961"
  }
  else if(temperature > 80 ){
    //image = "flowers.jpg"
    body.style.backgroundColor = "#ffb347"
  }
  else if(temperature > 65 ){
    //image = "doggos.jpg"
    body.style.backgroundColor = "#F5E89A"
  }
  else if(temperature > 55){
    //image = "cherryblossom.jpg"
    body.style.backgroundColor = "#AAD7C1"
  }
  else if(temperature > 45){
    //image = "squish.jpg"
    document.getElementById("imagecontainer").style.right = "15%"
    body.style.backgroundColor = "#BACAE2"
  }
  else if(temperature > 35 ){
    //image = "blanket.jpg"
    body.style.backgroundColor = "#D0BBD9"
  }
  else if(temperature <= 35 ){
    //image = "snow.jpg"
    body.style.backgroundColor = "#ffffff"
  }
  document.getElementById("refresh").innerHTML = "<img src='images/icon.png' width='auto' height='50'>"
  document.getElementById("locationcontainer").innerHTML = location + ", " + region
  document.getElementById("weatherinfocontainer").innerHTML = "current conditions:<br>" + temperature + "°F | " + temperatureC + "°C" + "<br>" + condition + "<br>" + "<br> today's high: " + high + "°F | " + highC + "°C" + "<br> today's  low: " + low + "°F | " + lowC + "°C"
  //document.getElementById("forecastcontainer").innerHTML = "<br> tomorrow's high: " + high + "°F | " + highC + "°C" + "<br> tomorrow's  low: " + low + "°F | " + lowC + "°C"
  //document.getElementById("imagecontainer").innerHTML = "<img src='images/" + image + "' width='auto' height='300'>"
  //document.getElementById("forecast").innerHTML = ""
}

function makeRequest() {
  $.ajax({
    url: weatherURL,
    success: function(data) {
      showAnimal(data)
    }
  })
}

function submit() {
  var input = (document.getElementById("zipcode").value).toLowerCase()

  weatherURL = "https://api.apixu.com/v1/forecast.json?key=" + key + "&q=" + input + "&days=2"

  makeRequest()

  start.style.display = "none"
  document.getElementById("locationcontainer").style.border = "4px solid black"
  document.getElementById("weatherinfocontainer").style.border = "4px solid black"
}

$("#zipcode").keydown(function(e){
  if(e.keyCode == 13){
    submit()
  }
})

function refresh(){
  location.reload()
}
