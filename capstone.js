var key = "945d5475efa4420a94c184150171502"
var weatherURL = ""
var topImage = ""
var bottomImage = ""
var shoesImage = ""
var start = document.getElementById("start")
var data

var topH = ["hm", "rainbow", "troye", "art"]
var topM = ["blue","hm", "rainbow", "sweater", "troye", "art"]
var topC = ["blue", "sweater"]
var bottomH = ["dress", "shorts"]
var bottomM = ["aesthetic", "dress", "jeans"]
var bottomC = ["aesthetic", "dress", "jeans"]
var shoesH = ["adidas"]
var shoesM = ["adidas", "boots", "creme"]
var shoesC = ["boots"]

function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

function showForecast(dataTemp) {
  document.getElementById("body").style.background = "transparent"
  console.log(data)
  data = dataTemp
  var location = data['location']['name']
  var region = data['location']['region']
  var body = document.getElementById("body")

  var temperature = data['current']['temp_f']
  var temperatureC = data['current']['temp_c']
  var high = data['forecast']['forecastday'][0]['day']['maxtemp_f']
  var highC = data['forecast']['forecastday'][0]['day']['maxtemp_c']
  var low = data['forecast']['forecastday'][0]['day']['mintemp_f']
  var lowC = data['forecast']['forecastday'][0]['day']['mintemp_c']
  var condition = data['current']['condition']['text']
  var date = data['forecast']['forecastday'][0]['date']
  var con = data['forecast']['forecastday'][0]['day']['condition']['text']

  var maxF1 = data['forecast']['forecastday'][1]['day']['maxtemp_f']
  var maxC1 = data['forecast']['forecastday'][1]['day']['maxtemp_c']
  var minF1 = data['forecast']['forecastday'][1]['day']['mintemp_f']
  var minC1 = data['forecast']['forecastday'][1]['day']['mintemp_c']
  var con1 = data['forecast']['forecastday'][1]['day']['condition']['text']
  var date1 = data['forecast']['forecastday'][1]['date']

  var maxF2 = data['forecast']['forecastday'][2]['day']['maxtemp_f']
  var maxC2 = data['forecast']['forecastday'][2]['day']['maxtemp_c']
  var minF2 = data['forecast']['forecastday'][2]['day']['mintemp_f']
  var minC2 = data['forecast']['forecastday'][2]['day']['mintemp_c']
  var con2 = data['forecast']['forecastday'][2]['day']['condition']['text']
  var date2 = data['forecast']['forecastday'][2]['date']

  var maxF3 = data['forecast']['forecastday'][3]['day']['maxtemp_f']
  var maxC3 = data['forecast']['forecastday'][3]['day']['maxtemp_c']
  var minF3 = data['forecast']['forecastday'][3]['day']['mintemp_f']
  var minC3 = data['forecast']['forecastday'][3]['day']['mintemp_c']
  var con3 = data['forecast']['forecastday'][3]['day']['condition']['text']
  var date3 = data['forecast']['forecastday'][3]['date']

  var maxF4 = data['forecast']['forecastday'][4]['day']['maxtemp_f']
  var maxC4 = data['forecast']['forecastday'][4]['day']['maxtemp_c']
  var minF4 = data['forecast']['forecastday'][4]['day']['mintemp_f']
  var minC4 = data['forecast']['forecastday'][4]['day']['mintemp_c']
  var con4 = data['forecast']['forecastday'][4]['day']['condition']['text']
  var date4 = data['forecast']['forecastday'][4]['date']

  if(temperature >= 90){
    body.style.backgroundColor = "#ff6961"
  }
  else if(temperature > 80 ){
    body.style.backgroundColor = "#ffb347"
  }
  else if(temperature > 65 ){
    body.style.backgroundColor = "#F5E89A"
  }
  else if(temperature > 55){
    body.style.backgroundColor = "#AAD7C1"
  }
  else if(temperature > 45){
    document.getElementById("imagecontainer").style.right = "15%"
    body.style.backgroundColor = "#BACAE2"
  }
  else if(temperature > 35 ){
    body.style.backgroundColor = "#D0BBD9"
  }
  else if(temperature <= 35 ){
    body.style.backgroundColor = "#ffffff"
  }

  document.getElementById("refresh").innerHTML = "<i class='material-icons md-48'>refresh</i>"
  document.getElementById("locationcontainer").innerHTML = location + ", " + region
  document.getElementById("weatherinfocontainer").innerHTML = date  + "<br>" + "<br> today's high: " + high + "°F | " + highC + "°C" + "<br><br> today's  low: " + low + "°F | " + lowC + "°C<br>" + con + "<br><br>current conditions:<br>" + temperature + "°F | " + temperatureC + "°C" + "<br>" + condition
  document.getElementById("forecastcontainer").innerHTML = date1 + "<br><br>high:<br>" + maxF1 + "°F | " + maxC1 + "°C" + "<br>low:<br>" + minF1 + "°F | " + minC1 + "°C <br><br>" + con1
  document.getElementById("forecastcontainer2").innerHTML = date2 + "<br><br>high:<br>" + maxF2 + "°F | " + maxC2 + "°C" + "<br>low:<br>" + minF2 + "°F | " + minC2 + "°C <br><br>" + con2
  document.getElementById("forecastcontainer3").innerHTML = date3 + "<br><br>high:<br>" + maxF3 + "°F | " + maxC3 + "°C" + "<br>low:<br>" + minF3 + "°F | " + minC3 + "°C <br><br>" + con3
  document.getElementById("forecastcontainer4").innerHTML = date4 + "<br><br>high:<br>" + maxF4 + "°F | " + maxC4 + "°C" + "<br>low:<br>" + minF4 + "°F | " + minC4 + "°C <br><br>" + con4

}

