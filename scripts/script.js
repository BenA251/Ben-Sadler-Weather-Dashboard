
//script to update all dates for the days using dayjs

const today = dayjs();
const secondDate = today.add(1, 'day');
const thirdDate = today.add(2, 'day');
const forthDate = today.add(3, 'day');
const fifthDate = today.add(4, 'day');
const sixthDate = today.add(5, 'day');

$("#secondDate").text(secondDate.format("DD/MM/YYYY"));
$("#thirdDate").text(thirdDate.format("DD/MM/YYYY"));
$("#forthDate").text(forthDate.format("DD/MM/YYYY"));
$("#fifthDate").text(fifthDate.format("DD/MM/YYYY"));
$("#sixthDate").text(sixthDate.format("DD/MM/YYYY"));


//script for accessing API

const APIKey = "c27b6f158393dd9e97b1661d03e463b8";


//script for accessing and displaying current day info.

 $("#search-button").on("click", function (e) {
    e.preventDefault();
    
  const searchValue = $("#search-field").val().trim();
  
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}&units=metric`;

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    $("#currentCity").text(data.name + " " + today.format("DD/MM/YYYY"));
    $("#day1temp").text(data.main.temp);
    $("#day1wind").text(((data.wind.speed)*3.6).toPrecision(2));
    $("#day1humidity").text(data.main.humidity);
  
      })
        
    });


    //script for accessing and displaying next 5 - day data (not including today)

    $("#search-button").on("click", function (e) {
      e.preventDefault();
      
    const searchValue = $("#search-field").val().trim();
    
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${APIKey}&units=metric`;
  
      fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {  
        $("#day2temp").text(data.list[7].main.temp);
        $("#day2wind").text(((data.list[7].wind.speed)*3.6).toPrecision(2));
        $("#day2humidity").text(data.list[7].main.humidity);
        $("#day3temp").text(data.list[15].main.temp);
        $("#day3wind").text(((data.list[15].wind.speed)*3.6).toPrecision(2));
        $("#day3humidity").text(data.list[15].main.humidity);
        $("#day4temp").text(data.list[23].main.temp);
        $("#day4wind").text(((data.list[23].wind.speed)*3.6).toPrecision(2));
        $("#day4humidity").text(data.list[23].main.humidity);
        $("#day5temp").text(data.list[31].main.temp);
        $("#day5wind").text(((data.list[31].wind.speed)*3.6).toPrecision(2));
        $("#day5humidity").text(data.list[31].main.humidity);
        $("#day6temp").text(data.list[39].main.temp);
        $("#day6wind").text(((data.list[39].wind.speed)*3.6).toPrecision(2));
        $("#day6humidity").text(data.list[39].main.humidity);
        })
      
      
      });
  

//script for icon updates
//can set attribute background source to URL of image according to code in API.




    //script for saving previous searches to local storage and updating previous search history.





//when search using search button it passes value to fetch function which then interacts with API to retrieve data before updating html using jquery.

//when search is pressed the past search buttons are populated, when past search is pressed it also calls function same as search button which runs function but instead passes value of name in field.


//where do I get the future day look ahead

//where do I get the images from, 