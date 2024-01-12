
//script to update all the dates for the days using dayjs

const today = dayjs();
const secondDate = today.add(1, 'day')
const thirdDate = today.add(2, 'day')
const forthDate = today.add(3, 'day')
const fifthDate = today.add(4, 'day')
const sixthDate = today.add(5, 'day')

$("#currentDate").text(" " + today.format("DD/MM/YYYY"));
$("#secondDate").text(secondDate.format("DD/MM/YYYY"));
$("#thirdDate").text(thirdDate.format("DD/MM/YYYY"));
$("#forthDate").text(forthDate.format("DD/MM/YYYY"));
$("#fifthDate").text(fifthDate.format("DD/MM/YYYY"));
$("#sixthDate").text(sixthDate.format("DD/MM/YYYY"));





//when search using search button it passes value to fetch function which then interacts with API to retrieve data before updating html using jquery.

//when search is pressed the past search buttons are populated, when past search is pressed it also calls function same as search button which runs function but instead passes value of name in field.