function right(){
      document.getElementById("right").style.opacity = "0"
      document.getElementById("left").style.opacity = "1"
      document.getElementById("weatherinfocontainer").style.opacity = "0"
      document.getElementById("forecastcontainer").style.opacity = "0"
      document.getElementById("forecastcontainer2").style.opacity = "0"
      document.getElementById("forecastcontainer3").style.opacity = "0"
      document.getElementById("forecastcontainer4").style.opacity = "0"

      document.getElementById("forecastcontainer5").style.opacity = "1"
      document.getElementById("forecastcontainer6").style.opacity = "1"
      document.getElementById("forecastcontainer7").style.opacity = "1"
      document.getElementById("forecastcontainer8").style.opacity = "1"
      document.getElementById("forecastcontainer9").style.opacity = "1"

      document.getElementById("forecastcontainer5").style.border = "4px solid black"
      document.getElementById("forecastcontainer6").style.border = "4px solid black"
      document.getElementById("forecastcontainer7").style.border = "4px solid black"
      document.getElementById("forecastcontainer8").style.border = "4px solid black"
      document.getElementById("forecastcontainer9").style.border = "4px solid black"

      var maxF5 = data['forecast']['forecastday'][5]['day']['maxtemp_f']
      var maxC5 = data['forecast']['forecastday'][5]['day']['maxtemp_c']
      var minF5 = data['forecast']['forecastday'][5]['day']['mintemp_f']
      var minC5 = data['forecast']['forecastday'][5]['day']['mintemp_c']
      var con5 = data['forecast']['forecastday'][5]['day']['condition']['text']
      var date5 = data['forecast']['forecastday'][5]['date']

      var maxF6 = data['forecast']['forecastday'][6]['day']['maxtemp_f']
      var maxC6 = data['forecast']['forecastday'][6]['day']['maxtemp_c']
      var minF6 = data['forecast']['forecastday'][6]['day']['mintemp_f']
      var minC6 = data['forecast']['forecastday'][6]['day']['mintemp_c']
      var con6 = data['forecast']['forecastday'][6]['day']['condition']['text']
      var date6 = data['forecast']['forecastday'][6]['date']

      var maxF7 = data['forecast']['forecastday'][7]['day']['maxtemp_f']
      var maxC7 = data['forecast']['forecastday'][7]['day']['maxtemp_c']
      var minF7 = data['forecast']['forecastday'][7]['day']['mintemp_f']
      var minC7 = data['forecast']['forecastday'][7]['day']['mintemp_c']
      var con7 = data['forecast']['forecastday'][7]['day']['condition']['text']
      var date7 = data['forecast']['forecastday'][7]['date']

      var maxF8 = data['forecast']['forecastday'][8]['day']['maxtemp_f']
      var maxC8 = data['forecast']['forecastday'][8]['day']['maxtemp_c']
      var minF8 = data['forecast']['forecastday'][8]['day']['mintemp_f']
      var minC8 = data['forecast']['forecastday'][8]['day']['mintemp_c']
      var con8 = data['forecast']['forecastday'][8]['day']['condition']['text']
      var date8 = data['forecast']['forecastday'][8]['date']

      var maxF9 = data['forecast']['forecastday'][9]['day']['maxtemp_f']
      var maxC9 = data['forecast']['forecastday'][9]['day']['maxtemp_c']
      var minF9 = data['forecast']['forecastday'][9]['day']['mintemp_f']
      var minC9 = data['forecast']['forecastday'][9]['day']['mintemp_c']
      var con9 = data['forecast']['forecastday'][9]['day']['condition']['text']
      var date9 = data['forecast']['forecastday'][9]['date']

      document.getElementById("forecastcontainer5").innerHTML = date5 + "<br><br>high:<br>" + maxF5 + "°F | " + maxC5 + "°C" + "<br>low:<br>" + minF5 + "°F | " + minC5 + "°C <br><br>" + con5
      document.getElementById("forecastcontainer6").innerHTML = date6 + "<br><br>high:<br>" + maxF6 + "°F | " + maxC6 + "°C" + "<br>low:<br>" + minF6 + "°F | " + minC6 + "°C <br><br>" + con6
      document.getElementById("forecastcontainer7").innerHTML = date7 + "<br><br>high:<br>" + maxF7 + "°F | " + maxC7 + "°C" + "<br>low:<br>" + minF7 + "°F | " + minC7 + "°C <br><br>" + con7
      document.getElementById("forecastcontainer8").innerHTML = date8 + "<br><br>high:<br>" + maxF8 + "°F | " + maxC8 + "°C" + "<br>low:<br>" + minF8 + "°F | " + minC8 + "°C <br><br>" + con8
      document.getElementById("forecastcontainer9").innerHTML = date9 + "<br><br>high:<br>" + maxF9 + "°F | " + maxC9 + "°C" + "<br>low:<br>" + minF9 + "°F | " + minC9 + "°C <br><br>" + con9

  }

