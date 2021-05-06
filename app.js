"use strict"

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ]
//function to calculate random//
function random(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;}

const seattle = {
    city: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookieSold: 6.3,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    
    randCookies: random(this.minCustPerHour, this.maxCustPerHour), 
    randCust: random(this.minCustPerHour, this.maxCustPerHour),

    randCookiesPerHour: function() {
                 for (let i = 0; i < hours.length; i++) {
           console.log(this.randCookies);
          }
}
};
//calling to calculate random number??
console.log(seattle.randCookiesPerHour());




// const tokyo = {
//     city: 'Tokyo',
//     minCustPerHour: 3,
//     maxCustPerHour: 24,
//     avgCookieSold: 1.2,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],
//     totalDailyCookies: 0,

//     randCookiesPerHour: random(this.minCustPerHour, this.maxCustPerHour), 
//     randCustPerHour: random(this.minCustPerHour, this.maxCustPerHour),

//     randCookiesPerHour: function() {
//         for (i = 0; i < hours.length; i++) {
//            return seattle.randCookiesPerHour; 
//         }
//     }
// };
    


// const dubai = {
//     city: 'Dubai',
//     minCustPerHour: 11,
//     maxCustPerHour: 38,
//     avgCookieSold: 3.7,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],
//     totalDailyCookies: 0,

//     randCookiePerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);
//     },
//     randCustPerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);

//     },
// render() {

// }
// };

// const paris = {
//     city: 'Paris',
//     minCustPerHour: 20,
//     maxCustPerHour: 38,
//     avgCookieSold: 2.3,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],
//     totalDailyCookies: 0,

//     randCookiePerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);
//     },
//     randCustPerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);

//     },
// render() {

// }
// };

// const lima = {
//     city: 'Lima',
//     minCustPerHour: 2,
//     maxCustPerHour: 16,
//     avgCookieSold: 4.6,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],
//     totalDailyCookies: 0,

//     randCookiePerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);
//     },
//     randCustPerHour: function() {
//         console.log(Math.floor(Math.random() * maxCustPerHour) + minCustPerHour);

//     },
// render() {

// }
// };
