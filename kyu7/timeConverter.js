/*
Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"
*/

function convert(time){
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const miliseconds = String(time.getMilliseconds()).padStart(3, '0');
  
  return `${hours}:${minutes}:${seconds},${miliseconds}`;
}