function left(){
    document.getElementById("right").style.opacity = "1"
    document.getElementById("left").style.opacity = "0"

    document.getElementById("forecastcontainer5").style.opacity = "0"
    document.getElementById("forecastcontainer6").style.opacity = "0"
    document.getElementById("forecastcontainer7").style.opacity = "0"
    document.getElementById("forecastcontainer8").style.opacity = "0"
    document.getElementById("forecastcontainer9").style.opacity = "0"


    document.getElementById("weatherinfocontainer").style.opacity = "1"
    document.getElementById("forecastcontainer").style.opacity = "1"
    document.getElementById("forecastcontainer2").style.opacity = "1"
    document.getElementById("forecastcontainer3").style.opacity = "1"
    document.getElementById("forecastcontainer4").style.opacity = "1"
    document.getElementById("weatherinfocontainer").style.border = "4px solid black"
    document.getElementById("forecastcontainer").style.border = "4px solid black"
    document.getElementById("forecastcontainer2").style.border = "4px solid black"
    document.getElementById("forecastcontainer3").style.border = "4px solid black"
    document.getElementById("forecastcontainer4").style.border = "4px solid black"

    var temperature = data['current']['temp_f']
    var temperatureC = data['current']['temp_c']
    var high = data['forecast']['forecastday'][0]['day']['maxtemp_f']
    var highC = data['forecast']['forecastday'][0]['day']['maxtemp_c']
    var low = data['forecast']['forecastday'][0]['day']['mintemp_f']
    var lowC = data['forecast']['forecastday'][0]['day']['mintemp_c']
    var condition = data['current']['condition']['text']
    var date = data['forecast']['forecastday'][0]['date']

    var maxF1 = data['forecast']['forecastday'][1]['day']['maxtemp_f']
    var maxC1 = data['forecast']['forecastday'][1]['day']['maxtemp_c']
    var minF1 = data['forecast']['forecastday'][1]['day']['mintemp_f']
    var minC1 = data['forecast']['forecastday'][1]['day']['mintemp_c']
    var con1 = data['forecast']['forecastday'][1]['day']['condition']['text']
    var date1 = data['forecast']['forecastday'][1]['date']

    var maxF2 = data['forecast']['forecastday'][2]['day']['maxtemp_f']
    var maxC2 = data['forecast']['forecastday'][2]['day']['maxtemp_c']
    var minF2 = data['forecast']['forecastday'][2]['day']['mintemp_f']
    var minC2 = data['forecast']['forecastday'][2]['day']['mintemp_c']
    var con2 = data['forecast']['forecastday'][2]['day']['condition']['text']
    var date2 = data['forecast']['forecastday'][2]['date']

    var maxF3 = data['forecast']['forecastday'][3]['day']['maxtemp_f']
    var maxC3 = data['forecast']['forecastday'][3]['day']['maxtemp_c']
    var minF3 = data['forecast']['forecastday'][3]['day']['mintemp_f']
    var minC3 = data['forecast']['forecastday'][3]['day']['mintemp_c']
    var con3 = data['forecast']['forecastday'][3]['day']['condition']['text']
    var date3 = data['forecast']['forecastday'][3]['date']

    var maxF4 = data['forecast']['forecastday'][4]['day']['maxtemp_f']
    var maxC4 = data['forecast']['forecastday'][4]['day']['maxtemp_c']
    var minF4 = data['forecast']['forecastday'][4]['day']['mintemp_f']
    var minC4 = data['forecast']['forecastday'][4]['day']['mintemp_c']
    var con4 = data['forecast']['forecastday'][4]['day']['condition']['text']
    var date4 = data['forecast']['forecastday'][4]['date']

    document.getElementById("weatherinfocontainer").innerHTML = date + "<br><br>current conditions:<br>" + temperature + "°F | " + temperatureC + "°C" + "<br>" + condition + "<br>" + "<br> today's high: " + high + "°F | " + highC + "°C" + "<br><br> today's  low: " + low + "°F | " + lowC + "°C"
    document.getElementById("forecastcontainer").innerHTML = date1 + "<br><br>high:<br>" + maxF1 + "°F | " + maxC1 + "°C" + "<br>low:<br>" + minF1 + "°F | " + minC1 + "°C <br><br>" + con1
    document.getElementById("forecastcontainer2").innerHTML = date2 + "<br><br>high:<br>" + maxF2 + "°F | " + maxC2 + "°C" + "<br>low:<br>" + minF2 + "°F | " + minC2 + "°C <br><br>" + con2
    document.getElementById("forecastcontainer3").innerHTML = date3 + "<br><br>high:<br>" + maxF3 + "°F | " + maxC3 + "°C" + "<br>low:<br>" + minF3 + "°F | " + minC3 + "°C <br><br>" + con3
    document.getElementById("forecastcontainer4").innerHTML = date4 + "<br><br>high:<br>" + maxF4 + "°F | " + maxC4 + "°C" + "<br>low:<br>" + minF4 + "°F | " + minC4 + "°C <br><br>" + con4
  }

