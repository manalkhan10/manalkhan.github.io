
//Defining variables for the Panda Clock
var happypandatime = 7;
var noon = 12;
var grumpypandatime = 12;
var babypandatime = grumpypandatime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // this sets the hours of the current time
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }

    // this sets the minutes of the current time
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // this sets the minutes of the current time
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");

  
  if (time == partytime)
  {
    image = "partytime.jpg";
    messageText = "Let's party!";
  }
  else if (time == happypandatime)
  {
    image = "HappyPanda.jpg";
    messageText = "HAPPY PANDA.";
  }
  else if (time == grumpypandatime)
  {
    image = "GrumpyPanda.jpg";
    messageText = "GRUMPY PANDA";
  }
  else
  {
    image = "BabyPanda.jpg";
    messageText = "BABY PANDA";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolpandaImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Getting the happy panda selector to work, where picture is displayed when current time is selected
var happypandaTimeSelector =  document.getElementById("happypandaTimeSelector");

var happypandaEvent = function()
{
    happypandatime = happypandaTimeSelector.value;
};

happypandaTimeSelector.addEventListener("change", happypandaEvent);


// Getting the grumpy panda selector to work, where picture is displayed when current time is selected
var grumpypandaTimeSelector =  document.getElementById("grumpypandaTimeSelector");

var grumpypandaEvent = function()
{
    grumpypandatime = grumpypandaTimeSelector.value;
};

grumpypandaTimeSelector.addEventListener("change", grumpypandaEvent);


// Getting the baby panda selector to work, where picture is displayed when current time is selected
var babypandaTimeSelector =  document.getElementById("babypandaTimeSelector");

var babypandaEvent = function()
{
    babypandatime = babypandaTimeSelector.value;
};

babypandaTimeSelector.addEventListener("change", babypandaEvent);