function outfit() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][0]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][0]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit1() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][1]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][1]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit2() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][2]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][2]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit3() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][3]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][3]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit4() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][4]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][4]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit5() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][5]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][5]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit6() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][6]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][6]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit7() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][7]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][7]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit8() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][8]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][8]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function outfit9() {
  var topHR = random(0, topH.length - 1)
  var topMR = random(0, topM.length - 1)
  var topCR = random(0, topC.length - 1)
  var bottomHR = random(0, bottomH.length - 1)
  var bottomMR = random(0, bottomM.length - 1)
  var bottomCR = random(0, bottomC.length - 1)
  var shoesHR = random(0, shoesH.length - 1)
  var shoesMR = random(0, shoesM.length - 1)
  var shoesCR = random(0, shoesC.length - 1)

  var high = data['forecast']['forecastday'][9]['day']['maxtemp_f']
  var low = data['forecast']['forecastday'][9]['day']['mintemp_f']
  var temp = high + low
  var temperature = temp/2

  if(temperature >= 90){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 80 ){
    topImage = topH[topHR]
    bottomImage = bottomH[bottomHR]
    shoesImage = shoesH[shoesHR]
  }
  else if(temperature > 65 ){
    topImage = topM[topMR]
    bottomImage = bottomM[bottomMR]
    shoesImage = shoesM[shoesMR]
  }
  else if(temperature > 55){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 45){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature > 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }
  else if(temperature <= 35 ){
    topImage = topC[topCR]
    bottomImage = bottomC[bottomCR]
    shoesImage = shoesC[shoesCR]
  }

  document.getElementById("outfitcontainer").style.opacity = "1"
  document.getElementById("outfitcontainer").innerHTML = "<img id='top' src='images/" + topImage + ".jpg' width='auto' height='200'>" + "<img id='bottom' src='images/" + bottomImage + ".jpg' width='auto' height='200'>" + "<img id='shoes' src='images/"+ shoesImage + ".jpg' width='auto' height='200'>"
}

function makeRequest() {
  $.ajax({
    url: weatherURL,
    success: function(data) {
      showForecast(data)
    }
  })
}

function submit() {
  var input = (document.getElementById("zipcode").value).toLowerCase()

  weatherURL = "https://api.apixu.com/v1/forecast.json?key=" + key + "&q=" + input + "&days=10"

  makeRequest()

  start.style.display = "none"
  title.style.display = "none"
  document.getElementById("left").style.opacity = "0"
  document.getElementById("refresh").style.opacity = "1"
  document.getElementById("right").style.opacity = "1"
  document.getElementById("locationcontainer").style.border = "4px solid black"
  document.getElementById("weatherinfocontainer").style.border = "4px solid black"
  document.getElementById("forecastcontainer").style.border = "4px solid black"
  document.getElementById("forecastcontainer2").style.border = "4px solid black"
  document.getElementById("forecastcontainer3").style.border = "4px solid black"
  document.getElementById("forecastcontainer4").style.border = "4px solid black"
  document.getElementById("outfitcontainer").style.border = "4px solid black"
}

$("#zipcode").keydown(function(e){
  if(e.keyCode == 13){
    submit()
  }
})

function refresh(){
  location.reload()
}
